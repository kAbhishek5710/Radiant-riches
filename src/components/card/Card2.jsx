import React from "react";
import "./Card2.scss";
import img from "../../assets/1.png";
import Button from "@mui/material/Button";

// image: {img},
//         subtitle1: "20% Off",
//         subtitle2: "Limited time",
//         title: "Webbuilder1",
//         description: "Computer Modern classic with wix support",
//         price: "$39.96",
//         original_price: "$49.96",
//         discount: "(20% Off)",

export default function Card2() {
  return (
    <div className="card2_section">
      <div className="image">
        <img src={img} alt="image" />
      </div>

      <div className="sub-titles">
        <p>20% Off</p>
        <p>Limited Time</p>
      </div>
      <div className="title">Webbuilder1</div>
      <div className="description">
        Computer Modern Classic with wix support
      </div>
      <div className="price">
        $39.96
        <sub
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: "#9FA9B3",
            marginLeft: "5px",
          }}
        >
          $49.96
        </sub>
        <sub
          style={{
            fontSize: "13px",
            lineHeight: "20px",
            color: "#EF4C5D",
            marginLeft: "5px",
          }}
        >
          {" "}
          (20% Off)
        </sub>
      </div>
      <div className="btn">
        <Button variant="contained">View Deals</Button>
      </div>
    </div>
  );
}
