import React from "react";
import slider from '../Slider/slider.css'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    // <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            {/* <MDBView> */}
              <img
                className="d-block w-100"
                src="http://tommystees.com/_assets/img/slider/sliders-fundraiser.jpg"
                alt="First slide"
              />
            {/* </MDBView> */}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://junkmailimages.blob.core.windows.net/large/05d8746021324a98ae28462bfb4ba2d2.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://giftspot.in/wp-content/uploads/2018/07/slider1209-1200x350.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    // </MDBContainer>
  );
}

export default CarouselPage;