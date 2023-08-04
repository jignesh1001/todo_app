import React from 'react'
import './Footer.css'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top:"10vh",
    // bottom: "0vh",
    width : "100%"
  }
  
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
       <p className='text-center'>copyright &copy; 2023 || codewithlove &hearts;</p> 
       <div className='pt-4 pb-4  mr-8 footerInfo'>
        <ul>
        <li>docs</li>
       <li>support</li>
       <li>people</li>
       <li>community</li>
        </ul>
       </div>
    </footer>
  )
}

export default Footer
