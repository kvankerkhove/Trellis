import React, { useEffect, useState } from 'react'
// import './Crops.css'
import './Crops.scss'
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
    // let firstCropId = `slide-${cropsInFamily[0].id}`
    const renderRadioInputs = cropsInFamily.slice(1).map(crop => {
      let inputId = `slide-${cropsInFamily.indexOf(crop) + 1}`

      // console.log(i)
      // let cropId = `slide-${crop.id}`
      return <input type="radio" name="slides" id={inputId}></input>
    })

    const renderCarouselSlides = cropsInFamily.map(crop => {
      return (
        <li className="carousel__slide">
          <figure>
            <div>
              <img src={ require(`../images/${crop.image}`)} alt=""/>
            </div>
            <figcaption>
              Details: {crop.details}
            </figcaption>
          </figure>
        </li>
      )
    })

    console.log(cropsInFamily)

    const renderCarouselThumbnails = cropsInFamily.map(crop => {
      let inputId = `slide-${cropsInFamily.indexOf(crop) + 1}`
      

      return (
        <li>
          <label htmlFor={inputId}><img src={ require(`../images/${crop.image}`)} alt=""/></label>
        </li>
      )
    })

    // console.log(renderCarouselThumbnails)

    return (
      <section>
        <div id={id} className="page container">
          <div className="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1"/>
            {renderRadioInputs}
            <ul class="carousel__slides">
              {renderCarouselSlides}
            </ul>
            <ul class="carousel__thumbnails">
              {renderCarouselThumbnails}
            </ul>
          </div>
        </div>

      </section>
      
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
      <div className="whole-container">
        
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


{/* <section>
    <div class="container">
        <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1">
            <input type="radio" name="slides" id="slide-2">
            <input type="radio" name="slides" id="slide-3">
            <input type="radio" name="slides" id="slide-4">
            <input type="radio" name="slides" id="slide-5">
            <input type="radio" name="slides" id="slide-6">
            <ul class="carousel__slides">
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1041/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Tim Marshall</span>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1043/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Christian Joudrey</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1044/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Steve Carter</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1045/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Aleksandra Boguslawska</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1049/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Rosan Harmens</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1052/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Annie Spratt</span>                            
                        </figcaption>
                    </figure>
                </li>
            </ul>    
            <ul class="carousel__thumbnails">
                <li>
                    <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""></label>
                </li>
            </ul>
        </div>
    </div>
</section> */}