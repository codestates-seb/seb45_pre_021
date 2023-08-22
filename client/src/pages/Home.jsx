import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import profileImg from '../imgs/profile-img.jpeg';

const Home = () => {
  const nav = useNavigate();
  const stack = {
    react:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    css: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
    html: 'https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-1.png',
    javascript:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    styledComponent: 'https://www.styled-components.com/atom.png',
    figma:
      'https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png',
    nodejs:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
    java: 'http://synergyoverflow.s3-website.ap-northeast-2.amazonaws.com/static/media/java.e371363f61f53d0408df.png',
    spring:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///9tsz9rsjxhrilosTZpsThjry1grihlsDH8/vvy+O77/fn1+vL3+/Xt9ehvtEGTxXV3uE7n8uGMwmzg7tjB3bKp0JPS5sejzYvD3rS82qu216Pb69KKwWmdyoN7ulOCvV6Xx3vL4r642Kau05p4uFCFv2PN48Jaqxl/vFpTqAClzo+fy4dHEDMlAAAP0klEQVR4nNVdh3LqOhAN6lQXisH0fnnw/9/3JBkCuMiyLdvKmXtnMiEhPkjaXW39+akb/d7qGp7u+/XW6TzhbC/uY7acBv6gW/vfrxOD1XR28RAkjCGMAej8AgCAEWKMELDdhKte209aAoPVcswo4cw+eKUCYEYoGi9Xg7afWR/94L5lhOEcal/AiJDz/Dps+9k14B8vkKC8hUtfTcToZbZqm4ESk5kDi61dkiVxZpO2eWTA5/TKLV6cJPVOfttsEhhMz0bovUjC7aLfNqdPrPaEGaP3JMnYxprdet3SSmcvCwieD21z4+iGDjG8fG8A4oQt8+svoentGePI2KnFA9k9IlYnvQgMLdsyXsMm+D056j1RYJRf4NW7P785Ai2ZszVoEI3GsDl+HSFzdvlGgP9vZopfd1aPflABw02eyHGRY4jgymnoAH4D4avysXqwA41Ye/09bXSDvgGoq7pEzlEHnQwQDDBqh58AQtkShy9hBxjYpo+2FvAJuM9SjhvxyVfepr7Xygn8BHLSDXIfylc1NWcWpi0voASgqSxcKd3BrRLBPWybXQSyTuqNCY1eg6Py/Aa31nfoC8hJ8NiJ3cX/s2lpghPUuJLPBoAx1bggfPlW/AnxpSzBhQ1H8APwS/P1OUE8lmcRlvRInmjblOIgm4/HE5qCK4orP0esnF/gQdomlAQb/z6eEDNoz+1lsZT7MgTX1siYT6Dta0N6/AQREfwQ25QVvy93dy3aaSpgJzJT72JzHsVXB/4VKXwP7t8sJSgoioVb8T0KzvJZB3ybontBgsOztQQ5RdD76YvwFn3ao2tc2PoeehapwSRAp+fyFWAv3RGKbVrI+u7bTVAEAISaP7+ed0RfR1IXtgqZb5C3EcfFKihi1lz+BEH6YcIt+RNT/XCya6UejIN9Ck9xTdQ3a+Z/giDefT20A/TNmqkl10E1gPNtas9RBwA9givrjO00ABa7KgZc6ROtyGOvvqCZScC4I79Ldb01tivCCDQpVMbcrNlpENz/DT2xSD75lMtHmn8NXvwJKUPTnDJ6+sL/E1IGpnuduL5Am9RX3ug6f0HKpG1RAaEvvByGm79wCFOETAShL3LcpsEf2KMAZl7l+zDPbdrPzZhsH5gplPqFG26uiqFr/x5FnirpVtwvoOL1q/2KgoyV/rSV2nDrAuv3aHrw6YMCU17077bvUZzvLrxg4ePPgPW6nt3yb/BHvogoayPv7Da4AZ3n8osOIsw4iAcLAxQfQEAr60l1EDs2ixlAc5OGnljzg7hOfeVos2cGYe2IhNCIJO2FvsUEAc3MM0kiUyNarCmIVyTvUMSE00zTnrViBqGCCQjbdJ/izNIlxHReNDjPqaTEoIZ2KntM3eI5MiKiTxO/drJxCTEdl0lV69EUZ03fQoKcX8myEuGsiQeDQ+tUBYJu6VRDF3fANvY9y8wZwMi9Qo6asF3YtwUUWKUqEPSqlXal6PyxPZcKTNi8alXXgMZ1/sgW3wUmyFVnrOuBy0385Re2QlUARKh7NVPnJETNl1+4dQ8iRgRu7+bqemRA/+PDWrUoZwBGjLDxMjBarx6wb1HTgh9fNB1gjEDouctrBb2QgdG357tbv7YXbRSwbKQgWilAhjo3d7Y8rEY1ld51+bFDb6dOXe4Z2RuC86GUdbzb2N3PT8fp4RBMRvU3xLiBT6tmb1oZAswYJJ3zeL5ccD5t9EoQBw+/PseuyVMoG12cN2Hgt9vQQ9jZv0E2c5IUMOi4oRVl5jLt5KV9DPlnMKO3ozXdEGQ8/+U0NRHU5qt3WVjVgYW+7Ta/uk2KiXe0rY8OX7dXGdS0qjZE1G2v6UrmvhG3padb2K2mKxCZmzdJ9JH52c6FZRptrEoxUQRn7Z6+jJyTZ863FOtVjiGGj5alyzVzDQ+/NULljyGAl9aVwzrTXhJansmAeOl7BXLMtmkog1HcofaGCFKgh/jqXO4YAvpojEc2Ztn16UP0LEfslnPmI2xDV67uP8VTCIUoHBmTUkYpGVvRW21KFbewLd+cuF/S1w1NNC8wAKDK7hIqHw4ixVgQgLYvYiQW/1Spso+oslSk1xQliFvXEU8AZXmM8JCSVYmLRVT1ZwOmcKd6WcYugp9hUUHzqtxsH11AMk02gYVguChss9lD8OfEiFKgi0AwOkrPaQGAjjUEe1CdJyvNNnSSS1mAILblDIpM35wsRaHp8Vz69/VBbZGioi4LIPVPSIabn3sRZUFNxL0MwQN55U3Csc83cpELPrPEkhFYss/i2FSIhAywFs5vXcRqGVsFX5/sNOAnBlC25HHymT0BkDViVFpiNO9yI1Ogtj/6ezSzSKUFhCSZTJJAXzD09BnmKJ9GIcruSf4HXpAhsWiPisiZRnMIwdDRZsja7gb7AdHMRG2SSnQLMcytd2sQspmJxhL2CzHMLhVrHAPRVltjCSNZqnsOtWqHG4IoCdFq0SL0oTbDXN3THMQh7MS7maViFGl8vSWs1qzPJA5Ue0uJqy+46DEk1ljcE3lhzyr5if0sv1uAsRZD3UYT9aMnm/cjPeND3IDxQ4th1Z6ZxtCNOj0QvWu4cF+gmRbDKg0ljSJqeaTbJkkE1dBJh2H5bouGsZceF+1mXsJ9waY6tyemoV2bwDxyfCbamWRBJNGw4Oecz1Cjj0YTWEZ+T6RTYykh3Bdk9bPOveNbogzDiCAA2jl/wn3BRUh+0l6x/md1YfoMcxYICol4BRxqlHPpqdeasXgSZPqB54GQS6j/c8xliC2YjfYiWOQS5z9bmB/yfN4ZBbWN4kWwQwvsJ5GcKAzY3MxLCwya1xnskCLPIoJrosyylxd7Yq3ffY8vgsW20wZLk+anmydLzUxUqID7aw0ALlRsIhIVpLGyzVGItKYH18X+9xgVvIaLlRdB7jyFaGKgQhW8uzSTYnpZhn5lbmJOeK1dUTp4NzFGBdtYy8CozC+9qtUFzmsMVid88LvB3n1mNSHS9aJmrTl1eYVbKxvE4d3qHrCiwWeRrvd8ePUatqgOZx8Zd0VUvYRofP0q51ZXj7bmze+uP2yR4nEvefiemk5dXNkWQ9/5eCxSPPgsk9meJrW6xrmlXfo1bYKVkHaS4NP9MlAeRCMjlApj8yn+UF44OwUiwvh+dqVVg4zNMtOH730eHLQr8Rayl9Bvvo3yEqzvFjGG8GseCt6WuZ/KBAz4smOVB7HcRIwKGK6/Hgc7ZWq7pZJ/e0H7Kp3ftNV2/R6ZXDJRUCY+s7eQXCs0YrPB3+7m+9PGJfPopGj5KOVWpnqrukiaxpV9i4SyqZ7yXvEZT1KaprCxbMSBGxuMWTqXVZaMok+3nEpfkKbCvyGMHRZ0LtlAIqpr/srNXCq2aUNm2yoxlg/tyroxo5zZr6FBI0XdTCPqohffoPwBywtxWecUu9jusrdpA8K0O4tvUL7Hyn+wkX6PJRCrKvRqj4+GOPnXYQVjMepQyr6/OVRI05rDh4dOcnQyyOpGroNobEXCN6FIFa41KfHgpUyZwJXkd1QElHDzqmxTVX1YJXQXnbQpGuhcRQUHcjumBD0VxUElB+7lob8EqaO9SbU948n3TOl8qWjOWkumgv+AqfwAraZ/p9FmpEljQdUX0nzo4rCD6ZdS1KkWjx1Eb5t6q1UUPCOzFb/+DGUNsSFuxTP/nK2SuiYThcKA5jKge+GNZH2WAFa1ECMxk3WpVdwSTTm+e9NL+umTYOeqp+E11iEj5Ua5iAbsmlF4gyz7UwRVzJgnnmMdMgsVFMZpbn1KHvzllmavnlhAr3rKx2v+T2ahwkq1iBV0Yj+YI4iUgVgMDTieX8WiIDtMpaiBAqhk6pcfjlGmaHm9ObwYOAVdD+QsoXrUWhmf2+iwR6qj9wQDRlKQ18/PUXndU4WhCpbmDYO7p8FONrgxYvfeX0aZsrJUWfasH+EaBKcdJeqT9wSmGzOeruXr0XNqCJWdXLQoDoPZlumxEwKmVC/rFLyHNebEUtWN5/Mo9q6zG9RlJ9ZvbSop8DdrKj+hQT3/IbvhR9dfbBzItNlV62Udx/ItIvMNTE/5jKlziPixu2BahF0HMLox5/6Zv8WHRjLsRN2QB6EvSdUdHeYOFyrFuodg4i0NZlaP3/tOyzGY0zYK/AqHUbC8dAptzOgNGF2bTAbsfQ4O10oMyx1UwgX8aBW6mMuUwv2VAYLe0mggJCAf+0fzIps/Og8Rwko0jwaI4Lthd8H8U4NrZ7nX0jaZrx64mw7yxIId+smLxkdYis05M54QP3x8BzsKOFvMDjvGDDqnGtJwp+h7rwGngH27NNZ2FzNyCesIfBycuEQs1ndlnTyKiEEKifKeHgOXLHB/qKWM/3pLeOsKJtj24/M8MNkEo95ocvQ0l1cevXrCx/0wJRhQOHEqZtoQ93cpDhoDu/nR8+o4egL+HKVsJFA87Sb8VDRfw5MHOSO7Ob3xoqaYY2+6TXeWl3HLb94nmXw7aoeKkTRcsqzragk9CndZcqCco+zy+rASAcQgwxWACXEP9RQrDlenc7Y7kpRztf7Ork627kvz52DG3GstkcZenttAs7Y7iVEkU1K8wYkmb5jRcQ2r1/WD497Lu7/g8iWgkZ8/JY4fC8UhuD6YmQ7zRH8wCcKZ6xEdE79c9uIT0nxLG5X4abkCIO5D/dEkmB7ve3e83t22XoTzbXdZj939Zj47HcNwujhcg9Vk4vsjjt4bo5HvT1bBYREu5+765jDIqWnezSo2yRM3qbSozOX9x8H6NBsDKuwdxp+KA3wBy9Ek0XASOZ+EA3Lw34DyHxVfQSjWi78BEr+vw+z151lFxbSgqarmMxEOoOI3YWMApLJhMaVpiQq2zL8Civnb2jj8S8bEDUxTMAJgpgr78F/iW5aMZAXMkO17iFsMPTtGJQJkzPoNYnvBjjl72DFo3vtf7/WwYgnRzaiR0Xv7cAdrKwiyqpkFcQz30i7rjmbEii0Kayj83PzbXm4gI1mrYQBacMazHha09SGJT2BUU/3AxLFiATvsVlsbzu7YgoGzgNZaTRcmigaaBkY19+nwE4UfzYKs628UO2txGXFKcnMNmLS2jOTSVJXZshWtj1CDfeN648a3KqD7ZtvGBYngVr38yK35jmMha07/M6eVbun9e0NGKmuvJ17vkZcba4IfOrXZt7E3p7VyBAwtjV50S2AwSwtYGuJHHCs6wfenTi36EVHPnmkMgasoFCkFwNjGho6Ub/RCL6fgoAg9BG+Lto9fCvxZxwRJwHdnXVkO1bGadfSToNOAGfGW1tKLMFnqpuknF4/AcS35U8YRpesXyc8EmEG0W64s6AWrjcEqdAGVgVwVUQCwyCbzNouJhZIlH8PJ4bS/OUSEh1EU3X1HhRnj3+9s3dPB/0tLl4rhaHWdLk/3x95dX15x/eMhmPSGDXD7H6I+843/kuBPAAAAAElFTkSuQmCC',
    springboot:
      'http://synergyoverflow.s3-website.ap-northeast-2.amazonaws.com/static/media/springboot.db0140578eaadb4288f9.png',
    amazonaws:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
    git: 'https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png',
    github: 'https://assets.stickpng.com/images/629b7adc7c5cd817694c3231.png',
  };

  return (
    <MainLayout>
      <TitleContainer onClick={() => nav('/questions')}>
        <h1>Welcome to Stack Overflow</h1>
      </TitleContainer>
      <BodyLayout>
        <DeveloperLayout>
          <DeveloperComponent>
            <h2>Frontend</h2>
            <ProfileLayout>
              <ProfileDetails>
                <ProfileImg
                  src="https://user-images.githubusercontent.com/72354092/259752477-0ed1ebca-f281-48c9-b011-977bbb839c28.png"
                  alt="profile img"
                />
                <span>강성일 (팀장)</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg
                  src="https://user-images.githubusercontent.com/72354092/259753879-98cec546-738a-445a-aaa3-4e73819419ed.png"
                  alt="profile img"
                />
                <span>김동훈</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg
                  src="https://user-images.githubusercontent.com/72354092/259755661-cd732589-ffbb-4309-a37d-6a17dd8a4866.png"
                  alt="profile img"
                />
                <span>이지원</span>
              </ProfileDetails>
            </ProfileLayout>
          </DeveloperComponent>
          <DeveloperComponent>
            <h2>Backend</h2>
            <ProfileLayout>
              <ProfileDetails>
                <ProfileImg
                  src="https://user-images.githubusercontent.com/72354092/259754564-dfd83578-6a2b-45e3-be6e-b30b2233c50f.png"
                  alt="profile img"
                />
                <span>한도석 (부팀장)</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg
                  src="https://user-images.githubusercontent.com/72354092/259754946-7c6ac671-0b03-47c1-8f73-6bd41cb816da.png"
                  alt="profile img"
                />
                <span>정승관</span>
              </ProfileDetails>
              <ProfileDetails>
                <ProfileImg
                  src="https://user-images.githubusercontent.com/72354092/259756064-ef73cfde-3422-42ad-b854-dbafa4103c89.png"
                  alt="profile img"
                />
                <span>정창인</span>
              </ProfileDetails>
            </ProfileLayout>
          </DeveloperComponent>
        </DeveloperLayout>
        <SkillsLayout>
          <h2>Stack</h2>
          <SkillsComponent>
            <StackImage src={stack.react} alt="react icon" />
            <StackImage src={stack.css} alt="css icon" />
            <StackImage src={stack.html} alt="html icon" />
            <StackImage src={stack.javascript} alt="javascript icon" />
            <StackImage src={stack.styledComponent} alt="styled icon" />
            {/* <StackImage src={stack.figma} alt="figma icon" /> */}

            <StackImage src={stack.nodejs} alt="nodejs icon" />
            <StackImage src={stack.java} alt="java icon" />
            <StackImage src={stack.spring} alt="spring icon" />
            <StackImage src={stack.springboot} alt="springboot icon" />

            <StackImage src={stack.amazonaws} alt="amazonaws icon" />
            {/* <StackImage src={stack.git} alt="git icon" />
            <StackImage src={stack.github} alt="github icon" /> */}
          </SkillsComponent>
        </SkillsLayout>
      </BodyLayout>
    </MainLayout>
  );
};

export default Home;

const MainLayout = styled.div`
  width: 100vw;

  height: calc(100vh - 204px);
  margin-top: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  color: #fff;
  height: 30vh;
  /* background-color: red; */
  width: 100%;

  font-size: 26px;
  background-color: #3b3f43;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BodyLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100vw;
  margin: auto;
`;
const DeveloperLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* height: 45vh; */
  width: 50vw;
  height: 400px;
  margin: auto;
`;

const DeveloperComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ProfileLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 100%;
  /* background-color: #fff; */
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > span {
    margin-top: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const SkillsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 40vh; */
  width: 40vw;
  margin: auto;

  > h2 {
    font-size: 36px;
    margin-bottom: 20px;
    margin-top: -20px;
  }
`;

const SkillsComponent = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  width: 500px;
  /* background: #000; */
`;
const StackImage = styled.img`
  width: 60px;
  /* height: 80px; */
  margin: 16px;
`;
