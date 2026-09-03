import Header from '@/components/Header'

interface Props {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
