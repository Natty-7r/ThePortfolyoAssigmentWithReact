import Slider from "react-slick";
import { sliderProps } from "../utils/contants/sliderProps";
import { UserDataContext } from "../contexts/userData";
import { useContext } from "react";
const Testimonials = () => {
  const { testimonials } = useContext(UserDataContext);

  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">What People Say?</h2>
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        {testimonials.map(({ _id, name, position, review, image, enabled }) =>
          enabled ? (
            <div className="testimonial-col" key={_id}>
              <div className="say">
                <p>{review}</p>
              </div>
              <div className="user">
                <div className="img">
                  <img src={image.url} alt={`${name}'s image`} title />
                </div>
                <div className="name ml-2">
                  <span>{name}</span>
                  <label>{position}</label>
                </div>
              </div>
            </div>
          ) : null
        )}
      </Slider>{" "}
    </div>
  );
};
export default Testimonials;
