import { h, Component } from "preact";
import { Header, Grid, Pagination } from '../components';
import './styles.css';

import {request} from '../utils/axios';

interface IState {
  page: number;
  movies: null | object[];
}

export default class Layout extends Component<{}, IState> {

  public state = {
    page: 1,
    movies: null
  }

  public componentDidMount () {
    this.sendRequest()
  }

  public sendRequest = async () => {
    const movies = await request(this.state.page);
    this.setState({...this.state, movies: movies})
    // console.log(movies)
  }

  public render() {
    const { movies } = this.state;
    return (
     <div class = 'container'>
      <Header/>
      <Grid movies={movies}/>
      <Pagination/>  
     </div>
    )
  }
}

