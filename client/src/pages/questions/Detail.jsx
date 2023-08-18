import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Sidebar from '../../components/Sidebar.jsx';
import TitleSection from '../../components/detail/TitleSection.jsx';
import QuestionSection from '../../components/detail/QuestionSection.jsx';
import AnswerSection from '../../components/detail/AnswerSection.jsx';
import Editor from '../../components/Editor.jsx';
import Button from '../../components/Button.jsx';
import widgetImg1 from '../..//imgs/widget_pencil.png';
import widgetImg2 from '../..//imgs/widget_speechbubble.png';
import widgetImg3 from '../..//imgs/widget_sof.png';

const Detail = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (id === 'test') {
      // test data
      (async () => {
        const res = await fetch('/data/questionDetail.json');
        const data = await res.json();
        setQuestion(data);
        if (data.answers && data.answers.length > 0) {
          setSelected(data.answers.find((answer) => answer.selected));
          setAnswers(data.answers.filter((answer) => !answer.selected));
        }
        setIsLoading(false);
      })();
    }

    (async () => {})();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    <PageWrapper>
      <PageContainer>
        <Sidebar />
        <ContentContainer>
          <TitleSection question={question} />
          <MainContainer>
            <PostsContainer>
              <QuestionSection question={question} />
              {answers.length + (selected ? 1 : 0) === 1 && <h2> 1 Answer</h2>}
              {answers.length + (selected ? 1 : 0) > 1 && (
                <h2> {answers.length + (selected ? 1 : 0)} Answers</h2>
              )}
              {selected && (
                <AnswerSection answer={selected} isSelected={true} />
              )}
              {answers.length > 0 &&
                answers.map((answer, i) => (
                  <AnswerSection answer={answer} key={i} />
                ))}
              <h2>Your Answer</h2>
              <Editor />
              <br />
              <Button>Post Your Answer</Button>
            </PostsContainer>
            <Widget>
              <div className="title-box">The Overflow Blog</div>
              <ul className="list-box">
                <li>
                  <img src={widgetImg1} alt="icon" />
                  <span>
                    Want better answers from your data? Ask better questions
                  </span>
                </li>
                <li>
                  <img src={widgetImg1} alt="icon" />
                  <span>
                    Making event-driven development predictable with Discover
                    <br />
                    <i>sponsored post</i>
                  </span>
                </li>
              </ul>
              <div className="title-box">Featured on Meta</div>
              <ul className="list-box">
                <li>
                  <img src={widgetImg2} alt="icon" />
                  <span>Moderation strike: Results of negotiations </span>
                </li>
                <li>
                  <img src={widgetImg2} alt="icon" />
                  <span>
                    Our Design Vision for Stack Overflow and the Stack Exchange
                    network
                  </span>
                </li>
                <li>
                  <img src={widgetImg3} alt="icon" />
                  <span>
                    Temporary policy: Generative AI (e.g., ChatGPT) is banned
                  </span>
                </li>
                <li>
                  <img src={widgetImg3} alt="icon" />
                  <span>
                    Collections: A New Feature for Collectives on Stack Overflow
                  </span>
                </li>
                <li>
                  <img src={widgetImg3} alt="icon" />
                  <span>
                    Preview of Search and Question-Asking Powered by GenAI
                  </span>
                </li>
                <li>
                  <img src={widgetImg3} alt="icon" />
                  <span>
                    Call for volunteer reviewers for an updated search
                    experience: OverflowAI Search
                  </span>
                </li>
              </ul>
            </Widget>
          </MainContainer>
        </ContentContainer>
      </PageContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  padding-top: 54px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const PageContainer = styled.div`
  width: 1264px;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  width: 1100px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0;
  }
`;

const Widget = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid #f1e5bc;
  border-radius: 5px;
  .title-box {
    font-size: 0.8rem;
    font-weight: 600;
    background-color: #fbf3d5;
    padding: 12px 15px;
    border-top: 1px solid #f1e5bc;
    border-bottom: 1px solid #f1e5bc;
  }
  .list-box {
    background-color: #fdf7e2;
    padding: 4px 15px;
    li {
      list-style: none;
      margin: 12px 0;
      font-size: 0.8rem;
      display: flex;
      flex-direction: row;
      gap: 0.3rem;
      img {
        width: 19px;
        height: 19px;
      }
      i {
        color: #6a737c;
      }
    }
  }
`;

export default Detail;
