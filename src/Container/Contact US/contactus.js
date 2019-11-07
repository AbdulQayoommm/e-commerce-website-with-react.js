import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md">
              Send
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Karachi Sindh Pakistan</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+923412630538</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>abdulqayoom@cricbuc.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactPage;