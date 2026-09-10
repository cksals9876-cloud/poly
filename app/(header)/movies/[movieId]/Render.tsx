'use cache'
import Image from 'next/image'
import Title from './Title'
import { MovieDetails } from '@/types/movie'
interface Props{
    movie: MovieDetails
}

export default async function Render({movie}: Props) {
  return <>
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
}
