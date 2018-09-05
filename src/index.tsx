import { h, render } from "preact";
import css from 'css-loader';
import Layout from "./layout/Layout";
import './index.css';

render(<Layout />, document.querySelector("#root"));
