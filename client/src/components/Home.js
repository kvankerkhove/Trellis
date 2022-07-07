import React from 'react'
import './Home.css'
import logo from '../images/logo.png'

function Home({isLoggedIn, user}) {
  let scroll = window.requestAnimationFrame || function(callback){
    window.setTimeout(callback, 1000/60)}

  
  let elementsToShow = document.querySelectorAll('.show-on-scroll')

  const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function(target) {
    observer.observe(target);
  });

  console.log(observer)

  function loop(){
    elementsToShow.forEach(function (element){
      console.log(element)
  
      if(observer){
        element.classList.add('is-visible')
      } else {
        element.classList.remove('is-visible')
      }
    })
    scroll(loop)
  }

  // loop()



  return (
    <div>
      <header id="home-page-top-picture" className="show-on-scroll">
        { isLoggedIn ? <h1 id="welcome">Welcome, {user.first_name}</h1> : null }
        <br></br>
        <h1 id="first-slogan">Optimize your garden space</h1>
      </header>
      <div id="middle-section">
        <div id="first-half-middle-section">
          <div id="first-paragraph">
            <h2>Create your dream garden</h2>
            <p>At Trellis, we believe in making the most out of your space, thats why we've created an app where you can optimize the amount of food you can grow in your garden</p>
            <p>ldfsjlkfdjsl jfowjeow jdoiwj efJDfiow dks JFoewj dsklf FSe ogjoemdlsjfo jfjncdkjoe jcdfjocwjckld  jf jeoiwjdjfs mfkl ipofew i jfpr cnlkp fksdlj dji e jfoe jfd</p>
          </div>
          <img className="inline-photo show-on-scroll" id='tomato-hands-picture' src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
        </div>
        <img className="inline-photo show-on-scroll" id="tomato-trellis-picture" src="https://images.unsplash.com/photo-1655187782891-ce29e3d163fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="tomato" />
      </div>
      <div id="middle-section-picture">
        <h1 id="second-slogan">Grow fresh vegetables in your backyard</h1>
      </div>
      <div id="last-section">
        <img className='inline-photo show-on-scroll' id='chard' src="https://images.unsplash.com/photo-1621459555843-9a77f1d03fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        <div id="second-paragraph">
            <h2>What this app offers?</h2>
            <p>At Trellis, we believe in making the most out of your space, thats why we've created an app where you can optimize the amount of food you can grow in your garden</p>
            <p>ldfsjlkfdjsl jfowjeow jdoiwj efJDfiow dks JFoewj dsklf FSe ogjoemdlsjfo jfjncdkjoe jcdfjocwjckld  jf jeoiwjdjfs mfkl ipofew i jfpr cnlkp fksdlj dji e jfoe jfd</p>
          </div>
        <div id="last-section-right-side">
          <img className="inline-photo show-on-scroll" id='harvest-basket' src='https://images.unsplash.com/photo-1624668430039-0175a0fbf006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
          <img className="inline-photo show-on-scroll" id='potting-mix' src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
        </div>
        
      </div>
      <img id='logo' src={logo}/>


    </div>

  )
}

export default Home