// src/components/ExploreSection.jsx
import React, { useState } from "react";
import { moviesData } from "../data/moviesData";
import NewReleaseSection from "./NewReleaseSection";

function ExploreSection() {
  // Mảng tất cả phim
  const [movies] = useState(moviesData);

  // State: phim đang được chọn để hiển thị ở banner
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  // Hàm xử lý khi click phim (được truyền xuống NewReleaseSection)
  const handleSelectMovie = (movieId) => {
    const foundMovie = movies.find((m) => m.id === movieId);
    if (foundMovie) {
      setSelectedMovie(foundMovie);
    }
  };

  return (
    <section className="mb-8 px-4 md:px-8 font-sans text-white">
      {/* Tiêu đề Explore */}
      <h2 className="text-2xl font-bold mb-2">Explore</h2>
      <p className="text-sm text-gray-300 mb-6">
        What are you gonna watch today?
      </p>

      {/* Banner hiển thị phim đang chọn */}
      <div className="relative h-96 sm:h-[28rem] mb-6">
        {/* Cột trái: Ảnh */}
        <div className="absolute inset-0">
          <img
            src={selectedMovie.image} 
            alt={selectedMovie.movieName}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay mờ nếu muốn */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/0"></div>
        {/* Nội dung text trên banner */}
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            {selectedMovie.movieName}
          </h3>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {selectedMovie.description}
          </p>
        </div>
      </div>

      {/* Danh sách phim bên dưới */}
      <NewReleaseSection movies={movies} onMovieClick={handleSelectMovie} />
    </section>
  );
}

export default ExploreSection;
