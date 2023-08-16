import { styled } from 'styled-components';
import RightSidebar from '../../components/RightSidebar.jsx';

const Main = () => {
  const questions = [
    {
      id: 1,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro...",
      tags: 'react',
      name: 'Garrett Graham',
      time: '2 min ago',
    },
    {
      id: 2,
      title: 'MassTransit.PayloadNotFoundException',
      desc: "This is my first Node.js project, so I'm still new to utilizing async/await operations. My server.js file: if (process.env.NODE_ENV !== 'production') { require('dotenv').config() } const { ...",
      tags: 'react',
      name: 'Min Graham',
      time: '2 min ago',
    },
    {
      id: 3,
      title: "Node.js exported await function doesn't return value",
      desc: 'when i try to consume a message, i get this error in rabbitmq management: MT-Fault-ExceptionType: MassTransit.PayloadNotFoundException MT-Fault-Message: The payload was not',
      tags: 'react',
      name: 'Garrett Graham',
      time: '2 min ago',
    },
    {
      id: 4,
      title: 'HOW TO: convert decimals to integers in numpy',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett ',
      time: '2 min ago',
    },
    {
      id: 5,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett lee',
      time: '2 min ago',
    },
    {
      id: 6,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett lee',
      time: '2 min ago',
    },
    {
      id: 7,
      title: 'How to use pam authentication in go program',
      desc: "I want to use go to implement a library for my other programs to authenticate and log in. I've learned how go exports and calls .so libraries. But this method is more cumbersome. Does go pro",
      tags: 'react',
      name: 'Garrett lee',
      time: '2 min ago',
    },
  ];
  return (
    <QuestionPage>
      {/* <RightSidebar /> */}

      <QuestionContainer>
        <Header>
          <p>All Questions</p>
          <button>Ask Question</button>
        </Header>
        <SubHeader>
          <p>0 Questions</p>
          <Buttons>
            <button>Answered</button>
            <button>Unanswered</button>
          </Buttons>
        </SubHeader>
        <div>
          {questions.map((question) => {
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

  //   return (
  //     <ContainerTest>
  //       <QuestionsLayout>
  //         <QuestionsContainer>
  //           <QuestionsHeader>
  //             <h2>All questions</h2>
  //             <button>Ask Question</button>
  //           </QuestionsHeader>
  //           <FilterLayout>
  //             <span>0 questions</span>
  //             <div>
  //               <button>Newest</button>
  //               <button>Unanswered</button>
  //             </div>
  //           </FilterLayout>
  //           {questions.map((box) => {
  //             return (
  //               <QuestionBox key={box.id}>
  //                 <QuestionStats>
  //                   <StatInfo>
  //                     <span>0 votes</span>
  //                   </StatInfo>
  //                   <StatInfo>
  //                     <span>0 answers</span>
  //                   </StatInfo>
  //                   <StatInfo>
  //                     <span>0 views</span>
  //                   </StatInfo>
  //                 </QuestionStats>
  //                 <QuestionContent>
  //                   <h3>{box.title}</h3>
  //                   <p>{box.desc}</p>
  //                   <ContentInfo>
  //                     <button>{box.tags}</button>
  //                     <div>
  //                       <span>{box.name}</span>
  //                       <span>asked 29 secs ago</span>
  //                     </div>
  //                   </ContentInfo>
  //                 </QuestionContent>
  //               </QuestionBox>
  //             );
  //           })}
  //         </QuestionsContainer>
  //       </QuestionsLayout>
  //       <RightSidebar />
  //     </ContainerTest>
  //   );
  // };
};
export default Main;

const QuestionPage = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 90%;
  padding: 16px;

  margin: 0 auto;
  margin-top: 56px;
`;

const QuestionContainer = styled.article`
  width: 50vw;
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
// const ContainerTest = styled.section
//   display: flex;
//   /* align-items: center; */
//   justify-content: center;
//   margin-top: 56px;
// `;

// const QuestionsLayout = styled.article`
//   height: 100vh;

//   /* margin: 56px auto 0 auto; */
//   /* width: 100vw; */
//   /* background-color: beige; */

//   display: flex;
//   justify-content: center;
// `;

// const QuestionsContainer = styled.div`
//   /* width: 596px; */
//   width: 40vw;

//   display: flex;
//   flex-direction: column;

//   padding: 10px;
// `;

// const QuestionsHeader = styled.div`
//   width: 100%;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const FilterLayout = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 10px;

//   button {
//     padding: 10px;
//     border: 0.5px solid rgba(0, 0, 0, 0.2);
//     border-radius: 4px;
//   }
// `;

// const QuestionBox = styled.div`
//   height: 150px;
//   /* border-top: 0.5px solid gray; */
//   border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
//   /* width: 50vw; */
//   margin: 0 auto;
//   display: flex;
//   padding: 10px;
//   align-items: center;
//   /* justify-content: space-between; */
// `;

// const QuestionStats = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 150px;

//   font-size: 14px;

//   /* font-size: 14px; */
// `;

// const StatInfo = styled.div`
//   font-size: 14px;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   span {
//     margin: 5px 0;
//   }
// `;

// const QuestionContent = styled.div`
//   h3 {
//     color: #0074cc;
//     width: 465px;
//   }

//   p {
//     font-size: 13px;
//     margin: 5px 0;
//   }

//   display: flex;
//   flex-direction: column;
// `;

// const ContentInfo = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 13px;
// `;
