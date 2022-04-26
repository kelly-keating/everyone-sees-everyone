import React, { useState } from 'react'

const title = '🚀 Speedbacking 🚀'
const init = ['Person 1', 'Person 2', 'Person 3', 'etc']
let stationary = 'no one - have a rest'

if (init.length % 2 === 0) {
  stationary = init.shift()
}

function App () {
  const [names, setNames] = useState(init)

  const move = () => {
    const copy = [...names]
    const peep = copy.pop()
    copy.unshift(peep)

    setNames(copy.map((p, idx) => <img id='loading' key={idx} src='https://www.vertoyo.com/assets/images/vertoyo/loading_circle.gif'/>))
    setTimeout(() => {
      setNames(copy)
    }, 1000)
  }

  const size = names.length / 2
  const rooms = []

  for (let i = 0; i < size; i++) {
    const p1 = names[i]
    const p2 = i === 0 ? stationary : names[names.length - i]

    rooms.push(
      <div className='room' key={'room' + i}>
        <p>{p1}</p>
        <h3>Room {i + 1}</h3>
        <p>{p2}</p>
      </div>
    )
  }

  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <button onClick={move}>Move</button>
      </header>
      <section className="rooms">
        {rooms}
      </section>
    </>
  )
}

export default App
