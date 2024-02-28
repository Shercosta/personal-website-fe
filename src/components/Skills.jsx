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
          <div className="col-2 ps-3">
            <div className="position-relative svh100">
              {/* <div className="position-sticky top-0">
                <div
                  style={{
                    backgroundColor: "blue",
                    width: "30px",
                    height: "30px",
                  }}
                ></div>
              </div> */}
              {/* <div className="position-sticky top-0"> */}
              <div>
                <h4>Expert Level</h4>
              </div>

              <div class="vr svh90"></div>
              <div>
                <h4>Basic Level</h4>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-10 ps-3">
            <Fade delay={700}>
              <table className="text-start">
                <tbody>
                  <tr className="border-bottom">
                    <TableSkills identifier={5} />
                  </tr>
                  <tr className="border-bottom">
                    <TableSkills identifier={4} />
                  </tr>
                  <tr className="border-bottom">
                    <TableSkills identifier={3} />
                  </tr>
                  <tr className="border-bottom">
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
