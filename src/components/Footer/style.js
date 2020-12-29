import styled from 'styled-components'


export const Container = styled.div`
  background-color: #1e272c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@500&display=swap');
  font-family: 'Hind Madurai', sans-serif;
  
  button {
    margin-top: 30px;
  }
  
  input {
    width: 400px;
    height: 35px;
  }
  
  h3 {
    font-weight: bolder;
    font-size: 20px;
  }
`

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;


`

export const Socials = styled.div`
  background-color: #6B7AD6 ;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  border-radius: 25px;
  align-items: center;
  
  img {
    background-color: white;
  }
  
`


export const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  color: white;
  //background-color: mediumvioletred;

  
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  //background-color: #61dafb;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3, h4 {
    margin: 12px;
  }
  

`