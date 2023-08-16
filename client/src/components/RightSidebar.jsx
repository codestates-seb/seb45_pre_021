import { styled } from 'styled-components';

const RightSidebar = () => {
  return (
    <RightAside>
      <h3>The Overflow Blog</h3>
      <QuickLinkBox>
        <p>Why everyone should be an AppSec specialist (Ep. 598)</p>
        <p>Want better answers from your data? Ask better questions</p>
      </QuickLinkBox>
      <h3>Featured on Meta</h3>
      <QuickLinkBox>
        <p>Moderation strike: results of negotations</p>
        <p>
          Our Design Vision for Stack Overflow and the Stack Exchange network
        </p>
        <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        <p>Preview of Search and Question-Asking Powered by GenAI</p>
        <p>Collections: A New Feature for Collectives on Stack Overflow</p>
      </QuickLinkBox>
      <h3>Hot Meta Posts</h3>
      <QuickLinkBox>
        <p>
          What is the edit policy today for questions about obsolete
          functionality?
        </p>
      </QuickLinkBox>
    </RightAside>
  );
};

export default RightSidebar;

const RightAside = styled.article`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 530px;
  margin-top: 56px;
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

const QuickLinkBox = styled.div`
  padding: 14px;

  p {
    font-size: 14px;
    margin-bottom: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;
