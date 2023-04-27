import styled from "styled-components";

export const Section = styled.section`
  background-color: #F5F5F5;
  min-height: 84.1vh;
`
export const Fixed = styled.div`
  position: absolute;
  top: 60px;
  height: 275px;
  width: 100%;
  background-color: #240046;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 25vh;
  }
`
export const Wrapper = styled.div`
  max-width: 1080px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0 50px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  z-index: 2;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 50px 8px;
  }
`
export const VideoBox = styled.div`
  z-index: 2;
  flex: 1;
  border-radius: 8px;
  background-color: #FFF;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`
export const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`
export const Title = styled.h1`
  color: #13131A;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const Subtitle = styled.h3`
  color: #33333A;
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Description = styled.p`
  font-size: 14px;
  color: #33333A;
  margin-top: 8px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 55vw;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  align-self: center;
  iframe {
    border: none;
  }
`
export const StatusBox = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const CourseTitle = styled.span`
  font-size: 16px;
  color: #13131A;
  font-weight: 500;
`
export const CourseClass = styled.span`
  font-size: 14px;
  color: #22222A;
`


export const Cards = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 24px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Card = styled.li`
  background-color: #F6F6F6;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`
export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 150px;

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

  padding: 8px;
`
export const DText = styled.p`
  background: rgba(36, 0, 70, 0.1);
  color: #240046;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 15px;
  border-radius: 4px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px
`