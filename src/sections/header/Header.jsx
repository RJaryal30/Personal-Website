import React from 'react'
import './header.css'
import cooper1 from '../../assets/cooper1.png'
const Header = () => {
  return (
    <div className="car__header section__padding" id="home">
        <div className="car__header-content">
          <h1 className="gradient__text">Welcome to My Website!</h1>
          <p>This website is a personal project I made to get some more practice with React while also having 
            a place to showcase who I am and my experiences. It is still a work in progress, but I hope you find this little project cool.
            Thanks for stopping by! Also, here's a photo of my dog Cooper :D.
          </p>
        </div>   
        <div className="car__header-image">
          <img src={cooper1} alt="cooper1" />
        </div>
    </div>
  )
}

export default Header