import styled from 'styled-components'
import img from './background.jpeg';

export const SmallHeaderBox = styled.div`
  display: flex;
  background-color: white;
  height: 100px;
  
  .welcome {
    background-color: white;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    img {
      width: 150px;
    }
  }
  
  .socials {
    background-color: red;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`


export const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  background-image: url(${img});
  background-color: #61dafb;
  justify-content: center;
  h2 {
    color: white;
    font-size: xxx-large;
    align-self: center;
    text-align: center;
    
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
`
export const LeftTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-right: 100px solid transparent;
  
`

export const RightTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-left: 100px solid transparent;
  
  
  
`
