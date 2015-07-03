/*
 * Module dependencies
 */

import React from 'react';
import PokeAvatar from './PokeAvatar';

class PokeRow extends React.Component {
  onClicked(ev){
  	this.props.growl.call(this,this.props.name)
  }

  render() {
    return <li className="pokerow" onClick={this.onClicked.bind(this)}>
      <PokeAvatar number={this.props.number} />
      {this.props.name}
    </li>
  }
}

PokeRow.defaultProps = {name: "no hay pokemon" };

export default PokeRow;