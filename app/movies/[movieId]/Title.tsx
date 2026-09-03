'use client'

interface Props {
  movie: Movie
}

export default function Title({ movie }: Props) {
  return <h1 onClick={() => console.log('clicked!')}>{movie.Title}</h1>
}
