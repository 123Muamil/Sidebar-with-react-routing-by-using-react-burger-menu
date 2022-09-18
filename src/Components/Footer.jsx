import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <div style={{paddingBottom:'5px'}}>
      <footer id="footer" className="bg-primary text-white d-flex-column text-center">
  <hr className="mt-0"/>
  <div className="text-center">
    <h4>You can find us at</h4>
    <ul className="list-unstyled list-inline">
      <li className="list-inline-item">
        <a target="_blank" href="https://www.facebook.com/" className="sbtn btn-large mx-1 footer-link" title="Facebook">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a target="_blank" href="
LinkedIn Login, Sign inhttps://www.linkedin.com/" className="sbtn btn-large mx-1 footer-link" title="Linkedin">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a target="_blank" href="https://twitter.com/" className="sbtn btn-large mx-1 footer-link" title="Twitter">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a target="_blank" href="https://www.youtube.com/" className="sbtn btn-large mx-1 footer-link" title="Youtube">
          <i className="fab fa-youtube-square fa-2x"></i>
        </a>
      </li>
    </ul>
  </div>
 
  <hr className="mb-0"/>
 
  <div className="container text-left text-md-center">
    <div className="row">
     
      <div className="col-md-3 mx-auto shfooter">
        <h5 className="my-2 font-weight-bold d-none d-md-block">Product</h5>
        <div className="d-md-none title" data-target="#Product" data-toggle="collapse">
          <div className="mt-3 font-weight-bold">Product
            <div className="float-right navbar-toggler">
              <i className="fas fa-angle-down"></i>
              <i className="fas fa-angle-up"></i>
            </div>
          </div>
        </div>
        <ul className="list-unstyled " id="Product">
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Create Websites</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Secure Cloud Hosting</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Engage Your Audience</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Website Support</a></li>
        </ul>
      </div>
    
      <hr className="clearfix w-100 d-md-none mb-0"/>
      
      <div className="col-md-3 mx-auto shfooter">
        <h5 className="my-2 font-weight-bold d-none d-md-block">Company</h5>
        <div className="d-md-none title" data-target="#Company" data-toggle="collapse">
          <div className="mt-3 font-weight-bold">Company
            <div className="float-right navbar-toggler">
              <i className="fas fa-angle-down"></i>
              <i className="fas fa-angle-up"></i>
            </div>
          </div>
        </div>
        <ul className="list-unstyled " id="Company">
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>About</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Careers</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Support</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Pricing</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>FAQ</a></li>
        </ul>
      </div>
      
      <hr className="clearfix w-100 d-md-none mb-0"/>
      
      <div className="col-md-3 mx-auto shfooter">
        <h5 className="my-2 font-weight-bold d-none d-md-block">Resources</h5>
        <div className="d-md-none title" data-target="#Resources" data-toggle="collapse">
          <div className="mt-3 font-weight-bold">Resources
            <div className="float-right navbar-toggler">
              <i className="fas fa-angle-down"></i>
              <i className="fas fa-angle-up"></i>
            </div>
          </div>
        </div>
        <ul className="list-unstyled " id="Resources">
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Blog</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>eBooks</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Whitepapers</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Comparison Guide</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Website Grader</a></li>
        </ul>
      </div>
     
      <hr className="clearfix w-100 d-md-none mb-0"/>
     
      <div className="col-md-3 mx-auto shfooter">
        <h5 className="my-2 font-weight-bold d-none d-md-block">Get Help</h5>
        <div className="d-md-none title" data-target="#Get-Help" data-toggle="collapse">
          <div className="mt-3 font-weight-bold">Get Help
            <div className="float-right navbar-toggler">
              <i className="fas fa-angle-down"></i>
              <i className="fas fa-angle-up"></i>
            </div>
          </div>
        </div>
        <ul className="list-unstyled " id="Get-Help">
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link' >Help Center</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Contact Us</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Privacy Policy</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Terms</a></li>
          <li><a target="_blank" href="https://codepen.io/jettaz" className='footer-link'>Login</a></li>
        </ul>
      </div>
    </div>
  </div>
  <hr className="mb-0"/>
  <div className="py-3 text-center">
    Copyright 2022 by Google Chrome: All rights reserved
  </div>
</footer>
    </div>
  )
}
export default Footer
