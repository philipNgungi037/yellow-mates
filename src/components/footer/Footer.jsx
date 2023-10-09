import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <MDBFooter  className='footer-container overflow-hidden  text-center text-lg-start bg-slate-950    text-white w-full h-96 mt-0'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-b'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>

            <div className=' '>
              <a href='www.facebook.com' className='me-4 text-reset'>
              <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href='a' className='me-4 text-reset'>
              <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href='g' className='me-4 text-reset'>
              <ion-icon name="logo-google"></ion-icon>
              </a>
              <a href='i' className='me-4 text-reset'>
              <ion-icon name="logo-instagram"></ion-icon>
              </a>
               <a href='l' className='me-4 text-reset'>
              <ion-icon name="logo-linkedin"></ion-icon>
              </a> 
              <a href='g' className='me-4 text-reset'>
              <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3 grid grid-cols-3 border-b'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 '>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                    Yellow mates
                  </h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, consequuntur obcaecati asperiores facilis reiciendis repellat excepturi minima tenetur cum eos harum veniam quo soluta error expedita corrupti quidem officiis? Sit.
                  </p>
                </MDBCol>

                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
                  <p>
                  <a href='/about' className='text-reset hover:text-blue-500 hover:underline transform hover:scale-110 transition duration-300'>
                    About Us
                  </a>

                  </p>
                  <p>
                    <a href='#!' className='text-reset hover:text-blue-500 hover:underline'>
                      FAQs
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset hover:text-blue-500 hover:underline'>
                      Service Terms
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset hover:text-blue-500 hover:underline'>
                      Policy Terms
                    </a>
                  </p>
                </MDBCol>



                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact US</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    Nairobi, Tom Mboya street
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    info@yellow-homies.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 254 741 528 659
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 02 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © {currentYear}
            <a className='text-gray-500  hover:text-white hover:underline ml-1 font-normal' href='fb'>
             Yellow-homies
            </a>
          </div>
        </MDBFooter>
      );
}

export default Footer