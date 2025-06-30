function ResumeUploader({ onUpload }) {
  const handleFileChange = (e) => {
    const dummyResume = {
      name: "John Doe",
      summary: "Experienced developer...",
      experience: ["Company A - 3 years", "Company B - 2 years"],
      education: ["B.Tech - CSE", "M.Tech - AI"],
      skills: ["JavaScript", "Python"]
    };
    onUpload(dummyResume);
  };

  return (
    <div>
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
    </div>
  );
}
export default ResumeUploader;
