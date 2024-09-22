"use client";

import { useEffect, useState, type FormEvent } from "react";
import { fetchMovies, updateMovie } from "@/api/movies";
import type { Movie } from "@/types";

export default function Delete() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSElectedMovie] = useState<Movie>();
  const fetchData = async () => {
    try {
      const data = await fetchMovies();
      setMovies(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (selectedMovie) await updateMovie(name, description, selectedMovie.id);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="mb-6 text-xl font-semibold text-black">
        Update Information
      </h4>
      <div>
        <div className="flex flex-col gap-5.5 ">
          <div className="mb-4">
            <select
              className="bg-white border-b-2 border-solid border-primary text-primary"
              name="movie"
              onChange={(e) => {
                const movie = movies.find(
                  (movie) => e.target.value === movie.id.toString()
                );
                if (movie) {
                  setSElectedMovie(movie);
                  setName(movie.name);
                  setDescription(movie.description);
                }
              }}
              defaultValue="placeholder"
              required
            >
              <option hidden value="placeholder" disabled>
                Choose a movie to edit
              </option>
              {movies.map((movie) => (
                <option key={movie.id} value={movie.id}>
                  {movie.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="mb-3 block text-sm font-medium">Name</label>
            <input
              required
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              pattern="(.|\s)*\S(.|\s)*"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Enter a valid and non-empty name."
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 outline-none lg:w-1/2 focus:border-primary active:border-primary"
            />
          </div>
          <div className="mb-2">
            <label className="mb-3 block text-sm font-medium text-black">
              Description
            </label>
            <input
              required
              type="textarea"
              value={description}
              placeholder="Description..."
              onChange={(e) => setDescription(e.target.value)}
              pattern="(.|\s)*\S(.|\s)*"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Enter a valid and non-empty name."
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 outline-none lg:w-1/2 focus:border-primary active:border-primary"
            />
          </div>
          <div className="flex w-full lg:w-1/2 justify-end ">
            <button
              className=" bg-primary py-3 px-5 text-white rounded-md w-full lg:w-fit disabled:opacity-50"
              type="submit"
              disabled={isLoading || !selectedMovie}
            >
              {isLoading ? (
                <div className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
