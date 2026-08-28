'use server'

export interface Movie {
  imdbID: string
  Title: string
  Poster: string
}

export async function fetchMovies(searchText: string) {
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&s=${searchText}`
  )
  const data = await res.json()
  return (data.Search || []) as Movie[]
}
