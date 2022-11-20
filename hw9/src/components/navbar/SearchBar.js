import { useState } from "react";
const SearchBar = () => {
  const [url, setUrl] = useState("");
  const [sentiment, setSentiment] = useState([]);
  const getTranscript = (e) => {
    e.preventDefault();
    const urlSearchParams = new URLSearchParams(url.split("?")[1]);
    const video_url = urlSearchParams.get("v");
    console.log(video_url);
    fetch(`http://localhost:8000/transcript/${video_url}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      });
  };
  return (
    <div className="content" onSubmit={(e) => getTranscript(e)}>
      <h1>Detect bots with ease</h1>
      <h2>Input YouTube URL to get its sentiment</h2>
      <form>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Get Sentiment</button>
      </form>
    </div>
  );
};

export default SearchBar;
