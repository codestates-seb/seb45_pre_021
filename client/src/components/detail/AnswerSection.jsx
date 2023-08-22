import { styled } from 'styled-components';
import ProfileCard from './ProfileCard.jsx';
import propTypes from 'prop-types';
import Viewer from '../Viewer.jsx';

const AnswerSection = ({
  answer,
  isSelected = false,
  handleDelete,
  userId,
  userNickname,
}) => {
  const { createDate, content, writerNickName } = answer;

  const isCurrentUserAuthor = writerNickName === userNickname;

  console.log(writerNickName);

  return (
    <AnswerContainer>
      {isSelected && <AcceptedTag>Accepted Answer</AcceptedTag>}
      <Viewer content={content} />
      <BottomBox>
        <ProfileCard author={writerNickName} createdAt={createDate} />
      </BottomBox>
      {isCurrentUserAuthor && <UserSettingButton>Edit</UserSettingButton>}
      {isCurrentUserAuthor && (
        <UserSettingButton onClick={() => handleDelete(userId)}>
          Delete
        </UserSettingButton>
      )}
    </AnswerContainer>
  );
};

AnswerSection.propTypes = {
  answer: propTypes.shape({
    createDate: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    selected: propTypes.bool.isRequired,
    writerNickName: propTypes.string.isRequired,
    answerId: propTypes.number.isRequired,
  }).isRequired,
  isSelected: propTypes.bool,
  handleDelete: propTypes.func.isRequired,
  userId: propTypes.number.isRequired,
  userNickname: propTypes.string.isRequired,
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
const UserSettingButton = styled.button`
  padding: 0.5rem;
  font-size: 0.8rem;
  color: #6a737c;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export default AnswerSection;
