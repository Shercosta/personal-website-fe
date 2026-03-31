import resume from "../arrays/resume";

const ResumePage = () => {
  const cv = resume;
  return (
    <div id="cv" className="a4-page">
      <div className="text-center">
        <p className="f700">
          {cv.name}, {cv.suffix}
        </p>
        <p className="f600">{cv.skillHighlights.join(" | ")}</p>
        <p>
          {cv.location} | {cv.country_code} {cv.phone_number} | {cv.email}
        </p>
        <p>
          <a target="_blank" href={cv.linkedin_url}>
            {cv.linkedin_url}
          </a>{" "}
          |{" "}
          <a target="_blank" href={cv.web_url}>
            {cv.web_url}
          </a>
        </p>
      </div>
      <hr style={{ marginBottom: "0" }} />
      <div>
        <p className="f600">{cv.aboutMeSection.title}</p>
      </div>
    </div>
  );
};

export default ResumePage;
