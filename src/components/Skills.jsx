import React from "react";
import TableSkills from "./TableSkills";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <>
      {/* <div className="row text-center me-0">
        <div className="col">
          <Fade direction="left">
            <h4 className="d-inline-block">Most Used</h4>
          </Fade>
        </div>
        <div className="col">
          <Fade direction="left" delay={200}>
            <hr className="hr-middle" />
          </Fade>
        </div>
        <div className="col">
          <Fade direction="left" delay={400}>
            <h4 className="d-inline-block">Less Used</h4>
          </Fade>
        </div>
      </div> */}
      <Fade direction="left">
        <div className="row text-center me-0 mt-3">
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
            <Fade delay={700}>
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
            </Fade>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Skills;
