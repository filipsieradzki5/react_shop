import styled from 'styled-components';

const SideBarStyles = styled.div`
  background: blue;
  border-radius: 20px;
  padding: 10px;
  top: 0;
  height: 80vh;
  width: 15vw;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    transform: translate(5px);
`;

export default SideBarStyles;
