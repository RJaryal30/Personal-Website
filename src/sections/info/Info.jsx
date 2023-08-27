import React from 'react'
import './info.css'
import { Feature } from '../../components'

const Info = () => {
  return (
    <div className='car__info section__margin' id="info">
      <div className='car__info-feature'>
        <h1>About Me</h1>
      </div>
      <div className='car__info-container'>
        <Feature title="Education" text="I am a student a Georgia Institute of Technology majoring in computer science and my threads are intelligence 
        and modeling & simulation. I am part of the GT iOS club and Archery club. Also, I am continuing my reasearch with the medical image processing team for my VIP (junior design), 
        and we aim to develop models that can accurately identify lung disease and Covid-19." />
        <Feature title="Experience" text="For the past two summers I have interned at NCR. My first summer I was a data analyst intern, and my goal was to improve the pre-calls process.
        I was able to automate the process by creating a system that completed the task of pre-calls with less resources spent. My second summer I was a SWE intern, and my team and I developed 
        an API to create a representative company, its sites, and its catalog. The API was developed to assist testing NCR commerce solutions." />
        <Feature title="Interest" text="I have always been extremely interested in artifical intelligence and its applications. This semester I am taking intro to artificial intelligence, 
        machine learning, and computer vision as part of my intelligence thread requirements. I am excited to get valuable skills from these classes as well as through my continued research with my VIP team. I 
        also enjoy working with cloud technologies, and I dabble in front-end development although I prefer back-end."/>
      </div>
    </div>
  )
}

export default Info