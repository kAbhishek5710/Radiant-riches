import React from "react";
import "./Home.scss";
import Card from "../components/card/Card";
import Card2 from "../components/card/Card2";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="home_section">
      <div className="heading">
        <h1>Best Website Builders in the US</h1>
      </div>
      <hr />
      <div className="box1">
        <div className="left">
          <CheckCircleOutlinedIcon />
          <p>Last Updated - February 26, 2024</p>
          <InfoOutlinedIcon />
          <p>Advertising Disclosure</p>
        </div>
        <div className="right">
          <p>Top Relevant</p>
          <ArrowDropDownIcon />
        </div>
      </div>
      <hr />
      <div className="optionBox">
        <button>Tools</button>
        <button>AWS Builder</button>
        <button>Start Build</button>
        <button>Build Supplies</button>
        <button>Tooling</button>
        <button>Blue Hosting</button>
      </div>
      <div className="box2">
        <p>
          Home &nbsp;&gt;&nbsp; Hosting for all &nbsp;&gt;&nbsp; Hosting
          &nbsp;&gt;&nbsp; Hosting6 &nbsp;&gt;&nbsp; Hosting5
        </p>
      </div>
      <div className="desc_cards">
        <Card className="cards" />
      </div>
      <div className="description">Related Deals you might like for</div>
      <div className="deals">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <div className="signup">
        <p>Sign up and get exclusive special deals</p>
        <div className="searchBox">
          <input type="text" />
          <Button variant="contained">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
