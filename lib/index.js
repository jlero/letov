const fs = require('fs')

function Letov() {
  const lyrics = open()
  
  return random();

  function open() {
    return JSON.parse(fs.readFileSync(__dirname + '/../output.json'))
  }

  function random() {
    let song = Math.floor(Math.random() * lyrics.length)
    let string = Math.floor(Math.random() * lyrics[song].lyrics.length)
    return lyrics[song].lyrics[string] !== undefined 
     ? lyrics[song].lyrics[string] 
     : random()
  }
}

module.exports = Letov
