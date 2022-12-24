import React from "react";
import logoEcommerce from "../../img/puertoTablas.png";
// CSS
import "./LogoWidget.css";

const LogoWidget = () => {
  return (
      <div className="logoWidget">
      <img src={logoEcommerce} alt="Logo-ecommerce" />
    </div>
  );
};

export default LogoWidget;
