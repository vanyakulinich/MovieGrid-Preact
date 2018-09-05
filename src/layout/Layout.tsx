import { h, Component } from "preact";
import { Header, Grid, Pagination } from '../components';
import './styles.css';

export default class Layout extends Component<any, any> {

  render() {
    return (
     <div class = 'container'>
      <Header/>
      <Grid/>
      <Pagination/>  





     </div>
    )
  }
}

