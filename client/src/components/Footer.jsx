import { styled } from 'styled-components';
import footerLogo from '../imgs/footer_logo.png';
import footerNotionIcon from '../imgs/footer_notion_icon.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterItem>
          <img src={footerLogo} alt="footerLogo" />
        </FooterItem>
        <FooterItem>
          <h4>TEAM</h4>
          <p>최애의 I</p>
        </FooterItem>
        <FooterItem>
          <h4>PRE-PROJECT</h4>
          <p>
            Stack Overflow
            <br />
            Clone Coding
          </p>
        </FooterItem>
        <FooterItem>
          <h4>MEMBER</h4>
          <p>
            강성일 김동훈 이지원
            <br />
            한도석 정승관 정창인
          </p>
        </FooterItem>
        <FooterItem>
          <h4>CONTACT</h4>
          <a
            href="https://periwinkle-petalite-9f9.notion.site/6b9c255a4b334c9788844b10d5c55435?v=fbe2127a0bc84d65885141181adca3f3&pvs=4"
            className="icon"
          >
            <img src={footerNotionIcon} alt="footerNotionIcon" />
          </a>
        </FooterItem>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 150px;
  color: #fff;
  background-color: #23272a;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 1024px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterItem = styled.div`
  width: auto;
  font-size: 0.8rem;
  h4 {
    margin-top: 0;
    color: #babfc4;
  }
  p {
    color: #898d91;
  }
  .icon {
    filter: brightness(0.6);
    transition: 0.5s;
    &:hover {
      filter: brightness(1);
    }
  }
`;

export default Footer;
