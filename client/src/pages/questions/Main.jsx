import { styled } from 'styled-components';
import RightSidebar from '../../components/RightSidebar.jsx';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import axios from '../../utils/axios.js';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

const Main = () => {
  const useMockData = false;
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState(0);
  const apiURL = [
    'questions?page=1&size=10',
    'questions/progress?page=1&size=10',
    'questions/complete?page=1&size=10',
  ];

  useEffect(() => {
    (async () => {
      try {
        let data;
        if (useMockData) {
          const res = await fetch('/data/allQuestions.json');
          data = await res.json();
          console.log(data);
        } else {
          const res = await axios.get(apiURL[filter]);
          data = await res.data;
          console.log(data);
        }

        setPost(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [filter]);

  return (
    <QuestionPage>
      <Sidebar />
      <ContentContainer>
        <QuestionContainer>
          <Header>
            <p>All Questions</p>
            <Link to="/questions/post">
              <Button>Ask Question</Button>
            </Link>
          </Header>
          <SubHeader>
            <p>{post.length} Questions</p>
            <Buttons>
              {['View All', 'Unanswered', 'Answered'].map((content, i) => {
                return (
                  <button
                    key={i}
                    className={filter === i ? 'disabled' : ''}
                    onClick={() => setFilter(i)}
                  >
                    {content}
                  </button>
                );
              })}
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
                    <Link to={`/questions/detail/${questionId}`}>
                      <h2>{title}</h2>
                    </Link>
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
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #babfc4;

  button {
    padding: 10px;
    font-size: 0.8rem;
    border-right: 1px solid #babfc4;
    background-color: #fff;
    &:hover {
      cursor: pointer;
      background-color: #f8f9f9;
    }
    &:last-child {
      border-right: none;
    }
    &.disabled {
      background-color: #e3e6e8;
      pointer-events: none;
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
  h2 {
    color: #0074cc;
    font-size: 1.2rem;
    font-weight: 400;
    &:hover {
      color: #0a95ff;
      cursor: pointer;
    }
  }
  p {
    text-align: right;
    font-size: 0.8rem;
    color: #525960;
    span {
      color: #000000;
    }
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
