import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  align-items: center;
  
  .contact {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
  }
  .contact:not(:last-child) {
    border-right: 2px solid #231b50;
  }

`