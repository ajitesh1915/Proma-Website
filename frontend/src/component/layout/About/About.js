import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/_vaishnavipandey._/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1" class="box">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dzxeb1x23/image/upload/v1692634883/VP_ooit2e.jpg"
              alt="Founder"
            />
            <div class="box">
              <Typography class="name">Vaishnavi Pandey</Typography>
            </div>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a full stack web development (MERN stack) project for implementing an E-commerce website and hosting it online, created by Vaishnavi Pandey, 20CE10079, IIT Kharagpur
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2" class="box"> OUR BRANDS </Typography>
            <a href="https://www.instagram.com/_vaishnavipandey._/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
