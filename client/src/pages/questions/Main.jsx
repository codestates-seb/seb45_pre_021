import { styled } from 'styled-components';
import RightSidebar from '../../components/RightSidebar.jsx';
import { useState } from 'react';

const Main = () => {
  const [post, setPost] = useState([
    {
      id: 1,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro...",
      tags: 'react',
      name: 'Garrett Graham',
      time: '2 min ago',
      answered: true,
    },
    {
      id: 2,
      title: 'MassTransit.PayloadNotFoundException',
      desc: "This is my first Node.js project, so I'm still new to utilizing async/await operations. My server.js file: if (process.env.NODE_ENV !== 'production') { require('dotenv').config() } const { ...",
      tags: 'react',
      name: 'Min Graham',
      time: '2 min ago',
      answered: false,
    },
    {
      id: 3,
      title: "Node.js exported await function doesn't return value",
      desc: 'when i try to consume a message, i get this error in rabbitmq management: MT-Fault-ExceptionType: MassTransit.PayloadNotFoundException MT-Fault-Message: The payload was not',
      tags: 'react',
      name: 'Garrett Graham',
      time: '2 min ago',
      answered: false,
    },
    {
      id: 4,
      title: 'HOW TO: convert decimals to integers in numpy',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett ',
      time: '2 min ago',
      answered: true,
    },
    {
      id: 5,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett lee',
      time: '2 min ago',
      answered: true,
    },
    {
      id: 6,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett lee',
      time: '2 min ago',
      answered: false,
    },
    {
      id: 7,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett lee',
      time: '2 min ago',
      answered: false,
    },
  ]);
  const [filter, setFilter] = useState('all');

  const handleNull = () => {
    setPost(null);
  };
  console.log(handleNull);

  return (
    <QuestionPage>
      {/* <RightSidebar /> */}

      <QuestionContainer>
        <Header>
          <p>All Questions</p>
          <Button>Ask Question</Button>
        </Header>
        <SubHeader>
          <p>{post.length} Questions</p>
          <Buttons>
            <button onClick={() => setFilter('answered')}>Answered</button>
            <button onClick={() => setFilter('unanswered')}>Unanswered</button>
            <button onClick={() => setFilter('all')}>View All</button>
          </Buttons>
        </SubHeader>
        <div>
          {post
            .filter((question) => {
              if (filter === 'answered') {
                return question.answered;
              }
              if (filter === 'unanswered') {
                return !question.answered;
              }
              return true; // For 'all' filter, show all questions
            })
            .map((question) => {
              return (
                <QuestionBox key={question.id}>
                  <QuestionStats>
                    <span>0 vote</span>
                    <span>0 answers</span>
                    <span>0 views</span>
                  </QuestionStats>
                  <QuestionInfo>
                    <h2>{question.title}</h2>
                    <p>{question.desc}</p>
                    <UserInfo>
                      <span>{question.name}</span>
                    </UserInfo>
                  </QuestionInfo>
                </QuestionBox>
              );
            })}
        </div>
      </QuestionContainer>
      <RightSidebar />
    </QuestionPage>
  );
};
export default Main;

const QuestionPage = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* width: 90%; */
  /* width: 100vw; */
  padding: 16px;

  margin: 0 auto;
  margin-top: 56px;
`;

const QuestionContainer = styled.article`
  width: 55vw;
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 15px 0;
  padding: 0 10px; /* background-color: lightcyan; */ /* padding: 20px; */
  p {
    font-size: 28px;
  }
`;

const SubHeader = styled.div`
  height: 47px;
  /* padding: 10px; */
  margin: 15px 0;
  padding: 0 10px;
  /* background-color: lightgray; */

  display: flex;
  align-items: center;
  justify-content: space-between;
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
  height: 150px;
  padding: 10px 20px;
  /* background-color: lightblue; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const QuestionStats = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 20px; */
  justify-content: space-evenly;
  width: 10vw;
  height: 80%;
`;

const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  h2 {
    font-size: 18px;
    margin: 5px 0;
    color: #0074cc;
    font-weight: 400;
  }
  p {
    margin: 8px 0;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
