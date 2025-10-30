import styled from "styled-components";

export const ClientCardDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  background-color: #1e293b;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  height: 100%;
  max-width: 400px;
  max-height: 320px;
  overflow-y: scroll;


    @media screen and (min-width: 1200px) {
    max-width: 960px;
        flex-direction: row;
  }
`;

export const ClientCardDataColumn = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;

  &:first-child {
    border-left: none;
  }

  @media screen and (min-width: 1200px) {
  border-left: 2px solid #334155;
    
  }
`;

export const ClientCardDataHeader = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

export const ClientCardDataItem = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;
