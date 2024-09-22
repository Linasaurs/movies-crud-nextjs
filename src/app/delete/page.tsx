"use client";
import { deleteMovie, fetchMovies } from "@/api/movies";
import { Pagination } from "@/components";
import { usePagination } from "@/hooks/usePagination";
import type { Movie } from "@/types";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Image from "next/image";
import { Close } from "@mui/icons-material";

export default function Delete() {
  const [movies, setMovies] = useState<Movie[]>([]);
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
  const { pageData, page, totalPages, setPage } = usePagination<Movie>(movies);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {movies.length > 0 && !isLoading ? (
        <>
          <h4 className="mb-6 text-xl font-semibold text-black">
            Delete Movie
          </h4>
          <div className="flex flex-col w-full ">
            <div className="grid grid-cols-3 border-solid bg-primary text-white ">
              <div className="p-2.5">
                <h5 className="text-sm font-medium uppercase">Poster</h5>
              </div>
              <div className="p-2.5">
                <h5 className="text-sm font-medium uppercase">Title</h5>
              </div>
              <div className="p-2.5">
                <h5 className="text-sm font-medium uppercase hidden md:block"></h5>
              </div>
            </div>

            {pageData.map((movie: Movie, index: number) => (
              <div
                className="grid grid-cols-3 border-primary/20 border-2 border-t-0 border-solid"
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
                <div className="items-center p-2.5 flex">
                  <button
                    className="text-danger"
                    onClick={async () => {
                      setIsLoading(true);
                      try {
                        await deleteMovie(movie.id);
                        await fetchData();
                      } catch (error) {
                        console.log(error);
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                  >
                    <Close />
                  </button>
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
