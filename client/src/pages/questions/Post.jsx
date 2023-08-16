import { styled } from 'styled-components';
import { useState } from 'react';
import NoticeSection from '../../components/post/NoticeSection.jsx';
import TitleSection from '../../components/post/TitleSection.jsx';
import DetailSection from '../../components/post/DetailSection.jsx';
import { NextButton } from '../../components/post/NextButton.jsx';
import kanaImg from '../../imgs/post_kana.png';

const Post = () => {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPassed, setIsPassed] = useState(false);
  const post = () => {
    // 추후 백엔드 API 요청 코드 작성
    alert(`
      title: ${title}
      content: ${content}
    `);
  };
  return (
    <PageWrapper>
      <PageContainer>
        <HeadlineSection>
          <h1>Ask a public question</h1>
          <Kana />
        </HeadlineSection>
        <NoticeSection />
        <TitleSection
          step={step}
          setStep={setStep}
          title={title}
          setTitle={setTitle}
          content={content}
          isPassed={isPassed}
          setIsPassed={setIsPassed}
        />
        <DetailSection
          step={step}
          setStep={setStep}
          content={content}
          setContent={setContent}
          isPassed={isPassed}
        />
        {(step === 2 || content.length > 0) && (
          <NextButton
            className={content.length < 20 ? 'disabled' : ''}
            onClick={() => {
              post();
            }}
          >
            Post your question
          </NextButton>
        )}
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
  width: 1264px;
  min-height: 100vh;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const HeadlineSection = styled.section`
  position: relative;
  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 4rem 0;
  }
`;

const Kana = styled.div`
  position: absolute;
  top: 20px;
  right: 360px;
  width: 200px;
  height: 150px;
  opacity: 0.6;
  background-image: url(${kanaImg});
  background-size: cover;
`;

export default Post;
