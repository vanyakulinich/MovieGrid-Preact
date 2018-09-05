import { h, Component } from "preact";
import { Header, Grid, Pagination } from '../components';
import './styles.css';

import {request} from '../utils/axios';

export default class Layout extends Component<any, any> {

  public sendRequest = () => {
    request(3)
  }

  public render() {
    return (
     <div class = 'container'>
      <Header/>
      <Grid/>
      <Pagination/>  

      <button onClick={this.sendRequest}>request</button>



     </div>
    )
  }
}

