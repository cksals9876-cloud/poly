'use server'
import type { MovieSimples, MovieDetails } from '@/types/movie'

export async function fetchMovies(searchText: string) {
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&s=${searchText}`
  )
  const data = await res.json()
  return (data.Search || []) as MovieSimples[]
}

export async function fetchMovie(movieId: string, plot: MovieDetails['Plot']) {
  // await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot}`
  )
  return (await res.json()) as MovieDetails
}
