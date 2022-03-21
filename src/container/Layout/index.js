import React from "react";
import Logo from "../../assets/images/logo.png";
import LinkVoteLogo from "../../assets/images/link-vote.png";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <img src={Logo} alt="hepsiburada_logo" />
        <img src={LinkVoteLogo} alt="link_vote_challenge_logo" />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
