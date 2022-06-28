import Image from "next/image";
import moviePoster from "../public/images/movie_poster.jpg";

function MovieTitle() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:flex-row text-center text-4xl">
      <h1></h1>
      <Image
        src={moviePoster}
        alt="Movie Poster"
        width={256.4}
        height={320}
        className=""
      />
    </div>
  );
}

export default MovieTitle;
