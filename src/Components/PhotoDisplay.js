import React, { useState, useEffect } from "react";
import "../App.css";

function PhotoDisplay() {
  const apiKey = "72xloinzh5GvX2KEOeGEIpL7EVHW5nxUlyATjpQD";
  const [dataUpdate, setDataUpdate] = useState(null);

  useEffect(() => {
    const apiCall = () => {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setDataUpdate(data);  // Update the state with fetched data
          console.log(data, "DATA");
        })
        .catch((error) => console.log(error));
    };

    apiCall();
  }, [apiKey]);

  return (
    <div className="photo-display">
      {dataUpdate && (
        <>
          <img src={dataUpdate.url}
           alt={dataUpdate.title}    
            style={{ maxWidth: "25%", height: "auto" }}/>
          <h2>{dataUpdate.title}</h2>
          <p>Date: {dataUpdate.date}</p>
          <p>{dataUpdate.explanation}</p>
        </>
      )}
    </div>
  );
}

export default PhotoDisplay;
