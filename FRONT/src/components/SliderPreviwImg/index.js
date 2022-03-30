import "./style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export function PreviwImg(props) {

  function list(Image) {
      console.log(Image)
    let imageArray = [];
    for (let i = 0; Image.length > i; i++) {
      imageArray.push(URL.createObjectURL(Image[i]));
    }
    return imageArray;
  }

  return (
    <div className="imagePreviw">
          <Carousel className="carouselPreviw">
            {list(props.Previw).map((Image) => (
              <div className="divImgPreviw">
                <img src={Image} />
              </div>
            ))}
          </Carousel>
    </div>
  );
}