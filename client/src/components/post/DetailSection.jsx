import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import Editor from '../Editor.jsx';
import Viewer from '../Viewer.jsx';
import cardImg from '../../imgs/post_card_icon.png';
import { Card } from './Card.jsx';

const DetailSection = ({ step, setStep, content, setContent, isPassed }) => {
  return (
    <DetailContainer
      className={!isPassed ? 'disabled' : ''}
      onFocus={() => {
        setStep(2);
      }}
    >
      <div className="detail-box">
        <span className="main">What are the details of your problem?</span>
        <span className="sub">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </span>
        <Editor content={content} setContent={setContent} />
        <br />
        <span className="output">Output</span>
        <Viewer content={content} />
      </div>
      {step === 2 && (
        <Card>
          <div className="card-title">Introduce the problem</div>
          <div className="card-content">
            <img src={cardImg} alt="" />
            <p>
              Explain how you encountered the problem you’re trying to solve,
              and any difficulties that have prevented you from solving it
              yourself.
            </p>
          </div>
        </Card>
      )}
    </DetailContainer>
  );
};

DetailSection.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
  isPassed: PropTypes.bool.isRequired,
};

const DetailContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  &.disabled {
    filter: brightness(0.8);
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .detail-box {
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
    .output {
      font-weight: 600;
    }
  }
`;

export default DetailSection;
