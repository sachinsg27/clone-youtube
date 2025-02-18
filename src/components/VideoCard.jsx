import React from "react";

// const VideoCard = (info) => {
//   console.log(info);
//   const { snippet, thumbnails, channelTitle } = info;

//   return (
//     <div>
//       <h1>VideoCard</h1>
//       <img alt="thumbnail" src="thumbnails.medium.url"></img>
//       <ul>
//         <li>{channelTitle}</li>
//       </ul>
//     </div>
//   );
// };

// const VideoCard = ({ info }) => {
//   if (!info) return null; // Prevent rendering if info is undefined

//   // Destructure properties from `info`
//   const {
//     snippet: { title, channelTitle, thumbnails },
//     statistics: { viewCount },
//   } = info;

//   // Get the thumbnail URL
//   const thumbnailUrl =
//     thumbnails?.medium?.url || "https://via.placeholder.com/320x180";

//   return (
//     <div className="p-2 m-2 w-72 shadow-lg">
//       {/* Thumbnail */}
//       <img className="rounded-lg" src={thumbnailUrl} alt="Video Thumbnail" />

//       {/* Video Details */}
//       <div className="video-details">
//         <h3 className="font-bold">{title || "No Title"}</h3>
//         <p className="channel-title">{channelTitle || "No Channel Name"}</p>
//         <p className="view-count">
//           {viewCount ? `${viewCount} views` : "No Views Available"}
//         </p>
//       </div>
//     </div>
//   );
// };

const VideoCard = ({ info = {} }) => {
  const {
    snippet: {
      title = "No Title",
      channelTitle = "No Channel",
      thumbnails = {},
    } = {},
    statistics: { viewCount = "No views" } = {},
  } = info;

  const thumbnailUrl =
    thumbnails?.medium?.url || "https://via.placeholder.com/320x180";

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnailUrl} alt="Video Thumbnail" />
      <div className="video-details">
        <h3 className="font-bold">{title}</h3>
        <p className="channel-title">{channelTitle}</p>
        <p className="view-count">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
