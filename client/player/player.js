import React from 'react'
import player1Blast from './sounds/player-1-blast.mp3'
import player1Beam from './sounds/player-1-beam.mp3'

export default React.createClass({
  propTypes: {
    player: React.PropTypes.object
  },

  render: function () {
    return <div className={`player player-1 player-${this.props.player.status} player-facing-${this.props.player.pos.facing}`}>
      <audio id='beam-sound' src={player1Beam} preload='auto'>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <audio id='blast-sound' src={player1Blast} preload='auto'>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className='flames'/>
      <div className='beam'/>
      <div className='blast'>
        <div className='particle'/>
        <div className='particle'/>
        <div className='particle'/>
      </div>
    </div>
  }
})
