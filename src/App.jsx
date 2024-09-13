import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled component for centering the content
const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #333;
  font-family: 'SUIT', sans-serif;
`;

const App = () => {
  const [newsTitle, setNewsTitle] = useState('');

  useEffect(()=>{
    setInterval(() => {
      // Fetch news title from API
      axios.get('https://booth.hasclassmatching.com/get_news')
        .then(response => {
          setNewsTitle(response.data); // Assuming the API returns { "title": "some title" }
        })
        .catch(error => {
          console.error('Error fetching news:', error);
          setNewsTitle('아직 아무런 뉴스가 존재하지 않습니다.');
        });
    },1000)
  }, []);

  return (
    <NewsContainer>
      <Title>{newsTitle}</Title>
    </NewsContainer>
  );
};

export default App;
