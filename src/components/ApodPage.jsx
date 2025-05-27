import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function ApodPage() {
  const [apodData, setApodData] = useState("");
  const [loadingApod, setLoadingApod] = useState(true);

  useEffect(() => {
    setLoadingApod(true);
    async function getApodData() {
      try {
        const response = await fetch("http://localhost:3000/apod");
        const data = await response.json();
        console.log(data);
        setApodData(data);
        setLoadingApod(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoadingApod(false);
      }
    }
    getApodData();
  }, []);

  return (
    <>
    
    <Header />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
        background: "linear-gradient(to bottom, #242424,rgb(46, 46, 46))",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
        }}
      >
        {loadingApod ? (
          <div className="spinner" style={{position:'absolute', top:'37%', left:'48%'}}></div>
        ) : (
          <>
            <h1>{apodData.title}</h1>
            {apodData.url && (
              <img
                src={apodData.url}
                alt={apodData.title}
                style={{ maxWidth: "100%" }}
              />
            )}
            <p>{apodData.explanation}</p>
          </>
        )}
      </div>
    </div>
    </>
  );
}
