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
      errors: "",
      loading: false
    //   selectedFile: null
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount(e) {
    this.props.requestSingleUser(this.userId).then(response => {
      this.setState({ user: response.user.data, activeComponent: "profile" });
    })
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
    let submit = document.getElementById("settings-submit");
    submit.classList.remove("selected");
    submit.disabled = false;
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = event => {
    event.preventDefault();
    let submit = document.getElementById("settings-submit");
    submit.disabled = true;
    submit.classList.add("selected");
    this.setState({loading: true});
    const data = new FormData(event.target);
    data.append("file", this.state.profilePicture);
    axios
      .patch(`/api/users/${this.userId}`, data)
      .then(() => {
        this.setState({ profilePicture: "", loading: true})
        this.props.closeModal();
        submit.disabled = false;
        submit.classList.remove("selected");

      }).then(() => {
        this.setState({loading: false})
        this.props.requestSingleUser(this.userId)
      })
      .catch(error => {
        submit.disabled = false;
        submit.classList.remove("selected");
      });
  };

  render() {
    let submitButton = this.state.previewUrl ? (
      <button type="submit" className="settings-submit" id="settings-submit">
        Upload
      </button>
    ) : (
      <button type="submit" className="settings-submit selected" id="settings-submit" disabled="true">
        Upload
      </button>
    );

     let loadingDisplay = this.state.loading ? (
       <div className="settings-loading-container">
         <div class="loading" style={{ fontSize: "14px"}}>Loading...</div>
         <div class="lds-ellipsis">
           <div style={{ backgroundColor: "rgb(255,128,0)" }}> </div>
           <div style={{ backgroundColor: "rgb(0,224,84)" }}></div>
           <div style={{ backgroundColor: "rgb(64,188,244)" }}></div>
         </div>
       </div>
     ) : (
       submitButton
     );

    let item = this.state.profilePicture ? <img className="profile-image-preview" src={this.state.profilePicture}></img> : <div></div>;
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
              {loadingDisplay}
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
      return (
        <div>
          <div class="loading" style={{ fontSize: "14px" }}>
            Loading...
          </div>
          <div class="lds-ellipsis">
            <div style={{ backgroundColor: "rgb(255,128,0)" }}> </div>
            <div style={{ backgroundColor: "rgb(0,224,84)" }}></div>
            <div style={{ backgroundColor: "rgb(64,188,244)" }}></div>
          </div>
        </div>
      );
    }
  }
}

export default Settings;
