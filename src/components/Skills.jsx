import React from "react";
import logos from "../arrays/techs";
import TableSkills from "./TableSkills";

const Skills = () => {
  //   logos.sort((logo1, logo2) =>
  //     logo1.level > logo2.level ? -1 : logo1.level < logo2.level ? 1 : 0
  //   );
  //   logos.sort((logo1, logo2) =>
  //     logo1.used > logo2.used ? -1 : logo1.used < logo2.used ? 1 : 0
  //   );

  //   logos.sort((logo1, logo2) => {
  //     if (logo1.used > logo2.used) {
  //       -1;
  //     } else if (logo1.used < logo2.used) {
  //       1;
  //     } else {
  //       0;
  //     }
  //   });

  //   console.log(logos);

  return (
    <>
      <div className="row text-center me-0">
        <div className="col">
          <h4 className="d-inline-block">Most Used</h4>
        </div>
        <div className="col">
          <hr className="hr-middle" />
        </div>
        <div className="col">
          <h4 className="d-inline-block">Less Used</h4>
        </div>
      </div>
      <div className="row text-center me-0">
        <div className="col-2">
          <div>
            <h4>Expert Level</h4>
          </div>
          <div class="vr svh100"></div>
          <div>
            <h4>Basic Level</h4>
          </div>
        </div>
        <div className="col-10">
          <table className="text-start">
            <tbody>
              <tr>
                <TableSkills identifier={5} />
              </tr>
              <tr>
                <TableSkills identifier={4} />
              </tr>
              <tr>
                <TableSkills identifier={3} />
              </tr>
              <tr>
                <TableSkills identifier={2} />
              </tr>
              <tr>
                <TableSkills identifier={1} />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Skills;
