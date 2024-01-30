import React from "react";
import logos from "../arrays/techs";

const TableSkills = ({ identifier }) => {
  const logosWithUsed5 = logos.filter((logo) => logo.used === identifier);

  const logoElements = logosWithUsed5.map((logo) => (
    <div key={logo.logoName}>
      <img src={logo.logoUrl} alt={logo.logoName} className="img-table" />
    </div>
  ));

  return <div className="d-inline">{logoElements}</div>;
};

export default TableSkills;
