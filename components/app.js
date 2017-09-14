import React, { Component } from "react";
import NavBar from "./NavBar";
import PlayListForm from "./PlayListForm";
import PlayList from "./PlayList";

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

              <PlayListForm
              userName={this.state.userName}
              songTitle={this.state.songTitle}
              songArtist={this.state.songArtist}
              songNotes={this.state.songNotes} />

                <PlayList />
              </div>
            </div>

          );
        }
      }
      export default App;
