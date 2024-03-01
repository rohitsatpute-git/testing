import { Carousel } from "flowbite-react";
import './CarouselItem.css';
function CarouselItem() {
  return (
    <div id="Carousel" >
  
      <Carousel>
        <img
          src="/pictures/banner/banner-9.png"
          alt="..."
          // width={100}
          // height={100}
          layout="responsive"
        />
        <img
          src="/pictures/banner/banner-7.png"
          alt="..."
          // width={100}
          // height={100}
          layout="responsive"
        />
      </Carousel>
    </div>
  );
}

export default CarouselItem;
