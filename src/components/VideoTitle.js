import React from "react";

const VideoTitle = ({ videoTitle, videoDescription }) => {
  return (
    <div className="w-full aspect-video pt-[13%] px-24 text-white absolute bg-gradient-to-r from-black">
      <p className="text-2xl font-extrabold uppercase my-4">{videoTitle}</p>
      <p className="text-xl font-semibold w-1/4 my-4">{videoDescription}</p>
      <div className="my-2 font-extrabold">
        <button className="my-2 mr-2 px-4 py-2 bg-slate-200 text-slate-500 rounded-md uppercase hover:bg-slate-400 hover:text-slate-200">
          Play
        </button>
        <button className="my-2 px-4 py-2 bg-slate-200 text-slate-500 rounded-md uppercase hover:bg-slate-400 hover:text-slate-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
