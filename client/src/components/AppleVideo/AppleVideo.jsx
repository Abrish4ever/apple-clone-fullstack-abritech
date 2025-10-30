import React, { useEffect, useState } from "react";
import "./AppleYoutube.css";

const AppleYoutube = () => {
 const [appleVideos, setAppleVideos] = useState([]);

 useEffect(() => {
   const getAppleVideo = async () => {
     try {
       const response = await fetch("http://localhost:8000/api/apple-videos");
       const data = await response.json();
       setAppleVideos(data?.items || data); // Use data if items doesn't exist
     } catch (error) {
       console.error("Error fetching apple videos:", error);
     }
   };
   getAppleVideo();
 }, []);
  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>

            {appleVideos?.map((singleVideo, i) => {
              return (
                <div key={i} className="col-sm-12 col-lg-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleYoutube;
