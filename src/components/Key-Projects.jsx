import projects from "../arrays/project";
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
            <p className="post">KEY PROJECTS</p>
          </Fade>
        </div>
        <div className="col pe-0">
          <Fade direction="left">
            <hr className="hr-middle" />
          </Fade>
        </div>
      </div>

      {projects.map((blog, index) => {
        {
          if (index % 2 !== 0) {
            return (
              <div className="row my-5 mx-2">
                <div className="col-md-5 order-1 order-md-0 preview">
                  <Fade direction="left">
                    <img
                      src={blog.image}
                      alt=""
                      className="mw-100 img-thumbnail"
                    />
                  </Fade>
                </div>
                <div className="col-md-7 order-0 order-md-0 content mb-3">
                  <Fade>{blog.label + " - " + blog.caption}</Fade>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row my-5 mx-2">
                <div className="col-md-7 order-0 order-md-0 content mb-3">
                  <Fade>{blog.label + " - " + blog.caption}</Fade>
                </div>
                <div className="col-md-5 order-1 order-md-0 preview">
                  <Fade direction="right">
                    <img
                      src={blog.image}
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
