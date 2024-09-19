import React, { useRef, useState } from "react";

import "../components/ImageGeneration.css";

function ImageGeneration() {
  const [prompt, setPrompt] = useState("dog");

  const img = useRef();

  const url = "https://ai-text-to-image-generator-api.p.rapidapi.com/3D";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "f0e0dfacb8msh1d204e5c942d929p18a55cjsnc750c96be6ca",
      "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: prompt,
    }),
  };

    const generateHandle = (e) => {
        e.preventDefault();
        try {
        const res = async () => {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.url);
            img.current.src = result.url;
        };
        res();
        } catch (error) {
        console.error(error);
        }
    };

  return (
    <>
      <section>
        <h1>MAKE IMAGE BY GIVING PROMPT</h1>
        <div>
          <form action="" onSubmit={generateHandle}>
            <textarea
              name="" id=""cols={50}rows={10} onChange={(e) => {setPrompt(e.target.value); }} ></textarea>
            <button type="submit">Generate</button>
          </form>
        </div>
        <div id="img">
          <img src="" ref={img} alt="enter prompt to see the" width={400} height={400} />
        </div>
      </section>
    </>
  );
}

export default ImageGeneration;
