export default async function World() {
  await new Promise(resolve => setTimeout(resolve, 4000))
  throw new Error('World 컴포넌트 에러 발생!')
  return (
    <>
      <h1>World!</h1>
    </>
  )
}
