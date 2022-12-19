import React, { useEffect, useState } from "react";
import classes from "./project.module.css";
import { projectsData } from "../../../components/home/portfolioCarousel/projectsData";
import Navbar from "../../../components/navbar";

function ProjectDetail() {
  const [project, setProject] = useState<any>(projectsData[0]);
  //   const [backgroundPath, setBackgroundPath] = useState<any>(`../../../public/assets/homepage_assets/isekaiverse.png`)

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(${project?.primaryColor},${project?.secondaryColor})`,
      }}
      className={classes.container}
    >
      <div className={classes.project_banner}>
        <img
          src={project?.projectImage?.src}
          className={classes.background_image}
        />
        <div
          style={{
            backgroundColor: `${project?.primaryColor}`,
          }}
          className={classes.overlay}
        />
        <div className={classes.overlay_darker} />

        <div className={classes.banner_content_section}>
          <h2 className={classes.project_title}>{project?.projectName}</h2>

          <div className={classes.banner_content}>
            <div
              style={{
                backgroundImage: `linear-gradient(to right,${project?.primaryColor},${project?.secondaryColor})`,
              }}
              className={classes.see_live_project_container}
            >
              <p className={classes.see_live}>SEE LIVE</p>
            </div>
            <div className={classes.left_panel}>
              <div
                style={{
                  backgroundImage: `linear-gradient(${project?.primaryColor},${project?.secondaryColor})`,
                }}
                className={classes.tech_stack_container}
              ></div>
              <img
                className={classes.project_banner_image}
                src={project?.projectImage?.src}
              />
            </div>

            <div className={classes.right_panel}>
              <p className={classes.short_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                tincidunt dolor ut elementum blandit. Pellentesque suscipit arcu
                at diam dignissim, et cursus nibh consectetur. Phasellus varius
                nibh justo, ut mattis nibh venenatis bibendum. Suspendisse
                dapibus sollicitudin pulvinar. In aliquam ipsum non iaculis
                accumsan.{" "}
              </p>
              <p className={classes.short_description}>
                Aliquam hendrerit hendrerit orci a tristique. Curabitur non
                scelerisque urna. Quisque accumsan neque magna, ac convallis est
                accumsan ullamcorper. Phasellus scelerisque ultrices mattis.
                Maecenas non tempor quam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
