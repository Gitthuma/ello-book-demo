import React from 'react'

function Cover() {
  return (
    //create div of class book
    //create 3 inputs of type checkbox with id c1 to c3
    //create div for image of class cover
    //create div of class flip__book
    //inside div of class flip__book create div of class flip with id of p1
    //inside div of class flip create div of class back
    <div className='book'>
      
      <input type="checkbox" id='c1' />
      <input type="checkbox" id='c2' />
      <input type="checkbox" id='c3' />

      <div id='cover'>
        <img src="" alt="" />

      </div>

      <div className='flip__book'>
        <div className='flip' id='p1'>
          <div className='back'>

          </div>

        </div>

      </div>
      

    </div>
  )
}

export default Cover