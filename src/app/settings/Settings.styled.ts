import styled from "styled-components";

export const SettingsContainer = styled.div`
  color: white;
`;

export const SettingsContent = styled.div`
  /* padding-inline-start: 70px; */
  display: flex;
  gap: 20px;
align-items: center;

  flex-direction: column;
  padding: 20px;

  min-height: 100vh;
  @media screen and (min-width:768px) {
    padding-inline-start: 70px !important;
    padding: 0;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    
    padding-bottom: 20px;
  }

  @media screen and (min-width:1200px){
    padding-bottom: 0px;
  }
`;

export const SettingsContainerPart1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;
  h1 {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0px;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }
  }
`;

export const SettingsContainerPart2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* border: 3px solid white; */
  padding-top: 20px;
  border-radius: 10px;
  max-width: 600px;
  /* max-height: 350px; */
  width: 100%;

  height: 100%;
  width: 100%;
  justify-content: space-between;
  /* background-color: red; */

  @media screen and (min-width:768px) {
    flex-direction: row;
    max-height: 350px;
    gap: 0px;
    height: auto;
  }
`;
export const SettingsContainerPart3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  textarea {
    max-width: 600px;
    width: 100%;
    background: #1f2937;
    border-radius: 5px;
    height: 240px;
    padding: 10px;
    resize: none;
    outline: none;
    /* margin-top: 160px; */
  }
  button {
    margin-top: 20px;
    background-color: white;
    color: black;
    padding: 10px;
    width: 100%;
    max-width: 200px;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #e6e6e6;
    }
  }

  @media screen and (min-width: 768px) {
    textarea {
      margin-top: 0px;
    }
  }
`;

export const SettingsPart1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1200px){
      min-height:280px
  }

`;
export const SettingsPart2 = styled.div`
  display: flex;

  flex-direction: column;
 /* background-color: red; */

  gap: 10px;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    select {
      background: #1f2937;
      padding: 8px;
      border-radius: 5px;
      outline: none;
      max-width: 180px;
    }

    textarea {
      background: #1f2937;
      border-radius: 5px;
      min-height: 100%;
    }
  }
    @media screen and (min-width: 1200px){
    min-height:280px !important;
  }
`;
export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 1.2rem;
  }
`;

export const ThemeContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background: #1f2937;
  padding: 8px;
  border-radius: 5px;
  max-width: 180px;
  input[type="radio"] {
    transform: scale(1.2); 
    accent-color: #2563eb; 
    cursor: pointer;
    
  }
`;

export const ThemeInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

`;

export const ThemeInput2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h2 {
    font-size: 1.2rem;
  }
`;

export const SelectInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    font-size: 1.1rem;
  }

  select {
    background: #1f2937;
    padding: 8px;
    border-radius: 5px;
    outline: none;
    max-width: 180px;
  }
`;

export const SelectInput2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    font-size: 1.1rem;
  }

  select {
    background: #1f2937;
    padding: 8px;
    border-radius: 5px;
    outline: none;
    max-width: 180px;
  }
`;
