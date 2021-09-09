import styled from 'styled-components';
import media from "styled-media-query";
import { LogoGithub } from '@styled-icons/ionicons-solid/LogoGithub';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';


const FooterContainer = styled.div`
    margin-top: 60px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    padding: 14px 0px;
    position: relative;
    z-index: 50;
`;

const FooterWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${media.greaterThan("small")`
        justify-content: space-between;
        flex-direction: row;
    `}
`;

const Copyright = styled.p`
    font-size: 12px;
`;

const Email = styled.p`
    font-size: 12px;
    padding: 10px 0px;
    ${media.greaterThan("small")`
        padding: 0px;
    `}
`;

const Links = styled.div`
    display: flex;
`;

const Link = styled.a`
    font-size: 10px;
    display: block;
    padding-left: 20px;
    color: #424242;
`;

const ColorOne = styled.span`
    &:hover {
        color: #FF4471;
    }
`;

const ColorTwo = styled.span`
    &:hover {
        color: #7683EE;
    }
`;

function Footer() {

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContent>
                    <Copyright>&copy; Jenna Emerman 2021</Copyright>
                    <Email>jennaemermann@gmail.com</Email>
                    <Links>
                        <Link href="https://github.com/jenna-mae/"><ColorOne><LogoGithub size="30px" /></ColorOne></Link>
                        <Link href="https://www.linkedin.com/in/jenna-emerman/"><ColorTwo><Linkedin size="30px" /></ColorTwo></Link>
                    </Links>
                </FooterContent>
            </FooterWrapper>
        </FooterContainer>
    );
  }
  
  export default Footer;