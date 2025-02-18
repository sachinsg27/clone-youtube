import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

// const VideoContainer = () => {
//   const [videos, setvideos] = useState([]);
//   useEffect(() => {
//     getVideos();
//   }, []);
//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_API);
//     const json = await data.json();
//     // console.log(json.items);
//     setvideos(json.items);
//   };
//   return (
//     <div>
//       {/* <VideoCard info={videos[0]} /> */}
//       <VideoCard info={videos[0]} />
//     </div>
//   );
// };

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await fetch(YOUTUBE_API); // Replace with your API endpoint
      const json = await data.json();
      setVideos(json.items); // Assuming `items` contains video data
    };

    fetchVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
