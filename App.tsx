import { useState } from "react";
import ResumeUploader from "./components/ResumeUploader";
import ResumeEditor from "./components/ResumeEditor";

function App() {
  const [resume, setResume] = useState(null);

  return (
    <div>
      <h1>Resume Editor</h1>
      {!resume ? (
        <ResumeUploader onUpload={setResume} />
      ) : (
        <ResumeEditor resume={resume} setResume={setResume} />
      )}
    </div>
  );
}

export default App;
