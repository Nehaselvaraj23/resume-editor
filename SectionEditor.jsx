import axios from 'axios';

function SectionEditor({ section, content, onUpdate }) {
  const handleEnhance = async () => {
    const res = await axios.post("http://localhost:8000/ai-enhance", {
      section,
      content:Array.isArray(content) ? content.join("\n") : content
    });
    onUpdate(section, res.data.enhanced);
  };

  return (
    <div>
      <h3>{section.toUpperCase()}</h3>
      <textarea
        value={content}
        onChange={(e) => onUpdate(section, e.target.value)}
        rows={4}
        cols={50}
      />
      <button onClick={handleEnhance}>Enhance with AI</button>
    </div>
  );
}
export default SectionEditor;