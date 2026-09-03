import Image from 'next/image'
import Title from './Title'
import type { MovieDetails as Movie } from '@/types/movie'

interface SP {
  plot?: Movie['Plot']
}
interface Props {
  params: Promise<{
    movieId: string
  }>
  searchParams: Promise<SP>
}

// http://localhost:3000/movies/tt1234567890?plot=full
export default async function MovieDetailsPage({
  params,
  searchParams
}: Props) {
  const { movieId } = await params
  const { plot = 'short' }: SP = await searchParams
  // await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch(
    // `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot}`
    `http://localhost:3000/api/movies/${movieId}?plot=${plot}`
  )
  const movie: Movie = await res.json()

  // --- ❌ 에러 발생 예시 ---
  // const myError = new Error(
  //   '영화 상세 정보를 가져오다가 알 수 없는 문제가 발생했습니다. 나중에 다시 시도해 보세요!'
  // )
  // console.log(myError.message)
  // throw myError

  // --- ✅ 정상 처리 예시 ---
  return (
    <>
      <Title movie={movie} />
      <p>{movie.Plot}</p>
      {/* <img src="" alt="" /> */}
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width={600}
        height={900}
      />
    </>
  )
}
