import { styled } from 'styled-components';

const Main = () => {
  return (
    <QuestionsLayout>
      <div>
        <div>
          <p>Top questions</p>
        </div>
        <div>
          <button>Ask Question</button>
          <span>Newest</span>
          <span>Unanswered</span>
        </div>
      </div>
      <QuestionBox>
        <div>0 answers</div>
        <div>Title</div>
        <div>Title Info</div>
      </QuestionBox>
    </QuestionsLayout>
  );
};

export default Main;

const QuestionsLayout = styled.section`
  margin-top: 56px;
  height: 100vh;
  width: 80%;
`;

const QuestionBox = styled.div`
  width: 80%;
`;
