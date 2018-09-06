import { h, Component } from "preact";
import { Header, Grid, Pagination } from '../components';
import './styles.css';

import {request} from '../utils/axios';

interface IState {
  movies: null | object[];
}

export default class Layout extends Component<{}, IState> {

  public state = {
    movies: null,
  }

  public componentDidMount () {
    this.sendRequest();
  }

  public sendRequest = async (page?: number) => {
    const movies = await request(page);
    this.setState({movies});
  }

  public changePage = ({selected}: any): void => {this.sendRequest(++selected)};

  public render() {
    const { movies } = this.state;
    return (
     <div class = 'container'>
      <Header>Movies</Header>
      <Grid movies={movies}/>
      <Pagination changePage={this.changePage}/>  
     </div>
    )
  }
}

