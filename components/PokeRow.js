/*
 * Module dependencies
 */

import React from 'react';
import PokeAvatar from './PokeAvatar';

class PokeRow extends React.Component {
  render() {
    return <li className="pokerow">
      <PokeAvatar number={this.props.number} />
      {this.props.name}
    </li>
  }
}

PokeRow.defaultProps = {name: "no hay pokemon" };

export default PokeRow;