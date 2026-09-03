export default async function Hello() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <>
      <h1>Hello!</h1>
    </>
  )
}
