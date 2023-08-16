import { styled } from 'styled-components';
import RightSidebar from '../../components/RightSidebar.jsx';

const Main = () => {
  return (
    <QuestionsLayout>
      <div>
        <div>
          <div>
            <p>All questions</p>
            <button>Ask Question</button>
          </div>
          <div>
            <span>0 questions</span>
            <span>Newest</span>
            <span>Unanswered</span>
          </div>
        </div>
        <div>
          <div>0 answers</div>
          <div>Title</div>
          <div>Title Info</div>
        </div>
      </div>
      <RightSidebar />
    </QuestionsLayout>
  );
};

export default Main;

const QuestionsLayout = styled.section`
  height: 100vh;

  margin: 56px auto 0 auto;

  background-color: beige;
  width: 80%;

  display: flex;
  /* align-items: center; */
  justify-content: center;
`;
