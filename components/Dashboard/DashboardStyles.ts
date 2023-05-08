import styled from "styled-components";

export const Container = styled.section`
  background-color: #F5F5F5;
  min-height: 84.1vh;
`
export const HeadWrapper = styled.div`
  background-color: #240046;
  width: 100%;
  height: auto;
  padding: 32px 0 32px 0;

  display: flex;
`
export const Heading = styled.div`
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 16px 16px 16px;
`
export const Title = styled.h1`
  color: #FFF;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const Subtitle = styled.h3`
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 500;
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Wrapper = styled.div`
  max-width: 1080px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0 25px 0;

  display: flex;
`
export const Cards = styled.ul`
  list-style: none;
  width: 100%;
  padding: 8px;
  margin-top: 24px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Card = styled.li`
  background-color: #F6F6F6;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  overflow: hidden;
`
export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  border-radius: 20px 20px 0 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 180px;
  }
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
	padding: 16px;
  gap: 8px;
`
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px 8px;
`
export const DText = styled.p`
  background: rgba(36, 0, 70, 0.1);
  color: #240046;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 15px;
  border-radius: 4px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px
`
export const AText = styled.p`
  background: rgba(12, 179, 76, 0.3);
  color: #004619;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 15px;
  border-radius: 4px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px
`
export const RText = styled.p`
  background: rgba(179, 62, 12, 0.3);
  color: #b33e0c;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 15px;
  border-radius: 4px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px
`