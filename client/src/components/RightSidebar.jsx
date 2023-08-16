import { styled } from 'styled-components';

const RightSidebar = () => {
  return (
    <RightSide>
      <OverflowContainer>
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
      </OverflowContainer>
      <TabBox>
        <button>Custom Filters</button>
        <FilterInfo>
          <span>Create a custom filter</span>
        </FilterInfo>
      </TabBox>
      <WatchTagBox>
        <button>Watched Tags</button>
        <FilterInfo>
          <span>Watch tags to curate your list of questions.</span>
          <button>Watch a tag</button>
        </FilterInfo>
      </WatchTagBox>
      <TabBox>
        <button>Ignored Tags </button>
        <FilterInfo>
          <span>Add an ignored tab </span>
        </FilterInfo>
      </TabBox>
    </RightSide>
  );
};

export default RightSidebar;

const RightSide = styled.section`
  display: flex;
  flex-direction: column;
`;

const OverflowContainer = styled.article`
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
    font-size: 14px;
    color: #525960;

    display: flex;
    align-items: center;
    padding: 10px;
    /* color: 1px solid rgba(0, 0, 0, 0.8); */
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

const TabBox = styled.article`
  width: 300px;
  height: 95px;
  margin: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  button {
    height: 45px;
    width: 100%;
    text-align: left;
    font-size: 14px;
    padding: 16px;
  }
`;

const FilterInfo = styled.div`
  height: 50px;
  color: #0074cc;
  padding: 16px;
  font-size: 13px;
`;

const WatchTagBox = styled.div`
  width: 300px;
  height: 227px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  button {
    height: 45px;
    width: 100%;
    text-align: left;
    font-size: 14px;
    padding: 16px;
  }
`;
