import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Viewer from '../Viewer.jsx';
import ProfileCard from './ProfileCard.jsx';

const QuestionSection = ({ question }) => {
  const { content, writerNickName, createdAt } = question;
  return (
    <QuestionContainer>
      <Viewer content={content} />
      <BottomBox>
        <a href="/questions/edit/test">Edit</a>
        <ProfileCard
          author={writerNickName}
          createdAt={createdAt}
          isQuestioner={true}
        />
      </BottomBox>
    </QuestionContainer>
  );
};

QuestionSection.propTypes = {
  question: PropTypes.shape({
    content: PropTypes.string.isRequired,
    writerNickName: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

const QuestionContainer = styled.section``;

const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    padding: 0.5rem;
    font-size: 0.8rem;
    color: #6a737c;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
export default QuestionSection;
