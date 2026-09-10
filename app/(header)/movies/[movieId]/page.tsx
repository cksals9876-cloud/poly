import type { MovieDetails as Movie } from '@/types/movie'
import Render from './Render'

interface SP {
  plot?: Movie['Plot']
}
interface Props {
  params: Promise<{
    movieId: string
  }>
  searchParams: Promise<SP>
}

async function fetchMovie(movieId: string, plot: string) {
  const res = await fetch(
    // `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot}`
    `${process.env.NEXT_PUBLIC_URL}/api/movies/${movieId}?plot=${plot}`,
    {
      cache: 'force-cache'
    }
  )
  const movie: Movie = await res.json()
  return movie
}

export async function generateMetadata({ params, searchParams }: Props) {
  const { movieId } = await params
  const { plot = 'short' }: SP = await searchParams
  // await new Promise(resolve => setTimeout(resolve, 2000))
  const movie = await fetchMovie(movieId, plot)

  return {
    title: movie.Title,
    openGraph: {
      type: 'website',
      siteName: 'Next.js 연습 프로젝트',
      title: movie.Title,
      description: movie.Plot,
      images: movie.Poster
    }
  }
}

// http://localhost:3000/movies/tt1234567890?plot=full
export default async function MovieDetailsPage({
  params,
  searchParams
}: Props) {
  const { movieId } = await params
  const { plot = 'short' }: SP = await searchParams
  // await new Promise(resolve => setTimeout(resolve, 2000))
  const movie = await fetchMovie(movieId, plot)
  // --- ❌ 에러 발생 예시 ---
  // const myError = new Error(
  //   '영화 상세 정보를 가져오다가 알 수 없는 문제가 발생했습니다. 나중에 다시 시도해 보세요!'
  // )
  // console.log(myError.message)
  // throw myError

  // --- ✅ 정상 처리 예시 ---
  return (
    <>
      <Render movie={movie} />
    </>
  )
}
