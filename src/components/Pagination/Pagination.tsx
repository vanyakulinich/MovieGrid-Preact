import { h } from 'preact';
import * as React from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';

type Props = {
  changePage: (e?: any) => any;
}

const Pagination: React.SFC<Props> = ({changePage}) => (
  <ReactPaginate
    pageCount={15}
    pageRangeDisplayed={3}
    marginPagesDisplayed={3}
    containerClassName='pagContainer'
    pageClassName='number'
    activeClassPage='active'
    onPageChange={changePage}
    previousClassName='number'
    nextClassName='number'
  />
);

export default Pagination;