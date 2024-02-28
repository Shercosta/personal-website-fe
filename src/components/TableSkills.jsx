import React from "react";
import logos from "../arrays/techs";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const TableSkills = ({ identifier }) => {
  const logosLevel = logos.filter((logo) => logo.level === identifier);

  const renderTooltip = (props) => (
    <Tooltip id="image-tooltip" {...props}>
      {props}
    </Tooltip>
  );

  const logoElements = logosLevel.map((logo) => (
    <td key={logo.logoName} className="d-inline">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 100, hide: 100 }}
        overlay={renderTooltip(logo.logoName)}
      >
        <img
          src={logo.logoUrl}
          alt={logo.logoName}
          className="img-table glow-when-hovered my-3 mx-1"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          data-bs-title="sidfanf"
        />
      </OverlayTrigger>
    </td>
  ));

  return <>{logoElements}</>;
};

export default TableSkills;
