import React, { useEffect, useState } from 'react'
import './Crops.css'
import { IoIosTime } from 'react-icons/io'
import { FaSeedling } from 'react-icons/fa'
import { GiBasket } from 'react-icons/gi'
// import escarole from '../images/escarole.png'

function Crops() {
  const [crops, setCrops] = useState([])

  useEffect(() => {
    fetch('/crops')
    .then(r => r.json())
    .then(data => {
      setCrops(data)
    })
  }, [])

  // let cropImages = [escarole]


  // useEffect(() => {
  //   window.location.reload(false);
  // }, [])
  

  const plantFamilies = []

  crops.forEach(crop => {
    if(!plantFamilies.includes(crop.family) && crop.family !== 'N/A'){
      plantFamilies.push(crop.family)
    }
  })

  const renderTabs = plantFamilies.map(family => {
    let href = `#${family.toLowerCase()}`
    return <li key={plantFamilies.indexOf(family)}><a class="tab" href={href}>{family}</a></li>
  })

  const renderPages = plantFamilies.map(family => {
    let id = `${family.toLowerCase()}`
    let cropsInFamily = crops.filter(crop => crop.family === family)
    let renderCropsInFamily = cropsInFamily.map(crop => {
      // let findCrop = cropImages.find(imageUrl => imageUrl.includes(crop.name.toLowerCase()))
      return (
        <div key={crop.id} className="crop-tile-container">
          <div className="card">
              <h2 className="card-title" >{crop.name}</h2>
              <img src={crop.url} style={{opacity: .8}}/>
              <p className="card-desc">
                <div className="icon-container">
                  <div className='plants-per'>
                    <small className='small'>PLANTS</small>
                    <FaSeedling className='icon'/>
                    <small>{crop.plants_per_sq_ft}</small>
                  </div>
                  <div className='dtm'>
                    <small className='small'>DTM</small>
                    <IoIosTime className='icon'/>
                    <small>{crop.days_to_maturity}</small>
                  </div>
                  <div className='yield'>
                    <small className='small'>YIELD</small>
                    <GiBasket className='icon' />
                    <small>{crop.projected_yield} {crop.yield_unit}</small>
                  </div>
                </div>
                <br></br>
                <b>Watering needs:</b> {crop.watering_needs}
                <br></br>
                <br></br>
                <b>Growing info:</b> {crop.details}
              </p>
          </div>
        </div>
      )
    })


    //old version
    // <div className="crop-tile-container">
    //   <div className="crop-tile">
    //     <div className="top-of-crop-tile">
    //       <img src={ require(`../images/${crop.image}`)} height='100px' width='100px'/>
    //       <h1 className="crop-name" >{crop.name}</h1>
    //     </div>
    //     <small><b>Watering needs:</b> {crop.watering_needs}</small>
    //   </div>
    // </div>

  //   <div class="card">
  //     <h2 class="card-title">Seal</h2>
  //     <img src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  //     <p class="card-desc">Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  //  </div>
    return (
      <div key={plantFamilies.indexOf(family)} id={id} class="page">
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
      <ul id="crops-ul">
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