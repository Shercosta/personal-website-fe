import projects from "../arrays/project";
import resume from "../arrays/resume";
import { Hr } from "./Common";

const CompanyBlock = ({
  companyName,
  companyAlias = null,
  jobTitle,
  startDate,
  endDate = null,
  responsibilities,
  outsourcedBy = null,
}) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="f700">
          {companyName} {companyAlias ? `"${companyAlias}"` : ""}
        </div>
        <div className="f600">
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
          }).format(startDate)}{" "}
          -{" "}
          {endDate
            ? new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
              }).format(endDate)
            : "Present"}
        </div>
      </div>
      <p>{jobTitle}</p>
      {outsourcedBy && (
        <p style={{ color: "gray" }}>
          <i>Outsourced by {outsourcedBy}</i>
        </p>
      )}
      <ul>
        {responsibilities.map((responsibility) => (
          <li>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

const ResumePage = () => {
  const cv = resume;
  const kp = projects
    .filter((proj) => proj.key_projects)
    .flatMap((proj) => proj.key_projects);
  return (
    <div id="cv" className="a4-page">
      {/* Header */}
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

      {/* About Me */}
      <Hr />
      <div>
        <p className="f600">{cv.aboutMeSection.title}</p>
        <br />
        <p style={{ textAlign: "justify" }}>{cv.aboutMeSection.description}</p>
      </div>

      {/* Work Experience */}
      <Hr />
      <div>
        <p className="f600">{cv.workingExperiencesSection.title}</p>
        <br />
        {cv.workingExperiencesSection.items.map((company, company_idx) => {
          if (company.companies) {
            return (
              <>
                {company.companies.map((outsource, outsource_idx) => {
                  return (
                    <CompanyBlock
                      key={`${company_idx}-${outsource_idx}`}
                      companyName={outsource.companyName}
                      companyAlias={outsource.companyAlias}
                      jobTitle={outsource.jobTitle}
                      startDate={outsource.startDate}
                      responsibilities={outsource.responsibilities}
                      outsourcedBy={company.companyName}
                    />
                  );
                })}
              </>
            );
          } else {
            return (
              <CompanyBlock
                key={`${company_idx}-x`}
                companyName={company.companyName}
                companyAlias={company.companyAlias || null}
                jobTitle={company.jobTitle}
                startDate={company.startDate}
                endDate={company.endDate || null}
                responsibilities={company.responsibilities}
              />
            );
          }
        })}
      </div>

      {/* Projects */}
      <Hr />
      <div>
        <p className="f600">{cv.keyProjectsSection.title}</p>
        <br />
        <ol>
          {kp.map((proj, idx) => (
            <div key={idx} className="mb-3">
              <li>
                <p className="f700">{proj.title}</p>
                <ul>
                  {proj.items.map((item, item_idx) => (
                    <li style={{ textAlign: "justify" }} key={item_idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              <p
                className="mt-1"
                style={{ textAlign: "justify", color: "#696161" }}
              >
                <b>Technologies Used: </b> {proj.technologiesUsed.join(", ")}
              </p>
            </div>
          ))}
        </ol>
      </div>

      {/* Education */}
      <Hr />
      <div>
        <p className="f600">{cv.educationSection.title}</p>
        <br />
        {cv.educationSection.items
          .filter((item) => item.show)
          .map((edu, edu_idx) => (
            <div key={`${edu_idx}-education`}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="f700">{edu.schoolName}</div>
                <div className="f600">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    year: "numeric",
                  }).format(edu.startDate)}{" "}
                  -{" "}
                  {edu.endDate
                    ? new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        year: "numeric",
                      }).format(edu.endDate)
                    : "Present"}
                </div>
              </div>
              <p>{edu.label}</p>
              <p>GPA: {edu.gpa_score}</p>
            </div>
          ))}
      </div>

      {/* TCC */}
      <Hr />
      <div>
        <p className="f600">{cv.tccSection.title}</p>
        <br />
        <ul>
          {cv.tccSection.items.map((tcc, tcc_idx) => (
            <li className="mb-3" key={`${tcc_idx}-education`}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="f700">{tcc.name}</div>
                <div className="f600">{tcc.showDateText}</div>
              </div>
              <p className="f600">{tcc.boldLine}</p>
              <p>
                <em>{tcc.description}</em>
              </p>
              <a href={tcc.attachment_url}>{tcc.attachment_text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumePage;
