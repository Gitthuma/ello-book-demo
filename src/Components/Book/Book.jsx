import React from 'react'
import './Book.css'

//import images and apply them
import Fruits from '../../Assets/Fruits.jpeg'
import Apple from '../../Assets/Apple.jpeg'
import Strawberry from '../../Assets/Strawberry.jpeg'
import Pineapple from '../../Assets/Pineapple.jpeg'

function Book() {
  return (
    //create div of class book
    //create 3 inputs of type checkbox with id c1 to c3
    //create div for image of class cover
    //create div of class flip__book
    //inside div of class flip__book create div of class flip with id of p1
    //inside div of class flip create div of class back
    //inside div of class back, add img of and label of class back-btn for C1
    //Create div of class font with h3, p and label of class next__btn for c1
    //Duplicate two times div of class flip with iots content
    <div className='book'>
      
      <input type="checkbox" id='c1' />
      <input type="checkbox" id='c2' />
      <input type="checkbox" id='c3' />

      <div id='cover'>
        <img src={Fruits} alt="Cover Photo of fruits" />

      </div>

      <div className='flip__book'>
        
        <div className='flip' id='p1'>
          
          <div className='back'>
            <img src={Apple} alt="Apple image" />
            <label className='back__btn' for='c1'>Back</label>
          </div>

          <div className='front'>
            <h2>Apple</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, minus.</p>
            <label className='next__btn' for='c1'>Next</label>
          </div>

        </div>

        <div className='flip' id='p2'>
          
          <div className='back'>
            <img src={Strawberry} alt="Strawberry image" />
            <label className='back__btn' for='c2'>Back</label>
          </div>

          <div className='front'>
            <h2>Strawberry</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, minus.</p>
            <label className='next__btn' for='c2'>Next</label>
          </div>

        </div>

        <div className='flip' id='p3'>
          
          <div className='back'>
            <img src={Pineapple} alt="Pineapple image" />
            <label className='back__btn' for='c3'>Back</label>
          </div>

          <div className='front'>
            <h2>Pineapple</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, minus.</p>
            <label className='next__btn' for='c3'>Next</label>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Book