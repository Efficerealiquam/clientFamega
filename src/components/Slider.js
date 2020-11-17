import React from "react";
import "../styles/slider.css";

function Slider() {
  const setURL = (url) => {
    document.getElementById("slider").src = url;
  };
  return (
    <>
      <div className="container">
        <div className="mx-auto" style={{ paddingTop: "25px" }}>
          <section className="sectionSlider">
            <video
              style={{ borderRadius: "4px" }}
              id="slider"
              autoPlay
              loop
              controls
            >
              <source
                src="https://res.cloudinary.com/dyav1psn9/video/upload/v1603653716/Sin_t%C3%ADtulo_9_1080p_1_iujh0v.3gp"
                type="video/mp4"
              />
            </video>
            {/* ---------------------- */}
            <ul className="navigation">
              <li
                onClick={() =>
                  setURL(
                    "https://res.cloudinary.com/dyav1psn9/video/upload/v1603653716/Sin_t%C3%ADtulo_9_1080p_1_iujh0v.3gp"
                  )
                }
              >
                <img
                  src="https://res.cloudinary.com/dyav1psn9/image/upload/v1603651992/Min1_ivest7.png"
                  alt="Img1"
                />
              </li>

              <li
                onClick={() =>
                  setURL(
                    "https://res.cloudinary.com/dyav1psn9/video/upload/v1603651745/VID-20200520-WA0002_e8kawh.mp4"
                  )
                }
              >
                <img
                  src="https://res.cloudinary.com/dyav1psn9/image/upload/v1603651997/Min2_sx3hrs.png"
                  alt="Img2"
                />
              </li>
              <li
                onClick={() =>
                  setURL(
                    "https://res.cloudinary.com/dksedihrp/video/upload/v1600807181/video3_jojuso.mp4"
                  )
                }
              >
                <img
                  src="https://res.cloudinary.com/dksedihrp/image/upload/v1600807591/thumb1_elfonn.png"
                  alt="Img3"
                />
              </li>
              <li
                onClick={() =>
                  setURL(
                    "https://res.cloudinary.com/dksedihrp/video/upload/v1600807115/video4_btq89s.mp4"
                  )
                }
              >
                <img
                  src="https://res.cloudinary.com/dksedihrp/image/upload/v1600807591/thumb2_xedthf.png"
                  alt="Img4"
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Slider;
