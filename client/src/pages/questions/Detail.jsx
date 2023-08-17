import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Sidebar from '../../components/Sidebar.jsx';
import TitleSection from '../../components/detail/TitleSection.jsx';
import QuestionSection from '../../components/detail/QuestionSection.jsx';
import AnswerSection from '../../components/detail/AnswerSection.jsx';
import Editor from '../../components/Editor.jsx';
import Button from '../../components/Button.jsx';

const Detail = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

export default Detail;
