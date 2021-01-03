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
    width: 500px;
    height: 35px;
    border-radius: 5px;
  }
  input:focus {
    outline: none;
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
  margin-top: 20px;


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
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3, h4 {
    margin: 12px;
    background: -webkit-linear-gradient(#eee, #6B7AD6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  

`