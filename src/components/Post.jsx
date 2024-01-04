import React from "react";
import content from "../arrays/content";

const Post = () => {
  content.reverse();

  return (
    <>
      <div className="row text-center mt-5">
        <div className="col">
          <hr className="hr-middle" />
        </div>
        <div className="col">
          <p className="post">POST</p>
        </div>
        <div className="col">
          <hr className="hr-middle" />
        </div>
      </div>

      {content.map((blog, index) => {
        {
          if (index % 2 !== 0) {
            return (
              <div className="row my-5 mx-2">
                <div className="col-3 preview">
                  <img src={blog.img} alt="" className="mw-100 img-thumbnail" />
                </div>
                <div className="col-9 content">{blog.caption}</div>
              </div>
            );
          } else {
            return (
              <div className="row my-5 mx-2">
                <div className="col-9 content">{blog.caption}</div>
                <div className="col-3 preview">
                  <img src={blog.img} alt="" className="mw-100 img-thumbnail" />
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
