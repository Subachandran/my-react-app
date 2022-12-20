import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return <div className="footer">CopyRight &copy; {year}</div>;
}

export default Footer