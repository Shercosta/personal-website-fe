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
          }
        })}
      </div>
    </div>
  );
};

export default ResumePage;
