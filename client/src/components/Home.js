import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useHistory } from 'react-router-dom'
import './Home.css'
import logo from '../images/logo.png'


function Home({isLoggedIn}) {
  //utilize useInView hook to trigger element transitions on scroll
  const { ref: myPic1, inView: pic1IsVisible} = useInView()
  const { ref: myPic2, inView: pic2IsVisible} = useInView()
  const { ref: myPic3, inView: pic3IsVisible} = useInView()
  const { ref: myPic4, inView: pic4IsVisible} = useInView()
  const { ref: myPic5, inView: pic5IsVisible} = useInView()
  const { ref: myHeader, inView: headerIsVisible } = useInView()

  const history = useHistory()

  const one = 'animate-tomato-hands-pic'
  const two = 'animate-tomato-trellis-pic'
  const three = 'animate-chard-pic'
  const four = 'animate-harvest-basket-pic'
  const five = 'animate-potting-mix-pic'
  const animateHeader = 'animate-first-slogan'

  const uno = pic1IsVisible
  const dos = pic2IsVisible
  const tres = pic3IsVisible
  const quatro = pic4IsVisible
  const cinco = pic5IsVisible
  const header = headerIsVisible
  
  let tomatoHandsPic = document.querySelectorAll('.tomato-hands-pic')
  let tomatoTrellisPic = document.querySelectorAll('.tomato-trellis-pic')
  let chard = document.querySelectorAll('.chard-pic')
  let harvestBasket = document.querySelectorAll('.harvest-basket-pic')
  let pottingMix = document.querySelectorAll('.potting-mix-pic')
  let firstHeader = document.querySelectorAll('.first-slogan')

  //function that checks if an element hits the view port and adds the animation class to the the class list if true and removes if false
  function loop(elements, animationClass, inView){
    elements.forEach((element) => {
      if(inView){
        element.classList.add(animationClass)
      } else {
        if(element.classList.contains(animationClass)){
          element.classList.remove(animationClass)
        }
      }  
    })
  }

  //call the loop function on each element
  loop(tomatoHandsPic, one, uno)
  loop(tomatoTrellisPic, two, dos)
  loop(chard, three, tres)
  loop(harvestBasket, four, quatro)
  loop(pottingMix, five, cinco)
  loop(firstHeader, animateHeader, header)

  const handleSignInClick = () => {
    history.push('/login')
  }

  return (
    <div>
      <header id="home-page-top-picture" className="show-on-scroll">
        <br></br>
        <h1 ref={myHeader} className='first-slogan' id="first-slogan">optimize your garden space</h1>
        {isLoggedIn ? null : <button id="sign-in-button" onClick={handleSignInClick}>sign in</button> }
      </header>
      <div id="middle-section">
        <div id="first-half-middle-section">
          <div id="first-paragraph">
            <h2>create your dream garden</h2>
            <br></br>
            <p>At Trellis, we believe in making the most out of your space, thats why we've created an app where you can maximize the amount of food you can grow in your garden.</p>
            <br></br>
            <p>By incorporating biointensive spacing practices, your garden will be prolific while simultaneously increasing biodiversity and sustaining the fertility of the soil. Healthy soil means a healthy garden! </p>
          </div>
          <img ref={myPic1} className='tomato-hands-pic' id="tomato-hands-pic" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
        </div>
        <img ref={myPic2} className='tomato-trellis-pic' id="tomato-trellis-pic" src="https://images.unsplash.com/photo-1655187782891-ce29e3d163fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="tomato" />
      </div>
      <div id="middle-section-picture">
        <h1 id="second-slogan">Grow fresh vegetables in your backyard</h1>
      </div>
      <div id="last-section">
        <div id="last-section-left-side">
        <img ref={myPic3} className='chard-pic' id='chard-pic' src="https://images.unsplash.com/photo-1621459555843-9a77f1d03fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        </div>
        <div id="second-paragraph">
            <h2>What this app offers:</h2>
            <ul id="app-offers">
              <li>A full crops list with information on each vegetable including watering and growing information</li>
              <li>A customizable garden grid to design a garden that's perfect for you. </li>
              <li>Each garden you create displays information about the garden including number of seeds you'll need to buy, the projected yield of each crop, and a sowing and harvest schedule</li>
            </ul>
          </div>
        <div id="last-section-right-side">
          <img  ref={myPic4} className='harvest-basket-pic' id='harvest-basket-pic' src='https://images.unsplash.com/photo-1624668430039-0175a0fbf006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
          <img  ref={myPic5} className='potting-mix-pic' id='potting-mix-pic' src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
        </div>
      </div>
      <img id='logo-home' src={logo}/>
    </div>

  )
}

export default Home