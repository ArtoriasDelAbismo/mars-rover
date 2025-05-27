import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { curiosityData, perseveranceData } from "../data/data.js";
import "../styles/RoverDetails.css";
import { getRoverPhotos, getRoverInfo } from "../api.js";
import Header from "./Header.jsx";

export default function RoverDetails() {
  const { roverName } = useParams();
  const [rover, setRover] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [sol, setSol] = useState(1);
  const [searchSol, setSearchSol] = useState(1);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const { infoCuriosity } = curiosityData;
  const { infoPerseverance } = perseveranceData;
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    if (roverName) {
      setLoading(true);
      getRoverInfo(roverName)
        .then((data) => {
          console.log("Rover Data: ", data);
          setRover(data);
        })
        .catch((error) => {
          console.error("Error fetching rover data:", error);
        })
        .finally(() => setLoading(false));
    }
  }, [roverName]);

  useEffect(() => {
    if (roverName && sol) {
      setImageLoading(true);
      getRoverPhotos(roverName, sol)
        .then((photos) => {
          console.log("Rover Photos: ", photos);
          setPhotos(photos);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setImageLoading(false);
        });
    }
  }, [roverName, sol]);

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {rover ? (
            <div>
              <div className="main-info">
                <h1>{rover.name} Rover</h1>
                <div className="wrapper-container">
                  <div className="info-container">
                    <p className="description">
                      {roverName === "Perseverance"
                        ? infoPerseverance.description
                        : infoCuriosity.description}
                    </p>
                    <p>
                      <strong>Launch Date: </strong>
                      {rover.launch_date}
                    </p>
                    <p>
                      <strong>Landing Date: </strong>
                      {rover.landing_date}
                    </p>
                    <p>
                      <strong>Rover Status: </strong>
                      {rover.status}
                    </p>
                  </div>
                </div>
              </div>

              <div className="martian-sol-selector">
                <h2>Select Martian Sol</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSol(searchSol);
                  }}
                >
                  <input
                    type="number"
                    value={searchSol}
                    onChange={(e) => {
                      setSearchSol(e.target.value);
                    }}
                  />
                  <button type="submit">Search</button>
                </form>
              </div>

              <h2>Images from Sol: {sol}</h2>
              <div className="images-div">
                {imageLoading ? (
                  <div className="spinner"></div>
                ) : photos.length > 0 ? (
                  photos.map((photo) => (
                    <img
                      key={photo.id}
                      src={photo.img_src}
                      alt="Mars Rover"
                      className="rover-photo fade-in"
                      onClick={() => {
                        setSelectedPhoto(photo.img_src);
                        setIsModalOpen(true);
                      }}
                    />
                  ))
                ) : (
                  <p>No images found for Sol {sol}. Try another one!</p>
                )}
              </div>
            </div>
          ) : (
            <p>No data</p>
          )}

          {isModalOpen && (
            <div
              className="modal-overlay"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedPhoto} alt="Mars Rover Large" />
              </div>
            </div>
          )}

          <footer>
            <div className="footer-div"></div>
          </footer>
        </>
      )}
    </div>
  );
}
