import { styled } from 'styled-components';
import RightSidebar from '../../components/RightSidebar.jsx';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import axios from '../../utils/axios.js';
import { format } from 'timeago.js';

const Main = () => {
  const useMockData = false;
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let data;
        if (useMockData) {
          const res = await fetch('/data/allQuestions.json');
          data = await res.json();
          console.log(data);
        }

        setPost(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <QuestionPage>
      <Sidebar />
      <ContentContainer>
        <QuestionContainer>
          <Header>
            <p>All Questions</p>
            <Button>Ask Question</Button>
          </Header>
          <SubHeader>
            <p>{post.length} Questions</p>
            <Buttons>
              <button>Answered</button>
              <button>Unanswered</button>
              <button>View All</button>
            </Buttons>
          </SubHeader>
          <div>
            {post.map((question) => {
              const {
                questionId,
                title,
                // status,
                writerNickName,
                answerCount,
                createdAt,
              } = question;
              return (
                <QuestionBox key={questionId}>
                  <QuestionStats>
                    <span>
                      {answerCount === 1
                        ? '1 answer'
                        : `${answerCount} answers`}
                    </span>
                  </QuestionStats>
                  <QuestionInfo>
                    <h2>{title}</h2>
                    <p>
                      <span>{writerNickName}</span> asked{' '}
                      {format(createdAt, 'en_US')}
                    </p>
                  </QuestionInfo>
                </QuestionBox>
              );
            })}
          </div>
        </QuestionContainer>
        <RightSidebar />
      </ContentContainer>
    </QuestionPage>
  );
};
export default Main;

const QuestionPage = styled.section`
  display: flex;
  justify-content: center;
  width: 1264px;
  margin: 0 auto;
  margin-top: 56px;
`;

const QuestionContainer = styled.article`
  width: 727px;
`;

const ContentContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  gap: 1.5rem;
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  p {
    font-size: 28px;
    margin-left: 1.5rem;
  }
  margin-bottom: 0.5rem;
`;

const SubHeader = styled.div`
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-left: 1.5rem;
  }
  margin-bottom: 0.5rem;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const QuestionBox = styled.div`
  height: 106px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  gap: 1rem;
`;

const QuestionStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 108px;
  text-align: right;
  color: #6a737c;
  font-size: 0.8rem;
`;

const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 595px;
  height: 70px;
  color: #0074cc;
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    &:hover {
      filter: brightness(1.2);
      cursor: pointer;
    }
  }
  p {
    text-align: right;
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  width: fit-content;
  height: 40px;
  padding: 10px;
  background-color: #0a95ff;
  color: #fff;
  border: 1px solid none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0074cc;
  }
  &.disabled {
    background-color: #84caff;
    pointer-events: none;
  }
`;
