import styled from "styled-components";

export const VipCardContainer = styled.div `
width: 100%;
height: 180px;
background-color: #1e293b;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px;
color: white;
align-items: center;
border-radius: 5px;
@media screen and (min-width: 1200px) {
    width: 265px;
}
h1{
    font-size: 1.3rem;
}
h2{
    font-size: 2rem;
    font-weight: bold;
}
p{
    display: flex;
    gap: 5px;
    font-size: 1.4rem;
}

`