import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function Form() {
  const [topMessage, setTopMessage] = React.useState("");
  const [bottomMessage, setBottomMessage] = React.useState("");

  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
  });

  function handleChange(event) {
    setFormData((previousState) => {
      return {
        ...previousState,
        [event.target.name]: event.target.value,
      };
    });
  }

  let idx = Math.floor(Math.random() * 100 + 1);
  const [image, setImage] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((value) => setImage(value.data.memes));
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    img: "https://i.imgflip.com/23ls.jpg",
  });

  function handleClick() {
    setMeme((value) => {
      return {
        ...value,
        topText: formData.topText,
        bottomText: formData.bottomText,
        img: image[idx].url,
      };
    });
  }

  return (
    <div className="flex flex-col justify-center gap-10 mt-7 p-5">
      <div className="flex justify-between gap-10">
        <input
          type="text"
          id="top"
          className="border-2 w-10/12 p-3 rounded-lg text-2xl"
          placeholder="Enter Top Text"
          name="topText"
          onChange={handleChange}
          value={formData.topText}
        />
        <input
          type="text"
          id="bottom"
          className="border-2 w-11/12 p-3 rounded-lg text-2xl"
          placeholder="Enter Bottom Text"
          name="bottomText"
          onChange={handleChange}
          value={formData.bottomText}
        />
      </div>
      <div className="border-2 p-3 rounded-lg bg-gradient-to-tl from-violet-300 via-violet-400 to-violet-800 text-white">
        <button className="text-3xl font-bold w-full" onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
      <div className="flex justify-center items-center relative">
        <h2 className="absolute top-3 text-4xl font-extrabold">
          {meme.topText}
        </h2>
        <img src={meme.img} alt="" className=" " />
        <h2 className="absolute bottom-3 text-4xl font-extrabold">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}
