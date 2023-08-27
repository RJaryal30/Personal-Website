import React from 'react'
import './resume.css'
import pdf from '../../assets/Resume-RohanJaryal.pdf'
const featuresData = [
  {
    title: 'Check Out My LinkedIn',
    href:"https://www.linkedin.com/in/rohanjaryal/"
  }
]
const Resume = () => {
  return (
    <div className='car__resume section__padding' id="resume">
        <div className='car__resume-heading'>
          <h1 className='gradient__text'>Check Out My Resume</h1>
          <p>Last updated: 8/27/2023</p>
          <div className='car__resume-pdf-container color-change-3x'>
            <embed src={pdf + "#toolbar=0"} type="application/pdf"/>
          </div>
        </div>  
        <div className='car__resume-container'>
          {featuresData.map((item) => (
            <>
            <h1><a href={item.href} download="Resume.pdf">{item.title}</a></h1>
            <div />
            </>
          ))}
        </div> 
    </div>
  )
}

export default Resume