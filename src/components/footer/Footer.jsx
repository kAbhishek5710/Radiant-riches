import React from "react";
import "./Footer.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Footer() {
  return (
    <div className="footer_section">
      <div className="categories">
        <h5>CATEGORIES</h5>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic Automation</p>
      </div>
      <div className="contact">
        <h5>CONTACT</h5>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div className="state">
        <p style={{ display: "flex", flexDirection: "row" }}>United State</p>
        <KeyboardArrowDownIcon style={{marginTop:"3px", marginLeft:"3px"}} />
      </div>
    </div>
  );
}
