import styled from "styled-components";

export const StyledCalendarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
