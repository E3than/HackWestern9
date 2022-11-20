from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from youtube_transcript_api import YouTubeTranscriptApi
import ssl
from nltk.tokenize import sent_tokenize
from .utils.punctuate import punctuate
from .utils.sentiment import get_sentiment
from .utils.summarize import summarize_text

app = FastAPI()

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context


origins = [
    "http://localhost:3000",
    "localhost:3000",
    "https://www.youtube.com",
    "www.youtube.com",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {}

@app.get("/transcript/{video_id}")
async def get_transcript(video_id: str) -> dict:
    transcript_object = (YouTubeTranscriptApi.get_transcript(video_id))
    transcript_list = []
    for event in transcript_object:
        if event["text"][0] == '[' or event["text"][0] == '(':
            continue
        transcript_list.append(event["text"])
    
    punctuated_text = punctuate(' '.join(transcript_list))

    # summarized_text = summarize_text(punctuated_text)

    transcript_sentences = sent_tokenize(punctuated_text)

    return get_sentiment(transcript_sentences)

