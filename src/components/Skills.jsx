import React from "react";
import logos from "../arrays/techs";

const Skills = () => {
  logos.sort((logo1, logo2) =>
    logo1.level > logo2.level ? -1 : logo1.level < logo2.level ? 1 : 0
  );
  logos.sort((logo1, logo2) =>
    logo1.used > logo2.used ? -1 : logo1.used < logo2.used ? 1 : 0
  );

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

  //   let skillLevel = null;

  //   const getSortedLogos = logos.map((logo, idx) => {
  //     if (idx === 0) {
  //       skillLevel = 5;
  //     } else {
  //         if (logo.level === skillLevel) {
  //             return (
  //                 <>
  //                     <td></td>
  //                 </>
  //             )
  //         }
  //     }

  //     return (
  //       <>
  //         <p>
  //           {logo.level} - {logo.used}
  //         </p>
  //       </>
  //     );
  //   });

  const getSortedLogos = () => {
    for (let logoLevel = 5; logoLevel > 0; logoLevel--) {
      for (let logoUsed = 5; logoUsed > 0; logoUsed--) {
        return (
          <>
            <td>
              {logos[logoLevel].level}-{logos[logoUsed].used}
            </td>
          </>
        );
      }
    }
  };

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
        <div className="col">
          <table>
            <tbody>{getSortedLogos()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Skills;
