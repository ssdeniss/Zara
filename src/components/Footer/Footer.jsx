import React from 'react'
import logo from "../../assets/pictures/logo.png"
import sprite from "../../assets/icons/sprite.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo"><img src={logo} alt="" /></div>
          <div className="footer__motto">We make you visible</div>
          <div className="footer__social">
          <svg className="icon"><use className='icon' href={sprite + '#facebook'}></use></svg>
          <svg className="icon"><use className='icon' href={sprite + '#telegram'}></use></svg>
          <svg className="icon"><use className='icon' href={sprite + '#twitter'}></use></svg>
          <svg className="icon"><use className='icon' href={sprite + '#snapchat'}></use></svg>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer