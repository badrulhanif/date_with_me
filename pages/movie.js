import Image from "next/image";
import moviePoster from "../public/images/movie_poster.jpg";
import popcorn from "../public/images/popcorn.jpg";
import wetTissue from "../public/images/wet tissue.jpg";
import { useRouter } from "next/dist/client/router";

function MovieTitle() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-16 text-center md:flex-row">
      <div>
        <h1 className="mb-5 text-3xl font-bold">
          The Umbrella Academy <a className="text-red-500"> 3</a>
        </h1>
        <Image
          src={moviePoster}
          alt="Movie Poster"
          width={256.4}
          height={320}
        />
        <p className="mt-1 text-red-500 text-medium">
          Only 2 seats available. (You & Me)
        </p>
        <div className="px-12 mt-2">
          <div className="pr-64">
            <button className="rounded border-solid py-0.5 px-2 mt-3 mr-2 bg-black text-xs text-white cursor-default">
              PG-13
            </button>
            <button className="rounded border-solid py-0.5 px-2 mt-3 mr-2 bg-yellow-500 text-xs text-white cursor-default">
              8/10 IMDb
            </button>
            <button className="rounded border-solid py-0.5 px-2 mt-3 mr-2 bg-red-500 text-xs text-white cursor-default">
              83% Rotten Tomatoes
            </button>
          </div>
          <p className="flex items-center justify-center mt-2 text-justify text-medium px-96">
            This supposed to be the movie descriptions but no way...it is too
            long to write it here and this is like the best sci-fi Netflix
            series kot, 83% on rotten tomatoes. You not gonna miss it and come
            enjoy it with me. 🍿
          </p>
        </div>
        <button
          className="justify-end px-4 py-1 mt-6 text-white border-solid rounded-md bg-cyan-500"
          onClick={() => router.push("/watchMovie")}
        >
          Lets Watch
        </button>
      </div>
    </div>
  );
}

export default MovieTitle;
