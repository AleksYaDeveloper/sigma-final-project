import React from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings = {
    fade: true,
    speed: 500, // ms
    autoplay: false,
    initialSlide: 2,
    lazyLoad: true,
    autoplaySpeed: 3000,
  };
  const cards = [
    {
      imageSrc: "https://via.placeholder.com/50",
      title: "Luis Savini",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.",
      features: ["Feature 1", "Feature 2"],
    },
    {
      imageSrc: "https://via.placeholder.com/50",
      title: "Dgone Davidson",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.",
      features: ["Feature 1", "Feature 2"],
    },
    {
      imageSrc: "https://via.placeholder.com/50",
      title: "Piter King",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.",
      features: ["Feature 1", "Feature 2"],
    },
    {
      imageSrc: "https://via.placeholder.com/50",
      title: "Martti Rutter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.",
      features: ["Feature 1", "Feature 2"],
    },
    {
      imageSrc: "https://via.placeholder.com/50",
      title: "Garry Potter",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.",
      features: ["Feature 1", "Feature 2"],
    },
    {
      imageSrc: "https://via.placeholder.com/50",
      title: "Peppa Uzborn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.",
      features: ["Feature 1", "Feature 2"],
    },
  ];
  return (
    <div className="testimonials">
      <h2 className="testimonials__title_2">TESTIMONIALS</h2>
      <h1 className="testimonials__title">Client says about us</h1>

      <div className="testimonials__slider">
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <div className="content__card" key={index}>
              <img
                className="content__card_image"
                alt={card.title}
                src={card.imageSrc}
                width="100"
                height="100"
              />
              <h2 className="content__card_title">{card.title}</h2>
              <p className="content__card_text">{card.description}</p>
              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
