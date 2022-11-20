import { useEffect, useState } from "react";
const SearchBar = () => {
  const [url, setUrl] = useState("");
  const [sentiment, setSentiment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTranscript = (e) => {
    e.preventDefault();
    const urlSearchParams = new URLSearchParams(url.split("?")[1]);
    const video_url = urlSearchParams.get("v");
    fetch(`http://localhost:8000/transcript/${video_url}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setSentiment(responseData);
      });
  };
  return (
    <div className="content" onSubmit={(e) => getTranscript(e)}>
      <h1>Get YouTube Sentiments with Ease</h1>
      <h2>Input YouTube URL to get its sentiment</h2>
      <form>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Get Sentiment</button>
      </form>
      <h2>{sentiment}%</h2>
    </div>
  );
};

export default SearchBar;
