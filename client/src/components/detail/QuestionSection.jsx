import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Viewer from '../Viewer.jsx';
import ProfileCard from './ProfileCard.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../App.js';

const QuestionSection = ({ question }) => {
  const { content, writerNickName, writerImageId, createdAt, questionId } =
    question;
  const { userData } = useContext(LoginContext);
  return (
    <QuestionContainer>
      <Viewer content={content} />
      <BottomBox>
        {writerNickName === userData?.nickName ? (
          <Link to={`/questions/edit/${questionId}`}>Edit</Link>
        ) : (
          <span></span>
        )}

        <ProfileCard
          author={writerNickName}
          createdAt={createdAt}
          imageId={writerImageId}
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
    writerImageId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
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
