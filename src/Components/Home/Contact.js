import styled from 'styled-components';
import media from "styled-media-query";
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';
import { LogoGithub } from '@styled-icons/ionicons-solid/LogoGithub';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    z-index: 10;
    position: relative;
    ${media.greaterThan("large")`
        width: 87%;
    `}
`;

const WhiteContainer = styled.div`
    background-color: white;
    border-radius: 24px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    padding: 40px;

    ${media.greaterThan("medium")`
        padding: 50px;
    `}
    ${media.greaterThan("medium")`
        padding: 60px;
    `}
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 26px;
    color: #424242;

    &:nth-child(2) {
        padding-top: 20px;
    }

    ${media.greaterThan("large")`
        line-height: 28px;
    `}
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${media.greaterThan("medium")`
        flex-direction: row;
        justify-content: space-between;
    `}
`;

const Methods = styled.div`
    padding-top: 40px;
    ${media.greaterThan("medium")`
        width: 43%;
        padding-top: 0px;
    `}
`;

const Method = styled.p`
    font-size: 14px;
    padding-bottom: 16px;
`;

const TextWrapper = styled.div`
    ${media.greaterThan("medium")`
        width: 45%;
    `}
`;

const EmailIcon = styled(EmailOutline)`
    height: 24px;
    padding-right: 16px;
`;

const GitHubIcon = styled(LogoGithub)`
    height: 24px;
    padding-right: 16px;
`;

const LinkedinIcon = styled(Linkedin)`
    height: 24px;
    padding-right: 16px;
`;

const Link = styled.a`
    color: #424242;
    text-decoration: none;
`;

const ColorOne = styled.span`
    &:hover {
        color: #FF4471;
    }
`;

const ColorTwo = styled.span`
    &:hover a {
        color: #7683EE;
    }
`;

const ColorThree = styled.span`
    &:hover a {
        color: #6ABB72;
    }
`;

function Contact() {
  return (
    <div id="Contact">
        <Wrapper>
            <WhiteContainer>
                <InnerWrapper>
                    <TextWrapper>
                        <Text>If you want to learn more about me and my projects or if you have Vancouver restaurant recommendations for me, I'd love to hear from you.</Text>
                        <Text>Let's grab a coffee and chat!</Text>
                    </TextWrapper>
                    <Methods>
                        <Method><ColorOne><EmailIcon />jennaemermann@gmail.com</ColorOne></Method>
                        <Method><ColorTwo><Link href="https://www.linkedin.com/in/jenna-emerman/"><LinkedinIcon />LinkedIn</Link></ColorTwo></Method>
                        <Method><ColorThree><Link href="https://github.com/jenna-mae/"><GitHubIcon />GitHub</Link></ColorThree></Method>
                    </Methods>
                </InnerWrapper>
            </WhiteContainer>
        </Wrapper>
    </div>
  );
}

export default Contact;
