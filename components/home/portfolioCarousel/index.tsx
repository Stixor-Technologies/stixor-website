import React, { useState, useEffect } from "react";
import { config } from "react-spring";
import classes from "./portfolioCarousel.module.css";
import Carousel from "react-spring-3d-carousel";
import arrow_right from "../../../public/assets/icons/arrow_right.png";
import arrow_left from "../../../public/assets/icons/arrow_left.png";
import { projectsData } from "./projectsData";
import dynamic from "next/dynamic";
//@ts-ignore
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Portfolio() {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(
    projectsData?.map((project: any) => console.log(project?.projectImage))
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: any, next: any) => setSlideIndex(next),
    centerMode: true,
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.section_heading}>OUR WORK</h2>

      <div className={classes.content_container}>
        <Slider {...settings}>
          {projectsData?.map((project: any, index: number) => (
            <div
              className={
                index === slideIndex ? classes.slide_active : classes.slide
              }
            >
              <Link href={"/project/1"}>
                <div className={classes.btn}>
                  <p>SEE DETAILS</p>
                </div>
              </Link>

              <p className={classes.project_title}>{project?.projectName}</p>
              <p className={classes.project_description}>
                {project?.projectDescription}
              </p>
              <div className={classes.overlay} />
              <img
                // style={{ border: `5px solid ${project?.primaryColor}` }}
                className={classes.card_img}
                src={project?.projectImage?.src}
                alt="1"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Portfolio;
