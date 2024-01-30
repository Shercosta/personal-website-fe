import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row text-center">
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
      <div className="row text-center">
        <div className="col-2">
          <div>
            <h4>Expert Level</h4>
          </div>
          <div class="vr svh100"></div>
          <div>
            <h4>Basic Level</h4>
          </div>
        </div>
        <div className="col">
          <table>
            <thead>
              <tr>
                <th>Most Used</th>
                <th>Less Used</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default Skills;
