import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/pictures/logo.png"
import sprite from "../../assets/icons/sprite.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo"><img src={logo} alt="" /></div>
          <div className="header__navigation">
            <Link className="header__navigation-link" to={"/cart"}>Men</Link>
            <Link className="header__navigation-link" to={"/cart"}>Women</Link>
            <Link className="header__navigation-link" to={"/cart"}>Childs</Link>
          </div>
          <div className="header__btns">
            <div className="header__btns-search"> <svg className="icon"><use className='icon' href={sprite + '#search'}></use></svg></div>
            <div className="header__btns-favorite"><svg className="icon"><use className='icon' href={sprite + '#favorite'}></use></svg></div>
            <div className="header__btns-cart"><svg className="icon"><use className='icon' href={sprite + '#bug'}></use></svg></div>
            <div className="header__btns-profile"><svg className="icon"><use className='icon' href={sprite + '#profile'}></use></svg></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header