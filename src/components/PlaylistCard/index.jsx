import React from "react";
import { RiPlayFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const PlaylistsCard = ({author_id ,title, description, imageUrl, file_link, onPlay, artists }) => {

  const author = artists.find((artist) => artist._id === author_id);

  return (
      <div
          className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group w-60 cursor-pointer"
          onClick={() => onPlay(file_link)}
      >
        <div className="mb-4 relative flex justify-center items-center">
          <div
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '192px',
                height: '192px'
              }}
              className="w-48 h-48 rounded-xl drop-shadow-2xl"
          />
          <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out bg-[#65D46E] text-black">
            <RiPlayFill />
          </button>
        </div>
        <div>
          <h5 className="font-medium text-gray-100 mb-2">{title}</h5>
          <p className="text-gray-400 text-sm">{author.name}</p>
        </div>
      </div>
  );
};