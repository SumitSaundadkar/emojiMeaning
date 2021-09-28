import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🏃": "man runnig",
  "🏊": "person swimming",
  "🏋️": "weight lifting",
  "🤼": "wrestlers",
  "❤️": "love",
  "🚴": "bicyclist"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry,we dont have this in our data!";
    }

    setMeaning(meaning);
  }
  function emojiClicknadler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning}</h2>
      <h3 style={{ color: "yellow" }}>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClicknadler(emoji)}
            style={{ fontSize: "2rem", padding: "0.6rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
