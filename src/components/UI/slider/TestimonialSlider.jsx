import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Chuẩn bị đi chơi tiện đường ghé ăn đây ăn sáng,
          góc này mở 24/24 nhiều nhất mà do đi khá sớm nên mình ghé lại luôn.
          Không gian rộng rãi, thoáng mát.
          Combo sáng ngon bổ rẻ 
          .Khách Tây cũng nhiều, view đừơng phố đẹp. Trà đào tạm ổn
          .Burger ngon, khoai tây đậm đà cũng ngon."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Lê Việt Hưng</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Mình thấy đồ ăn cũng ổn, và chuyên về burger nhiều hơn KFC và Lotteria.
           Nhân viên nhiệt tình. Mình thích nhất các loại burger thiên về bò, lớp bò mềm không quá khô.
            Và điều đặc biệt là loại dưa ngâm bên trong. Quán còn có khu cafe riêng cũng thích hợp để học tập hoặc hẹn bạn bè."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Nguyễn Văn Hoàng</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Sau thời gian ồn ào ban đầu.
           McDonald trở lại bình thường.
          Nhìn chung cũng tương tự như các cửa hàng KFC hay Lotteria.
          Không gian ấm cúng, có view nhìn đẹp trông ra vòng xoay Điện Biên Phủ. Giá cả hợp lý."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Trần Văn Hùng</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
