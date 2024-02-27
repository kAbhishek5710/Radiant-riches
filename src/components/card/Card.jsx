import React from "react";
import "./Card.scss";
import img1 from "../../assets/1.png";
import rating_img from "../../assets/rating.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import data from "./cardContent.jsx";

export default function Card() {
  return (
    <>
      {data.map((dataa, index) => (
        <div className="card" key={index}>
          <div className="image_section">
            <img src={img1} alt="img" />
            <p>Builder 1</p>
          </div>
          <div className="card_content">
            <p>
              <b>{dataa.head1}</b> {dataa.desc1}
            </p>
            <br />
            <p style={{ color: "#2C384A" }}>
              <b>Main highlight</b>
            </p>
            <div className="highlight_content">{dataa.desc2}</div>
            <br />
            <div className="more">
              <a href="#">Show more</a>
              <KeyboardArrowDownIcon className="arrowIcon" />
            </div>
          </div>
          <div className="rating_section">
            <div className="rating">
              <CardContent>
                <Typography variant="h4" component="div">
                  &nbsp;{dataa.rating}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {dataa.rating_grade}
                </Typography>
                <img src={rating_img} alt="rating" />
              </CardContent>
            </div>
            <div className="subscribe">
              <Button variant="contained">View</Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
