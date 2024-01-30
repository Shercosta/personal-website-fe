import React from "react";
import logos from "../arrays/techs";

const TableSkills = ({ identifier }) => {
  const logosLevel = logos.filter((logo) => logo.level === identifier);

  const logoElements = logosLevel.map((logo) => (
    <div key={logo.logoName}>
      <img src={logo.logoUrl} alt={logo.logoName} className="img-table" />
    </div>
  ));

  return <div className="d-inline">{logoElements}</div>;
};

export default TableSkills;
