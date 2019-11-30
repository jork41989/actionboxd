import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = `/api/users/:user_id/settings`;
} else {
  endpoint = "http://localhost:5000/api/users/:user_id/settings";
}

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.userId = this.props.match.params.id;
    this.state = {
      profilePicture: "",
      previewUrl: ""
    //   selectedFile: null
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount(e) {
    this.props.requestSingleUser(this.userId).then(response => {
      this.setState({ user: response.user.data, activeComponent: "profile" });
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
    const data = new FormData(event.target);
    data.append("file", this.state.profilePicture);

    axios
      .patch(endpoint, data)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        alert("Oops some error happened, please try again");
      });
  };

  render() {
        let preview = this.state.previewUrl ? 
        <img className="art-form-image-previewed" alt="" src={this.state.previewUrl} /> 
            : <span
                role="img"
                alt=""
                aria-label="debug"
                className="art-form-image-debug-icon">📷</span>;


    if (this.state.user) {
      return (
        <div>
          hi
          <form onSubmit={this.handleUpload}>
            <div className="form-group">
              <input
                type="file"
                name=""
                id=""
                onChange={this.handleSelectedFile}
              />
            </div>
            {preview}
            <button type="submit" class="btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      );
    } else {
      return <div>gosh</div>;
    }
  }
}

export default Settings;
