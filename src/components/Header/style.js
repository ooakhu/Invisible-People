import styled from 'styled-components'
import img from './background.svg';


export const SmallHeaderBox = styled.div`
  display: flex;
  background-color: white;
  height: 4%;
  
  .welcome {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    height: 4%;
    align-self: center;

    img {
      margin-left: 20px;
      width: 26.5%;
      height: 100%;
      
    }
  }
  
  .socials {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  @media(min-width: 1280px) and (max-width: 1440px){
    font-size: small;
  }
  @media(min-width: 800px) and (max-width: 1200px){
    font-size: small;
  }
`


export const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 29%;
  background:linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)), url(${img});
  background-size: 100%;
  align-items: center;

  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  font-family: 'Rubik', sans-serif;
  
  .right {
    order: 3;
  }
  
  .left {
    order: 1;
  }
  
  h2 {
    color: white;
    font-size: xxx-large;
    margin: auto;
    margin-top: 280px;
    order: 2;
  }

  .info {
    display: flex;
    width: 30%;
    flex-wrap: wrap;
    color: #1C3D73;
    flex-direction: column;
    height: 90%;
  }

  .logo {
    display: flex;
    width: 33%;
    justify-content: center;

    .span {
      :hover {
        color: blue;
        cursor: pointer;
      }
    }

    img {
      width: 50%;
      height: 190px;
    }
  }

  .donate {
    display: flex;
    width: 33%;
    justify-content: center;

    button {
      border-radius: 40%;
      width: 100px;
      height: 35px;
    }
  }
  @media(min-width: 1280px) and (max-width: 1440px){
    h2 {
      font-size: 38px;
      width: 1000px;
      text-align: center;
      margin-top: 260px;
    }
  }
  @media(min-width: 800px) and (max-width: 1200px){
    h2 {
      font-size: xx-large;
    }
  }
`

