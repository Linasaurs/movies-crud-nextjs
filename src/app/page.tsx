"use client";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import { fetchMovies } from "@/api/movies";
import type { Movie } from "@/types";
import Image from "next/image";
import { usePagination } from "@/hooks/usePagination";
import { Pagination } from "@/components";

export default function MainPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<string>("");
  const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
  useEffect(() => {
    let filteredMovies = movies;
    if (searchCriteria.length > 0) {
      filteredMovies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchCriteria.toLowerCase())
      );
    }
    setCurrentMovies(filteredMovies);
  }, [movies, searchCriteria]);
  useEffect(() => {
    try {
      (async () => {
        const data = await fetchMovies();
        setMovies(data.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const { pageData, page, totalPages, setPage } =
    usePagination<Movie>(currentMovies);

  return (
    <>
      {movies.length > 0 ? (
        <>
          <h4 className="mb-6 text-xl font-semibold text-black">Movies</h4>
          <div className="mb-2">
            <input
              required
              value={searchCriteria}
              placeholder="Search by name..."
              onChange={(e) => setSearchCriteria(e.target.value)}
              pattern="(.|\s)*\S(.|\s)*"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 outline-none text-sm focus:border-primary active:border-primary"
            />
          </div>
          <div className="flex flex-col w-full ">
            <div className="grid grid-cols-2 border-solid bg-primary text-white  md:grid-cols-3">
              <div className="p-2.5">
                <h5 className="text-sm font-medium uppercase">Poster</h5>
              </div>
              <div className="p-2.5">
                <h5 className="text-sm font-medium uppercase">Title</h5>
              </div>
              <div className="p-2.5">
                <h5 className="text-sm font-medium uppercase hidden md:block">
                  Description
                </h5>
              </div>
            </div>

            {pageData.map((movie: Movie, index: number) => (
              <div
                className="grid grid-cols-2 md:grid-cols-3 border-primary/20 border-2 border-t-0 border-solid"
                key={index}
              >
                <div className="flex items-center gap-3 p-2.5">
                  <div className="flex-shrink-0 ">
                    <Image
                      src={movie.poster}
                      alt={movie.name}
                      width={48}
                      height={48}
                      className="rounded-md"
                    />
                  </div>
                  <p className="hidden text-black">{movie.poster}</p>
                </div>
                <div className="flex items-center p-2.5">
                  <p className="text-black">{movie.name}</p>
                </div>
                <div className="items-center p-2.5 hidden md:flex">
                  <p className="text-black">{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
