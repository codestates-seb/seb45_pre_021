import { styled } from 'styled-components';
import ProfileCard from './ProfileCard.jsx';
import propTypes from 'prop-types';
import Viewer from '../Viewer.jsx';

const AnswerSection = ({ answer, isSelected = false }) => {
  const { createDate, content, writerNickName } = answer;
  return (
    <AnswerContainer>
      {isSelected && <AcceptedTag>Accepted Answer</AcceptedTag>}
      <Viewer content={content} />
      <BottomBox>
        <ProfileCard author={writerNickName} createdAt={createDate} />
      </BottomBox>
    </AnswerContainer>
  );
};

AnswerSection.propTypes = {
  answer: propTypes.shape({
    createDate: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    selected: propTypes.bool.isRequired,
    writerNickName: propTypes.string.isRequired,
  }).isRequired,
  isSelected: propTypes.bool,
};

const AcceptedTag = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #2f6f44;
  color: #ffffff;
  font-size: 0.8rem;
  border-radius: 5px;
`;
const AnswerContainer = styled.section`
  padding-top: 1rem;
  border-bottom: 1px solid #e1e4e8;
`;
const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  a {
    padding: 0.5rem;
    font-size: 0.8rem;
    color: #6a737c;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export default AnswerSection;
