import propTypes from 'prop-types';
import { styled } from 'styled-components';
import profileImage from '../../imgs/profile_image.jpg';

const ProfileCard = ({ author, createdAt, isQuestioner = false }) => {
  function formatDate(inputDate) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${month} ${day}, ${year}`;
    const formattedTime = `${hours}:${minutes}`;
    return [formattedDate, formattedTime];
  }

  const [formattedDate, formattedTime] = formatDate(createdAt);

  return (
    <CardContainer $isQuestioner={isQuestioner}>
      <p className="created-date">
        asked <span>{formattedDate}</span> at <span>{formattedTime}</span>
      </p>
      <div>
        <ProfileImage />
        <span>{author}</span>
      </div>
    </CardContainer>
  );
};

ProfileCard.propTypes = {
  author: propTypes.string.isRequired,
  isQuestioner: propTypes.bool,
  createdAt: propTypes.string.isRequired,
};

const CardContainer = styled.div`
  width: 200px;
  height: 68px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${({ $isQuestioner }) =>
    $isQuestioner ? '#d9eaf7' : '#fff'};
  gap: 0.3rem;
  p {
    color: #6a737c;
    font-size: 0.7rem;
    span {
      font-size: 0.75rem;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    span {
      color: #0a95ff;
    }
  }
`;

const ProfileImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-image: url(${profileImage});
  background-size: cover;
`;

export default ProfileCard;
