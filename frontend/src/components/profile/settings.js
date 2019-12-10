import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./settings.css"
import ReactTooltip from 'react-tooltip';

let endpoint;

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.userId = this.props.userId;
    this.state = {
      profilePicture: this.props.profilePicture || "",
      previewUrl: "", 
      errors: ""
    //   selectedFile: null
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount(e) {
    this.props.requestSingleUser(this.userId).then(response => {
      this.setState({ user: response.user.data, activeComponent: "profile" });
    })
    .catch(err => {
      console.log(err)
    });
  }

  handleSelectedFile = e => {
    e.preventDefault();
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
        this.setState({profilePicture: file, previewUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = event => {
    event.preventDefault();
    let submit = document.getElementById("settings-submit");
    submit.disabled = true;
    submit.classList.add("selected");
    if (!this.state.previewUrl) {
      this.setState({errors: "Please choose a file to upload."});
    }

    const data = new FormData(event.target);
    data.append("file", this.state.profilePicture);
    axios
      // .patch(endpoint, data)
      .patch(`/api/users/${this.userId}`, data)
      .then(() => {
        // this.props.history.push("/");
        this.setState({ profilePicture: ""})
        this.props.closeModal();
        submit.disabled = false;
        submit.classList.remove("selected")
      }).then(() => this.props.requestSingleUser(this.userId))
      .catch(error => {
        this.setState({ errors: "Hey"});
        this.renderErrors();
        submit.disabled = false;
        submit.classList.remove("selected");
        // alert("Oops some error happened, please try again");
        console.log(error);
      });
  };

  renderErrors() {
    debugger;
    if (this.state.errors) {
      return <div>{this.state.errors}</div>
    } else {
      return <div>Nothing to see here.</div>
    }
  }

  render() {
debugger;
    let item = this.state.profilePicture ? <img className="profile-image-preview" src={this.state.profilePicture}></img> : <div>hi</div>;
        let preview = this.state.previewUrl ? 
        <img className="profile-image-preview" alt="" src={this.state.previewUrl} /> 
            : <div>{item}</div>;


    if (this.state.user) {
      return (
        <div className="settings-container">
          <form className="settings-form" onSubmit={this.handleUpload}>
            {preview}
            <div className="settings-buttons-container">
              <label for="file" className="file-button-label">
                <div className="form-group">
                  <p className="choose-file">Select</p>
                  <input
                    type="file"
                    name=""
                    id="file"
                    onChange={this.handleSelectedFile}
                    className="file-input"
                  />
                </div>
              </label>
              {this.renderErrors}
              <button type="submit" className="settings-submit" id="settings-submit">
                Upload
              </button>
            </div>
          </form>
          <div
            className="settings-close-button"
            onClick={() => this.props.closeModal()}
          >
            X
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default Settings;
