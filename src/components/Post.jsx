import React from "react";
import content from "../arrays/content";
import { Fade } from "react-awesome-reveal";

const Post = () => {
  return (
    <>
      <div className="row text-center mt-5 me-0">
        <div className="col">
          <Fade direction="right">
            <hr className="hr-middle" />
          </Fade>
        </div>
        <div className="col">
          <Fade delay={500}>
            <p className="post">POST</p>
          </Fade>
        </div>
        <div className="col pe-0">
          <Fade direction="left">
            <hr className="hr-middle" />
          </Fade>
        </div>
      </div>

      {content.map((blog, index) => {
        {
          if (index % 2 !== 0) {
            return (
              <div className="row my-5 mx-2">
                <div className="col-3 preview">
                  <Fade direction="left">
                    <img
                      src={blog.img}
                      alt=""
                      className="mw-100 img-thumbnail"
                    />
                  </Fade>
                </div>
                <div className="col-9 content">
                  <Fade>{blog.caption}</Fade>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row my-5 mx-2">
                <div className="col-9 content">
                  <Fade>{blog.caption}</Fade>
                </div>
                <div className="col-3 preview">
                  <Fade direction="right">
                    <img
                      src={blog.img}
                      alt=""
                      className="mw-100 img-thumbnail"
                    />
                  </Fade>
                </div>
              </div>
            );
          }
        }
      })}
    </>
  );
};

export default Post;
