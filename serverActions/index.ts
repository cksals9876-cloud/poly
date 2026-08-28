'use server'

export async function fetchMovies() {
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&s=spider`
  )
  const data = await res.json()
  return data.Search
}
