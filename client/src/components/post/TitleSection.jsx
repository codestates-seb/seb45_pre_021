import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import cardImg from '../../imgs/post_card_icon.png';
import { NextButton } from './NextButton.jsx';
import { Card } from './Card.jsx';

const TitleSection = ({
  title,
  setTitle,
  step,
  setStep,
  content,
  isPassed,
  setIsPassed,
}) => {
  return (
    <TitleContainer $isLong={step === 1 && content.length === 0 && !isPassed}>
      <div
        className="title-box"
        onFocus={() => {
          setStep(1);
        }}
      >
        <span className="main">Title</span>
        <span className="sub">
          Be specific and imagine you&apos;re asking a question to another
          person.
        </span>
        <input
          id="title"
          type="text"
          placeholder="e.g. is there an R function for finding the index of an element in a vector?"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {step === 1 && !isPassed && (
          <NextButton
            className={title.length === 0 ? 'disabled' : ''}
            onClick={() => {
              setStep(2);
              setIsPassed(true);
            }}
          >
            Next
          </NextButton>
        )}
      </div>
      {step === 1 && (
        <Card>
          <div className="card-title">Writing a good title</div>
          <div className="card-content">
            <img src={cardImg} alt="" />
            <p>
              Your title should summarize the problem.
              <br />
              <br />
              You might find that you have a better idea of your title after
              writing out the rest of the question.
            </p>
          </div>
        </Card>
      )}
    </TitleContainer>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  isPassed: PropTypes.bool.isRequired,
  setIsPassed: PropTypes.func.isRequired,
};

const TitleContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: ${(props) => (props.$isLong ? '170px' : '124px')};
  .title-box {
    width: 850px;
    padding: 24px;
    background-color: #ffffff;
    border: 1px solid #e3e6e8;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .main {
      font-weight: 600;
    }
    .sub {
      font-size: 0.8rem;
      margin-bottom: 0.3rem;
    }
    input {
      border: 1px solid #e3e6e8;
      padding: 0.5rem;
      border-radius: 5px;
      margin-bottom: 0.5rem;
    }
  }
`;

export default TitleSection;
