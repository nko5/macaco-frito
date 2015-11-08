module.exports = function (context, socket) {
  return function () {
    context.match.players_ready[context.session.playerId] = true
    console.log(`player ${context.session.playerId} ready`)

    if (context.match.isReadyToStart()) {
      console.log(`starting match ${context.match.id}`)
      new GameLoop(socket, context.match).start()
    }
  }
}

class GameLoop {
  constructor (socket, match) {
    this.socket = socket
    this.match = match
    this.turnDuration = 30
  }

  start () {
    this.match.incTurn()
    if (this.match.isFinished()) {
      this.emit('end-match', { winner: this.match.winner })
    } else {
      this.run().then(() => {
        if (this.match.isFinished()) {
          this.emit('end-match', { winner: this.match.winner })
        } else {
          this.start()
        }
      })
    }
  }

  run () {
    return new Promise((resolve, reject) => {
      this.match.clearCommands()
      this.match.acceptCommands()
      this.emit('start-turn', { turn: this.match.turn })
      this.scheduleTick(this.turnDuration, resolve)
    }).then(() => {
      this.executeCommands()
      this.match.blockCommands()
      this.match.clearCommands()
      this.emit('end-turn')
    })
  }

  executeCommands () {
    var numberOfSlots = 5
    for (var i = 0; i < numberOfSlots; i++) {
      this.match.executeSlotCommands(i)
      this.emit('render', {players: this.match.players})
      this.match.clearPlayersTransientState()
      if (this.match.checkEndGame()) break
    }
  }

  scheduleTick (timeLeft, callback) {
    setTimeout(() => {
      this.emit('tick', { time_left: timeLeft })
      if (timeLeft > 0) this.scheduleTick(timeLeft - 1, callback)
      else callback()
    }, 1000)
  }

  emit (event, message) {
    this.socket.to(this.match.id).emit(event, message)
    this.socket.emit(event, message)
  }
}
