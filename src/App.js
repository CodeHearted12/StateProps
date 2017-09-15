import React, { Component } from "react";
import NavBar from "./NavBar";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: "none"
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <PlayListForm userName={this.state.userName}
                        songArtist={this.state.songArtist}
                        songTitle={this.state.songTitle}
                        songNotes={this.state.songNotes}  />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
