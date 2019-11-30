import React from "react";
import { Link } from "react-router-dom";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.userId = this.props.match.params.id;
    this.state = {};
  }

  componentDidMount(e) {
    // this.poke = this.props.requestSinglePokemon(this.pokeId);
    this.props.requestSingleUser(this.userId).then(response => {
      this.setState({ user: response.user.data, activeComponent: "profile" });
    });
  }


  render() {
    if (this.state.user) {
      return (
       <div>
           hi
       </div>
      );
    } else {
      return (
        <div>
            gosh
        </div>
      );
    }
  }
}

export default Settings;
