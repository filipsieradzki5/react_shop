import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyles = styled.div`
  background: blue;
  height: 10vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  p {
    background: white;
    border-radius: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export default function Header() {
  return (
    <header>
      <HeaderStyles>
        <div className="bar">elo</div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
      </HeaderStyles>
      <Nav />
    </header>
  );
}
