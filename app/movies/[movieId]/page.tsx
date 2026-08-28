interface Props {
  params: Promise<{
    movieId: string
  }>
}

export default async function MovieDetailsPage({ params }: Props) {
  const { movieId } = await params
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}`
  )
  const movie = await res.json()

  // --- ❌ 에러 발생 예시 ---
  // const myError = new Error(
  //   '영화 상세 정보를 가져오다가 알 수 없는 문제가 발생했습니다. 나중에 다시 시도해 보세요!'
  // )
  // console.log(myError.message)
  // throw myError

  // --- ✅ 정상 처리 예시 ---
  return (
    <>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
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
