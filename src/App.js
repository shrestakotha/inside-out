import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😅": "Grinning Face with Sweat",
  "🙃": "Upside-Down Face",
  "🤑": "Money-Mouth Face",
  "🍟": "French Fries",
  "🙊": " Speak-No-Evil Monkey",
  "🤪": "Zany Face",
  "🥪": " Sandwich",
  "🤣": "Rolling on the Floor Laughing",
  "🍁": "Maple Leaf",
  "🤫": "Shushing Face",
  "🏖": "️ Beach with Umbrella",
  "🤐": "Zipper-Mouth Face",
  "🍀": "Four Leaf Clover"
};

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiMeaning(event) {
    var emojiInput = event.target.value;
    var meaning = emojiDictionary[emojiInput];
    if (meaning === undefined) {
      meaning = "we dont have the meaning of this emoji )-:";
    }
    setMeaning(meaning);
  }
  function emojiCLickMeaning(item) {
    var emojiClickInput = item;
    var meaning = emojiDictionary[emojiClickInput];
    setMeaning(meaning);
  }
  var emojiWeHave = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1>Inside-Out</h1>
      <input id="input-box" onChange={emojiMeaning} />
      <div id="meaning"> {meaning} </div>
      <h3> Emojis We Know</h3>
      <ul>
        {" "}
        {emojiWeHave.map(function (item) {
          return (
            <span id="emoji" onClick={() => emojiCLickMeaning(item)}>
              {item}{" "}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
