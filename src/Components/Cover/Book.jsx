import React from 'react'

function Cover() {
  return (
    //create div of class book
    //create 3 inputs of type checkbox with id c1 to c3
    //create div for image of class cover
    //create div of class flip__book
    <div className='book'>
      
      <input type="checkbox" id='c1' />
      <input type="checkbox" id='c2' />
      <input type="checkbox" id='c3' />

      <div id='cover'>
        <img src="" alt="" />

      </div>

      <div className='flip__book'>

      </div>
      

    </div>
  )
}

export default Cover