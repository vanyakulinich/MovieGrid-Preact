import { h } from 'preact';
import './style.css';

type Props = {children?: string | JSX.Element}

const Header = ({children}: Props) => (<h1>{children}</h1>);

export default Header;