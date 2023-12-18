import "./widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets-article">
        <div className="widgets-article-left">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets-article-right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "WebAssembly Gains Traction for Performant UI Rendering",
        "Blazing-fast graphics and animations now achievable without relying solely on JavaScript"
      )}
      {newsArticle(
        " Headless UI Takes Center Stage in Building Adaptive Interfaces",
        "Building UI components once to fit various platforms and devices becomes a reality."
      )}
      {newsArticle(
        "Web Components Rise as a Path to Universal UI Components",
        " Web components enable creating reusable UI elements that work across different frameworks and platforms."
      )}
      {newsArticle(
        " Ethical Design Takes Hold: Prioritizing User Well-being",
        " Front-end development embraces principles for responsible and inclusive user experiences"
      )}
    </div>
  );
};
