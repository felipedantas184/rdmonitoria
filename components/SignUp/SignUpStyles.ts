import styled from "styled-components";

export const Container = styled.div`
  background-color: #120530;
  min-height: 100vh;
`
export const Wrapper = styled.div`
  max-width: 1080px;
  padding: 8px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  background-color: #F1F1F1;
  min-width: 30vw;
  padding: 32px;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`
export const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 20px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 4px;
`
export const FGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  gap: 4px;
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`
export const Input = styled.input`
  background-color: #E5E5E5;
  padding: 8px 12px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;

  font-family: "Poppins", sans-serif;
  font-size: 14px;
`