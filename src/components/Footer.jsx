import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'

export default function App() {
  return (
    <MDBFooter bgColor='info' className='text-center text-lg-start text-muted'>
      <div className='FooterDiv2'>
            <img className='FooterImg1' src="9.jpg" alt="img" />
            <div className='FooterDiv1'>
            <h1 className='Footerh1-1'>Subscribe To Our Newsletter!</h1>
            <p>We are 100+ professional software engineers with more than 10 <br />
            years in delivering super products it because you've seen it.</p>
            </div>
        </div>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Jythu
              </h6>
              <p>
                Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available
              </p>
              <div className='FooterLogos'>
              <h2>00</h2>
              <h3>stripe</h3>
              <h3>Woo</h3>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Resources</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Carrer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Features
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Developers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Story
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
            </MDBCol>


            
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Help Pages</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Customer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Developers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Story
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
            </MDBCol>


            
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright © 2024, All Rights Reserved.
      </div>
    </MDBFooter>
  );
}