import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaBeer } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function App() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('tab1'); 
  const sectionStyle = {
    backgroundImage: "url('images/home.jpg')", // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',

};




const options = {
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  responsive: {
    0: { items: 1 },        // 1 item for small screens
    600: { items: 5 },      // 3 items for medium screens
    1000: { items: 5 },     // 5 items for larger screens
  },
};


const handleClick = (tab) => {
  setActiveTab(tab); // Set the active tab when an <li> is clicked
};




  return (
    <>


<nav class="navbar bg-body-tertiary">
  <div class="container py-2">
    <a class="navbar-brand" href="#">
      <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/logo.png" alt="Logo"   height="24" class="d-inline-block align-text-top" />
    </a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link text-dark" aria-current="page" href="#">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" aria-current="page" href="#">SHOP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" aria-current="page" href="#">NEWS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" aria-current="page" href="#">CONTACT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" aria-current="page" href="#"><FaCartShopping /></a>
      </li>
    </ul>
  </div>
</nav>




 


       <section className=' d-flex   align-items-center' style={sectionStyle}>
          <div className="container">
            <div className="row d-flex   align-items-center">
              <div className="col-lg-4">
                <h1 className='text-white'>NIKE AIR <br />MAX</h1>
                <h3 class="elementor-heading-title elementor-size-default">COMFY AND Trendy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button type="button" class="btn btn-dark">SHOP HERE</button>
              </div>
              <div className="col-lg-8">
              
      <div><img className='homeimg' src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/fillo-hero.png" alt="" /></div>
   
                
              </div>
            </div>
            
                     
          </div>
       </section>



       <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className='running text-white p-4'>
                <h3>RUNNING</h3>
                <button type="button" class="btn btn-dark mb-5">SEE PRODUCT</button>
                
              </div>
            </div>
            <div className="col-3">
              <div className='man text-white p-4'>
                <h3>WOMAN</h3>
                <button type="button" class="btn btn-dark mb-5">SEE PRODUCT</button>
                
              </div>
            </div>
            <div className="col-3">
              <div className='woman text-white p-4'>
                <h3>MAN</h3>
                <button type="button" class="btn btn-dark mb-5">SEE PRODUCT</button>
                

              </div>
            </div>
          </div>
        </div>
       </section>






       <section className='container py-5'>

<div className="row">
  <div className="col-3 bg-warning d-flex align-items-center justify-content-center">
          <div className='p-4 bg-light'>
              <img className='w-100' src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
  </div>
  <div className="col-9">
    <div className="row">
      <h1 className='mb-4'> Special Edition</h1>
      <div className="col">
          <div className='item bg-light p-4'>
              <img className='w-100' src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
      </div>
      <div className="col">
        <div className='item bg-light p-4'>
              <img className='w-100' src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
      </div>
      <div className="col">
        <div className='item bg-light p-4'>
              <img className='w-100' src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
      </div>
      <div className="col">
        <div className='item bg-light p-4'>
              <img className='w-100' src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
      </div>
    </div>
  </div>
</div>




</section>





<section className='parallax'>
      <div className="container text-white py-5">
        <h2>Makes Yourself Keep  <br /> SPorty & Stylish</h2>
        <p className='w-75'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.						</p>
        <button type="button" class="btn btn-light">SHOP NOW</button>
      </div>
    </section>















    <section className='container py-5'>
        <div className="row">
          <div className="col-2 p-0 bg-dark">
          
          <h2 className='text-white p-3 mb-0 bg-warning'>
            <span class="h4">BESTSELLER</span> <span class="word2">PRODUCTS</span>
          </h2>
          <a
          className={`btn p-3 ${activeTab === 'tab1' ? 'btn-secondary' : 'btn-dark'}`}
          onClick={() => handleClick('tab1')}
          style={{
            display: 'block', // Makes the <a> a block element
            width: '100%',    // Ensures it takes the full width of the parent
            textAlign: 'center', // Optional: centers text
          }}
        >
          SNEAKERS
        </a>
        <a
          className={`btn p-3 ${activeTab === 'tab2' ? 'btn-secondary' : 'btn-dark'}`}
          onClick={() => handleClick('tab2')}
          style={{
            display: 'block', // Makes the <a> a block element
            width: '100%',    // Ensures it takes the full width of the parent
            textAlign: 'center', // Optional: centers text
          }}
        >
          MEN
        </a>
        <a
          className={`btn p-3 ${activeTab === 'tab3' ? 'btn-secondary' : 'btn-dark'}`}
          onClick={() => handleClick('tab3')}
          style={{
            display: 'block', // Makes the <a> a block element
            width: '100%',    // Ensures it takes the full width of the parent
            textAlign: 'center', // Optional: centers text
          }}
        >
          WOMAN
        </a>
        <a
          className={`btn p-3 btn-dark`}
              style={{
            display: 'block', // Makes the <a> a block element
            width: '100%',    // Ensures it takes the full width of the parent
            textAlign: 'center', // Optional: centers text
          }}
        >
          KIDS
        </a>



          </div>
          <div className="col-10">



          <div className="tab-content">
        {activeTab === 'tab1' && (
          <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$21.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
        </OwlCarousel>
        )}
        {activeTab === 'tab2' && (
          <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/yezzo-0-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$22.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
        </OwlCarousel>
        )}
        {activeTab === 'tab3' && (
          <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/green-nika-0-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
          <div className='item bg-light p-4'>
              <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
              <h4>Fillo – Xtrema 3 Retro</h4>
              <h6>$20.00</h6>
              <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
          </div>
        </OwlCarousel>
        )}
      </div>










          </div>
        </div>
      </section>








     


      <section>
        <div className="container mb-5">
        <div className="row p-0">
          <div className="col-6 ps-0">
            <div className='showroom p-5 text-white'>
              <h3>15% Off SPORT SNEAKER.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button type="button" class="btn btn-dark">SHOP NOW</button>  
            </div>
          </div>
          <div className="col-6 pe-0">
            <div className='showroom p-5 text-white'>
              <h3>15% Off SPORT SNEAKER.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button type="button" class="btn btn-dark">SHOP NOW</button>
            </div>
          </div>
        </div>
        </div>
      </section>








      <section className='bg-dark'>
        <div className="container  p-5">
          <div className="row">
            <div className="col-8 text-white">
              <h1>Become <br /> A memebers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
              <button type="button" class="btn btn-light">JOIN NOW</button>
            </div>
            <div className="col-4">
              <img className='w-100' src="https://truetexashoops.com/wp-content/uploads/2020/03/54-542261_adidas-white-logo-png-adidas-white-logo-vector.png" alt="" />
            </div>
          </div>
        </div>
      </section>










      <section>
        <div className="container py-5">
        <div className="row g-4">
          <div className="col-4">
            <img src="/images/sneaker1.jpg" className='img-w-100 w-100' alt="" />  
          </div>
          <div className="col-4">
            <img src="/images/sneaker2.jpg" className='img-fluid  w-100' alt="" />  
          </div>
          <div className="col-4">
            <div className="row g-4">
              <div className="col-12">
                <img src="/images/sneaker3.jpg" className='img-fluid  w-100' alt="" />  
              </div>
              <div className="col-12">
                <img src="/images/sneaker4.jpg" className='img-fluid w-100' alt="" />  
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      





      <section className='d-none'>
        <div className="container py-5">

            <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
              <div className='item bg-light p-4'>
                  <img src="https://templatekit.jegtheme.com/fillo/wp-content/uploads/sites/66/2021/03/xtrema-e1616727531673-300x300.png" alt="" />
                  <h4>Fillo – Xtrema 3 Retro</h4>
                  <h6>$20.00</h6>
                  <button type="button" class="btn btn-dark">SELECT OPTIONS</button>
              </div>
              <div className='item bg-secondary p-4'>
                  <h4>2</h4>
              </div>
              <div className='item bg-secondary p-4'>
                  <h4>3</h4>
              </div>
              <div className='item bg-secondary p-4'>
                  <h4>4</h4>
              </div>
              <div className='item bg-secondary p-4'>
                  <h4>5</h4>
              </div>
              <div className='item bg-secondary p-4'>
                  <h4>6</h4>
              </div>
            </OwlCarousel>
          
        </div>
      </section>




 























      














  <div class="container-fluid px-5 bg-dark">
  <footer class="py-5 text-white">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
  </div>







    </>
  )
}

export default App
