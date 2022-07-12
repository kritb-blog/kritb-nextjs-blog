import styled from "styled-components";

export const StyledCalendarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .grid {
    z-index: 1;
  }
`;

export const StyledMonthSelector = styled.div`
  display: flex;
  font-size: 3rem;
  opacity: 0.5;
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
