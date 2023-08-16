import { styled } from 'styled-components';

const NoticeSection = () => {
  return (
    <NoticeContainer>
      <div>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to{' '}
          <a href="https://stackoverflow.com/help/on-topic">
            ask a programming-related question
          </a>{' '}
          and this form will help guide you through the process.
          <br />
          Looking to ask a non-programming question? See{' '}
          <a href="https://stackexchange.com/sites#technology-traffic">
            the topics here
          </a>{' '}
          to find a relevant site.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
    </NoticeContainer>
  );
};

const NoticeContainer = styled.section`
  div {
    width: 850px;
    height: 250px;
    padding: 24px;
    background-color: #ebf4fb;
    border: 1px solid #a6ceed;
    border-radius: 5px;
    a {
      color: #0366d6;
      &:hover {
        filter: brightness(1.2);
      }
    }
    h2 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    p {
      margin-bottom: 1rem;
    }
    h5 {
      margin-bottom: 0.5rem;
    }
    ul li {
      margin-left: 2rem;
      font-size: 0.8rem;
    }
  }
`;

export default NoticeSection;
