import { h } from 'preact';
import './style.css';

type Props = {
  movies: Array<{[propName: string]: any}>;
}

const Grid = ({ movies }: Props) => (
  <div>
    {movies && movies.map(movie=>(
      <img src={​'http://image.tmdb.org/t/p/w342' +movie.poster_path}/>
    ))}
  </div>
);

export default Grid;