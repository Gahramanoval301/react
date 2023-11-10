import React, { useState } from 'react'
import '../inputWork1/index.css'
const InputWork4 = () => {



  return (
    <>
      <h1 style={{ margin: '7px 14px' }}>Simple Accordion</h1>
      <div className='form'>
        <h2>Almayt, Kazakhstan</h2>
        <Panel title='About' >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel incidunt nihil vitae atque eligendi iste aperiam soluta qui dolores? Distinctio repellat fugit doloribus illum magni facere optio ut similique maiores, officia voluptatem omnis sit sapiente architecto aliquam quidem veniam voluptatibus consequuntur earum corporis qui? Voluptatum exercitationem ad harum quis laudantium.
        </Panel>
        <hr />
        <Panel title='Etymology'  >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum, suscipit corporis minus in magnam doloribus sint, accusantium eum illo voluptas unde necessitatibus voluptatibus tenetur? In repellendus excepturi vel cupiditate.

        </Panel>
      </div>
    </>
  )
}

export default InputWork4
function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <section className='panel'>
      <h3>{title}</h3>
      {
        isActive ?
          <div>
            <p >{children}</p>
            <button onClick={() => setIsActive(false)}>Hide</button>
          </div>
          : (<button onClick={() => setIsActive(true)}>Show</button>)
      }
    </section>
  )
}