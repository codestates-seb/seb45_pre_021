import { styled } from 'styled-components';

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
      <QuickLinkLayout>
        <h3>The Overflow Blog</h3>
        <div>
          <p>Why everyone should be an AppSec specialist (Ep. 598)</p>
          <p>Want better answers from your data? Ask better questions</p>
        </div>
        <h3>Featured on Meta</h3>
        <div>
          <p>Moderation strike: results of negotations</p>
          <p>
            Our Design Vision for Stack Overflow and the Stack Exchange network
          </p>
          <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
          <p>Preview of Search and Question-Asking Powered by GenAI</p>
          <p>Collections: A New Feature for Collectives on Stack Overflow</p>
        </div>
        <h3>Hot Meta Posts</h3>
        <div>
          <p>
            What is the edit policy today for questions about obsolete
            functionality?
          </p>
        </div>
      </QuickLinkLayout>
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

const QuickLinkLayout = styled.article`
  display: flex;
  flex-direction: column;

  width: 300px;

  background-color: #fdf7e2;

  h3 {
    /* background-color: #fff; */
    background-color: #fbf3b5;
    height: 40px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: 10px;
    color: 1px solid rgba(0, 0, 0, 0.8);
  }
`;
