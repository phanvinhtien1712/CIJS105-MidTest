// src/components/NewReleaseSection.jsx
import React from "react";

function NewReleaseSection({ movies, onMovieClick }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">New Release</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((item) => (
          <div
            key={item.id}
            className="
              relative rounded-md overflow-hidden
              bg-[#212121]
              cursor-pointer
              hover:scale-105 transition-transform duration-300
            "
            onClick={() => onMovieClick(item.id)}
          >
            <img
              src={item.image}
              alt={item.movieName}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <p className="text-sm text-gray-300">Episode {item.episode}</p>
              <h3 className="text-sm md:text-base font-semibold mt-1">
                {item.movieName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewReleaseSection;
