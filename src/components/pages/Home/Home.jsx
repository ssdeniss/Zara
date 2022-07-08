import React from 'react'
import select1 from "../../../assets/pictures/home-select1.jpg"
import select2 from "../../../assets/pictures/home-select2.jpg"

const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <div className="home__content">
          <div className="home__top">
            <div className="home__select-women">
              <div className="home__top-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Women</div>
            </div>
            <div className="home__select-men">
              <div className="home__top-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Men</div>
            </div>
          </div>
          <div className="home__category">
            <div className="home__category-top">
              <div className="home__category-title">WOMEN’S</div>
              <div className="home__category-filters">
                <div className="home__category-filter">new arrivals</div>
                <div className="home__category-filter">specials</div>
                <div className="home__category-filter">bestsellers</div>
                <div className="home__category-filter">most viewed</div>
                <div className="home__category-filter">all</div>
              </div>
            </div>
            <div className="home__category-products">
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
            </div>

          </div>
          <div className="home__category">
            <div className="home__category-top">
              <div className="home__category-title">MEN'S</div>
              <div className="home__category-filters">
                <div className="home__category-filter">new arrivals</div>
                <div className="home__category-filter">specials</div>
                <div className="home__category-filter">bestsellers</div>
                <div className="home__category-filter">most viewed</div>
                <div className="home__category-filter">all</div>
              </div>
            </div>
            <div className="home__category-products">
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
              <div className="home__category-product"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home