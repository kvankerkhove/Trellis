import React, { useEffect, useState } from 'react'
import './Crops.css'
// import escarole from '../images/escarole.png'

function Crops() {
  const [crops, setCrops] = useState([])

  useEffect(() => {
    fetch('/crops')
    .then(r => r.json())
    .then(data => setCrops(data))
  }, [])

  // console.log(escarole)
  // let cropImages = [escarole]


  // useEffect(() => {
  //   window.location.reload(false);
  // }, [])
  

  const plantFamilies = []
  console.log(crops)

  crops.forEach(crop => {
    if(!plantFamilies.includes(crop.family) && crop.family !== 'N/A'){
      plantFamilies.push(crop.family)
    }
  })

  const renderTabs = plantFamilies.map(family => {
    let href = `#${family.toLowerCase()}`
    return <li><a class="tab" href={href}>{family}</a></li>
  })

  const renderPages = plantFamilies.map(family => {
    let id = `${family.toLowerCase()}`
    let cropsInFamily = crops.filter(crop => crop.family === family)
    let renderCropsInFamily = cropsInFamily.map(crop => {
      console.log(crop.image)
      // let findCrop = cropImages.find(imageUrl => imageUrl.includes(crop.name.toLowerCase()))
      return (
        <div className="crop-tile-container">
          <div className="crop-tile">
            <h1>{crop.name}</h1>
            <img src={ require(`../images/${crop.image}`)} height='100px' width='100px'/>
            <small><b>Watering needs:</b> {crop.watering_needs}</small>
          </div>
        </div>
      )
    })
    // console.log(renderCropsInFamily)
    return (
      <div id={id} class="page">
        {renderCropsInFamily}
      </div>
    )
  })

  const tabs = document.querySelectorAll(".tab")
  const pages = document.querySelectorAll(".page")
  const scrollToTop = document.querySelector(".scrollToTop")

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          const index = Array.from(pages).indexOf(entry.target)
          tabs.forEach(tab => {
            tab.classList.remove("activeTab")
          })
          tabs[index].classList.add("activeTab")
        }
      })
    }, {
      threshold: 0.25,
    })
    pages.forEach(page => {
      observer.observe(page)
    })

  


  
  return (
    <div>
      <nav className="navbar">
      <ul>
        {/* <li><a class="tab" href="#home">Asters</a></li>
        <li><a class="tab" href="#services">Brassicas</a></li>
        <li><a class="tab" href="#about">Nightshades</a></li>
        <li><a class="tab" href="#contact">Umbels</a></li> */}
        {renderTabs}
      </ul>
      </nav>
      <div className="container">
        
        {/* <div id="home" class="page">Home</div>
        <div id="services" class="page">Services</div>
        <div id="about" class="page">About</div>
        <div id="contact" class="page">Contact</div> */}
            {renderPages}
      </div>
    </div>
  )
}

export default Crops