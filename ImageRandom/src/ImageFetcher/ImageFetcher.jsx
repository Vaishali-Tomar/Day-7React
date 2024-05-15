import { useState } from 'react'
import "./ImageFetcher.css"


function ImageFetcher() {

  const [searchImg, setSearchImg] = useState("");
  const [generatedImg, setGeneratedImg] = useState("");

  const API_TOKEN = "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";

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    console.log(result)
    return result;
  }


  const generateImg = async () => {
    await query({"inputs": searchImg }).then((response) => {
        console.log(response)
      const imgSrc = URL.createObjectURL(response)

      setGeneratedImg(imgSrc);
    }).catch(err => console.log(err))
  }

  return (
    <>
     <input className='input-value' type="text" value={searchImg} onChange={(e) => setSearchImg(e.target.value)} />
     <button
      onClick={generateImg}
     >Convert</button>

    <img src={generatedImg} alt="image using test to img" style={{ width: "200px", height: "200px"}} />
    </>
  )
}

export default ImageFetcher;