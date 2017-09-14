import React, { Component } from 'react';
class PlayListItem extends Component {
  render() {

let songs = this.props.songRender.songs.map((e, index) => {
   if (e.userName && e.songArtist && e.songTitle) {
     return (
       <div key={index} className="card" style={{ margin: 10 }}>
        <div className="Mycard">
          <h4 className="title">
            Artist: {e.songArtist}
          </h4>
            <ul className="list-group list-group-flush">
              <li className="group">
                Title: {e.songTitle}
              </li>
            <li className="group">
              Added by: {e.userName}
            </li>
            <li className="group">
              Notes: {e.songNotes}
            </li>
              </ul>
            </div>
          </div>
          );
        }
      });
        return (
          <div>
            {songs}
          </div>
      );
    }
  }
  export default PlayListItem
