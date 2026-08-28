interface Props {
  params: Promise<{
    movieId: string
  }>
}

export default async function MovieDetailsPage({ params }: Props) {
  const { movieId } = await params
  await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}`
  )

  return <></>
}

// --- await promise를 이해하기 위한 예제 ---
//
// async function add(): Promise<number> {
//   return 123
// }
// const 객체 = add()
// const 결과 = await 객체
// console.log(결과) // 123
