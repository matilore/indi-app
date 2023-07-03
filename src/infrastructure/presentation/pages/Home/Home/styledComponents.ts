import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PodcastList = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const PodcastCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  margin-top: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const PodcastImageWrapper = styled.div`
  width: 224px;
  height: 50px;
  display: flex;
  justify-content: center;
`;

export const PodcastDetailsWrapper = styled.div`
  padding: 0 8px;
  box-sizing: border-box;
  width: 224px;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PodcastImage = styled.img`
  position: relative;
  top: -42px;
  border-radius: 50%;
  width: 88px;
  height: 88px;
  border: 1px solid black;
`;