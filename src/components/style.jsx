import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, NavLink, Card } from "react-bootstrap";

// // variables
// colors
const colors =
{
  darkBlue: "#001524",
  lightBlue: "#15616D",
  beige: "#FFECD1",
  orange: "#FF7D00",
  maroon: "#78290F",
  gray: "#7C7C8A"
}

export const HeaderArea = styled.div`
  background-color: ${colors.darkBlue};
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;  
  position:relative;

  img {
    height: 5rem;
    padding: 5px 20px;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const MenuButton = styled(Link)`
  background-color: ${colors.orange};
  color: ${colors.darkBlue};
  border: none;
  border-radius: 8px;
  padding: 0.3rem 1.5rem;
  max-width: 50%;
  text-decoration:none;
  display:flex;
  justify-content: center;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.maroon};
    color: ${colors.beige};
    outline: none;
    border: none;
  }
`;

export const GeneratePdfButton = styled(Link)`
  background-color: ${colors.orange};
  color: ${colors.darkBlue};
  border: none;
  border-radius: 8px;
  padding: 0.3rem 1.5rem;
  margin: 1.5rem 0;
  width: fit-content;
  text-decoration:none;
  display:flex;
  justify-content: center;
  font-weight: bold;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.maroon};
    color: ${colors.beige};
    outline: none;
    border: none;
  }
`;

export const IconButton = styled(Link)`
  background-color: ${colors.darkBlue};
  color: ${colors.beige};
  border: none;
  border-radius: 8px;
  padding: 0.3rem 1.5rem;
  margin: 1.5rem 0;
  width: fit-content;
  text-decoration:none;
  display:flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.beige};
    color: ${colors.maroon};
    outline: none;
    border: none;
  }
`;
