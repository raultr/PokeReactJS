/*
 * Module dependencies
 */

import React from 'react';

class PokeAvatar extends React.Component {
  render() {
    var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
    return <div className="avatar-container">
               <img src={url} className="avatar" />
            </div>
  }
}

export default PokeAvatar;