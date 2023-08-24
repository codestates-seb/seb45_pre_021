import { styled } from 'styled-components';
import widgetImg1 from '../imgs/widget_pencil.png';
import widgetImg2 from '../imgs/widget_speechbubble.png';
import widgetImg3 from '../imgs/widget_sof.png';

const RightSidebar = () => {
  return (
    <RightSide>
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
            <span>Preview of Search and Question-Asking Powered by GenAI</span>
          </li>
          <li>
            <img src={widgetImg3} alt="icon" />
            <span>
              Call for volunteer reviewers for an updated search experience:
              OverflowAI Search
            </span>
          </li>
        </ul>
      </Widget>
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
