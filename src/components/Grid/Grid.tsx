import { h } from 'preact';
import './style.css';

type Props = {
  movies: Array<{[propName: string]: any}>;
}

const Grid = ({ movies }: Props) => (
  <div class='grid'>
    {movies && movies.map(movie=>(
      movie.poster_path ? <img src={'http://image.tmdb.org/t/p/w200' +movie.poster_path}/> : null
    ))}
  </div>
);

export default Grid;