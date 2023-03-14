import React, { useEffect, useState } from 'react'
import './Crops.css'
import { IoIosTime } from 'react-icons/io'
import { FaSeedling } from 'react-icons/fa'
import { GiBasket } from 'react-icons/gi'

function Crops() {
  const [crops, setCrops] = useState([])

  useEffect(() => {
    fetch('/api/crops')
    .then(r => r.json())
    .then(data => {
      setCrops(data)
    })
  }, [])

  const plantFamilies = []

  //creates an array of all the plant families included in the list of crops
  crops.forEach(crop => {
    if(!plantFamilies.includes(crop.family) && crop.family !== 'N/A'){
      plantFamilies.push(crop.family)
    }
  })

  //renders a section on the crop page for each plant family
  const renderTabs = plantFamilies.map(family => {
    let href = `#${family.toLowerCase()}`
    return <li key={plantFamilies.indexOf(family)}><a class="tab" href={href}>{family}</a></li>
  })

  const renderPages = plantFamilies.map(family => {
    let id = `${family.toLowerCase()}`
    //filters all the crops that are in a specific family
    let cropsInFamily = crops.filter(crop => crop.family === family)
    //creates a tile for each crop in specific family
    let renderCropsInFamily = cropsInFamily.map(crop => {
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

    return (
      <div key={plantFamilies.indexOf(family)} id={id} class="page">
        {renderCropsInFamily}
      </div>
    )
  })

  // troubleshooting intersection observer on scroll tab animations

  // const tabs = document.querySelectorAll(".tab")
  // const pages = document.querySelectorAll(".page")

  // const observer = new IntersectionObserver((entries, observer) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       const index = Array.from(pages).indexOf(entry.target)
  //       tabs.forEach(tab => {
  //         tab.classList.remove("activeTab")
  //       })
  //         tabs[index].classList.add("activeTab")
  //     }
  //   })
  //   }, {
  //     threshold: 0.25,
  //   })
  //   pages.forEach(page => {
  //     observer.observe(page)
  // })
 
  return (
    <div>
      <nav className="navbar">
      <ul id="crops-ul">
        {renderTabs}
      </ul>
      </nav>
      <div className="container">
        {renderPages}
      </div>
    </div>
  )
}

export default Crops