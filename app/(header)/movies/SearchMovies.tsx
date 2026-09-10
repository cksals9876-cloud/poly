'use client'
import { useState } from 'react'
import { fetchMovies } from '@/serverActions'
import type { MovieSimples } from '@/types/movie'
import Link from 'next/link'

export default function MoviesPage() {
  const [movies, setMovies] = useState<MovieSimples[]>([])

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchText = formData.get('searchText') as string
    const movies = await fetchMovies(searchText)
    console.log(movies) // 영화 목록?!
    setMovies(movies)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchText"
        />
        <button type="submit">검색</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <Link href={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
