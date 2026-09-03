'use client'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import { fetchMovie } from '@/serverActions'
import type { MovieDetails } from '@/types/movie'

interface SP {
  plot?: 'full' | 'short'
}
interface Props {
  params: Promise<{
    movieId: string
  }>
  searchParams: Promise<SP>
}

// http://localhost:3000/movies/tt1234567890?plot=full
export default function MovieDetailsPage({ params, searchParams }: Props) {
  const { movieId } = use(params)
  const { plot = 'short' }: SP = use(searchParams)
  const [movie, setMovie] = useState<MovieDetails | null>(null)

  useEffect(() => {
    // const movie = await fetchMovie()
    // setMovie(movie)
    // fetchMovie().then(movie => setMovie(movie))
    fetchMovie(movieId, plot).then(setMovie)
  }, [])

  // --- ❌ 에러 발생 예시 ---
  // const myError = new Error(
  //   '영화 상세 정보를 가져오다가 알 수 없는 문제가 발생했습니다. 나중에 다시 시도해 보세요!'
  // )
  // console.log(myError.message)
  // throw myError

  // --- ✅ 정상 처리 예시 ---
  return (
    <>
      {movie && (
        <>
          <h1 onClick={() => console.log('clicked!')}>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          {/* <img src="" alt="" /> */}
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={600}
            height={900}
          />
        </>
      )}
    </>
  )
}

// --- await promise를 이해하기 위한 예제 ---
//
// async function add(): Promise<number> {
//   return 123
// }
// const 객체 = add()
// const 결과 = await 객체
// console.log(결과) // 123
