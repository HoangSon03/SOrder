import React from "react";
import Ins from "@mui/icons-material/Instagram";
import Twi from "@mui/icons-material/Twitter";
import Fb from "@mui/icons-material/Facebook";
import Lik from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Ins></Ins>
        <Twi></Twi>
        <Fb></Fb>
        <Lik></Lik>
      </div>
      <p> &copy; 365pizza.com</p>
    </div>
  );
}

export default Footer;
