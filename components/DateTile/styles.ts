import styled from "styled-components";

export const StyledDisabledDateTile = styled.span`
  background-color: ${(props) => props.theme.active};
  border: 1px solid #888;
  width: 100%;
  height: 80%;
  margin: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2rem;
`;

export const StyledDateTile = styled.span`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 80%;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2rem;
  transition: ease-in-out;
  transition-duration: 0.5s;

  &:hover {
    zoom: 1.1;
    background-color: ${(props) => props.theme.active};
    border: 1px solid ${(props) => props.theme.border};
    box-shadow: -11px 10px 0px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledTodayTile = styled(StyledDateTile)`
  zoom: 1.1;
  box-shadow: -11px 10px 0px 1px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.active};
  border: 1px solid ${(props) => props.theme.border};
`;
