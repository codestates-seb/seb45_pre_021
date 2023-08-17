import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button.jsx';
import { format } from 'timeago.js';

const TitleSection = ({ question }) => {
  const { title, createdAt, modifiedAt } = question;
  return (
    <section>
      <TitleBox>
        <div>
          <h1>{title}</h1>
          <Button>Ask Question</Button>
        </div>
      </TitleBox>
      <SubtitleBox>
        <p>
          <span>Asked</span> {format(createdAt, 'en_US')}
        </p>
        <p>
          <span>Modified</span> {format(modifiedAt, 'en_US')}
        </p>
      </SubtitleBox>
    </section>
  );
};

TitleSection.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    modifiedAt: PropTypes.string.isRequired,
  }),
};

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-weight: 500;
    }
  }
`;

const SubtitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e1e4e8;
  p {
    font-size: 0.8rem;
    span {
      color: #6a737c;
    }
  }
`;

export default TitleSection;
