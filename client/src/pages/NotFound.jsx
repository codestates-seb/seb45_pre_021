import { styled } from 'styled-components';
import notFound from '../imgs/not_found.png';

const NotFound = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <ImageBox>
          <Image />
        </ImageBox>
        <TextBox>
          <h1>Page not found</h1>
          <p className="desc">
            We&apos;re sorry, we couldn&apos;t find the page you requested.
          </p>
          <p>
            Try{' '}
            <a href="https://stackoverflow.com/search">
              searching for similar questions
            </a>
          </p>
          <p>
            Browse our <a href="/questions">recent questions</a>
          </p>
          <p>
            Browse our <a href="https://stackoverflow.com/tags">popular tags</a>
          </p>
          <p>
            If you feel something is missing that should be here,{' '}
            <a href="https://periwinkle-petalite-9f9.notion.site/6b9c255a4b334c9788844b10d5c55435?v=fbe2127a0bc84d65885141181adca3f3&pvs=4">
              contact us
            </a>
            .
          </p>
        </TextBox>
      </PageContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 54px;
  display: flex;
  justify-content: center;
  background-color: #f8f9f9;
`;

const PageContainer = styled.div`
  width: 1100px;
  min-height: 100vh;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
`;

const ImageBox = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  @keyframes vibration {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }

  width: 500px;
  height: 400px;
  background-image: url(${notFound});
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 0 20px #aaaaaa;

  &:hover {
    animation: vibration 0.1s infinite;
  }
`;

const TextBox = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
    &.desc {
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 19px;
    }
    a {
      color: #0366d6;
      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;
export default NotFound;
