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
    height: 750px;
  }
`
export const Wrapper = styled.div`
  max-width: 1080px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0 50px 0;

  display: flex;
  justify-content: space-between;
  gap: 20px;

  z-index: 2;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 50px 8px;
  }
`
export const First = styled.div`
  flex: 5;
  height: 300px;

  z-index: 2;
`
export const PreviewBox = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
	box-shadow: rgba(240, 46, 170, 0.2) -5px 5px;

  &:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
` 
export const Second = styled.div`
  flex: 7;

  z-index: 2;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px 16px;
`
export const Title = styled.h1`
  color: #FFF;
  margin-bottom: 4px;
`
export const Subtitle = styled.h3`
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`
export const Authors = styled.span`
  color: #F5F5F5;
  font-size: 14px;
`
export const ContentBox = styled.div`
  padding: 8px;
  margin-top: 32px;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`
export const Classes = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const Class = styled.div`
  width: 100%;
  background-color: #F1F1F1;
  padding: 8px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ClassHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const CTitle = styled.h2`
  color: #000;
  font-size: 14px;
`
export const CSubtitle = styled.h3`
  color: #13131A;
  font-size: 12px;
  font-weight: 500;
`
export const GTitle = styled.h1`
  color: #000;
  font-size: 18px;
`
export const MoreButton = styled.button`
  background-color: #120530;
  padding: 8px 16px;
  width: 50%;
  border-radius: 8px;
  color: #FFF;
  font-size: 12px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  outline: none;
  border: 0;
  -webkit-tap-highlight-color: transparent;
`