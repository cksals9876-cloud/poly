import { fetchMovies } from '@/serverActions'

export default async function MoviesPage() {
  return (
    <>
      <form action={fetchMovies}>
        <input type="text" />
        <button type="submit">검색</button>
      </form>
    </>
  )
}
