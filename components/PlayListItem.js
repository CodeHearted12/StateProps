import React, { Component } from 'react';
class PlayListItem extends Component {
  render() {

let songs = this.props.songRender.songs.map((e, index) => {
   if (e.userName && e.songArtist && e.songTitle) {
     return (
       <div key={index} className="card" style={{ margin: 10 }}>
        <div className="card-block">
          <h4 className="card-title">
            Artist: {e.songArtist}
          </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Title: {e.songTitle}
              </li>
            <li className="list-group-item">
              Added by: {e.userName}
            </li>
            <li className="list-group-item">
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
