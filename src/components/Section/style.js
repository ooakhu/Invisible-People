import styled from "styled-components";


export const SecondHeader = styled.div`
  width: 100%;
  height: 350px;
  background-color: white;
  text-align: left;
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  
  p {
    font-size: xx-large;
    line-height: 40px;
  }

  @media(min-width: 1280px) and (max-width: 1440px){
    height: 420px;
  }
 
`

export const ThirdHeader = styled.div`
  width: 100%;
  height: 1200px;
  background-color: #E7EDFD;
  display: flex;
  flex-direction: column;
  align-items: center;
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@800&display=swap');
  font-family: 'Rubik', sans-serif;
  
  
`
export const PictureContainer = styled.div`
  width: 1220px;
  background-color: #FDF7E7;
  height: 57%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  justify-content: space-evenly;
  img {
    width: 400px;
    height: 280px;
    filter: brightness(80%);
  }

`
export const WhyUs = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 1220px;
    justify-content: flex-start;
    
`

export const Icon= styled.div`
    padding-left: 5px;
    padding-top: 2px;
    display: flex;

    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
`
export const Title = styled.div`
    padding-left: 7px;
    width: 100%;
    text-decoration: none;
    color: #291B50;
    height: 100%;
    
    strong {
      font-size: 26px;
      font-weight: bolder;

    }
    h4 {
        margin: 0;
    }
    p {
      font-size: 26px;
    }
    
  `
export const WhyBox = styled.div`
  display: flex;
`

export const After = styled.div`
  display: flex;
  height: 570px;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;

  h3 {
    width: 40%;
    text-align: center;
    margin-bottom: 50px;
  }
`

export const AfterBox = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-evenly;
`
export const AfterInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  margin: 5px;
  height: 350px;
  background-color: #E7EDFD;
  justify-content: center;
  
  p {
    text-align: center;
    line-height: 30px;
    width: 70%;
    @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap');
    font-family: 'Hind Madurai', sans-serif;
  }
  h3{
    width: 50%;
    margin: 0px;
  }
  img {
    width: 100px;
    height: 100px;
  }
  @media(min-width: 1280px) and (max-width: 1440px){

    p {
      line-height: 25px;
      width: 80%;
    }
    h3 {
      height: 75px;
    }
  }
  @media(min-width: 800px) and (max-width: 1200px){

    p {
      line-height: 25px;
    }
    h3 {
      height: 75px;
    }
  }

`
export const Apply = styled.div`
  background-color: #282c34;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const ApplicationProcess = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(90deg, rgba(169,36,140,0.6643032212885154) 30%, rgba(226,66,52,0.5158438375350141) 73%);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    margin-bottom: 10px;
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
    font-family: 'Rubik', sans-serif;
    color: black;
    font-size: 35px;
  }
  strong {
    font-size: 26px;
    font-weight: bolder;

  }
  p {
    font-size: 26px;
    line-height: 7px;
  }
  
  h2 {
    font-size: 25px;
    color: black;
  }
`

// export const Encouragement = styled.div`
//   width: 100%;
//   height: 500px;
//   background-color: cadetblue;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//
// `

// export const Eligibility = styled.div`
//   width: 100%;
//   height: 500px;
//   background-color: darksalmon;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//
// `

