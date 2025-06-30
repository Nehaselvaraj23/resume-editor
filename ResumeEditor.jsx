import SectionEditor from "./SectionEditor";
import axios from "axios";
import { saveAs } from "file-saver";

function ResumeEditor({ resume, setResume }) {
  const updateSection = (section, value) => {
    setResume({ ...resume, [section]: value });
  };

  const handleSave = async () => {
    await axios.post("http://localhost:8000/save-resume", resume);
    alert("Resume saved!");
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: "application/json" });
    saveAs(blob, "resume.json");
  };

  return (
    <div>
      {Object.keys(resume).map((section) => (
        <SectionEditor
          key={section}
          section={section}
          content={resume[section]}
          onUpdate={updateSection}
        />
      ))}
      <button onClick={handleSave}>Save Resume</button>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}
export default ResumeEditor;
