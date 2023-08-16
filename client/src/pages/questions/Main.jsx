import { styled } from 'styled-components';
import RightSidebar from '../../components/RightSidebar.jsx';

const Main = () => {
  return (
    <QuestionsLayout>
      <div>
        <div>
          <QuestionsHeader>
            <p>All questions</p>
            <button>Ask Question</button>
          </QuestionsHeader>
          <FilterLayout>
            <span>0 questions</span>
            <div>
              <button>Newest</button>
              <button>Unanswered</button>
            </div>
          </FilterLayout>
        </div>
        <div>
          <div>
            <div>0 votes</div>
            <div>0 answers</div>
            <div>0 views</div>
          </div>
          <div>
            <p>Websites to show your code execution line after line</p>
            <p>
              I just want to understand the flow of code. If there is any
              website that makes you understand the code that you have written
              line by line than it would be helpful. Any website link that
              explains the...
            </p>
            <div>
              <button>javascript</button>
              <div>
                <span>Tabsum Khadka</span>
                <span>asked 29 secs ago</span>
              </div>
            </div>
          </div>
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
  /* width: 80%; */

  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const QuestionsHeader = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
