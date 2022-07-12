import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="copy">© 2022 Wiktor Maciążek - All Rights Reserved</p>
      <NavLink to="/admin">
        <p className="blog_adminBtn">Admin Panel</p>
      </NavLink>
    </div>
  );
};
