import styled from 'styled-components'
import { useState } from 'react'
import { Menu5 } from '@styled-icons/remix-line/Menu5';
import { Close } from '@styled-icons/material-sharp/Close';
import { Home } from '@styled-icons/fluentui-system-regular/Home';
import { Code } from '@styled-icons/boxicons-regular/Code';
import { Briefcase } from '@styled-icons/fluentui-system-regular/Briefcase';
import { Person } from '@styled-icons/ionicons-outline/Person';
import { Phone } from '@styled-icons/feather/Phone';

import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import media from "styled-media-query";

const LogoLrg = styled(Link)`
    display: none;
    color: #6ABB72;
    font-size: 34px;
    font-weight: bold;
    ${media.greaterThan("large")`
        display: block;
        position: absolute;
        top: 20px;
        left: 30px;
        z-index: 100;
    `}
`;

const LogoSm = styled(Link)`
    color: #6ABB72;
    font-size: 34px;
    font-weight: bold;
    ${media.greaterThan("large")`
        display: none;
    `}
`;

const NavLi = styled.li`
    margin-bottom: 28px;
    
    &:last-child {
        margin-bottom: 0px;
    }

    a {
        position: relative;
        color: black;
        text-decoration: none;
        width: 76px;
        margin: 0 auto;
        display: block;
        height: 76px;
        font-size: 14px;
        background-color: white;
        border-radius: 14px;
        box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
        border: 1px solid #eee;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            font-size: 12px;
            font-weight: 500;
            ${media.greaterThan("large")`
                display: none;
                font-size: 13px;
                position: absolute;
                top: 50%;
                left: 50%;
                font-weight: 800;
                transform: translate(-50%,-50%);
            `}
        }
        &:hover {
            box-shadow: 4px 8px 9px rgb(134 151 168 / 20%);
        }
        &:hover p {
            color: white;
            ${media.greaterThan("large")`
                display: inline-block;
            `}
        }
        &:hover svg {
            ${media.greaterThan("large")`
                display: none;
            `}
        }
    }
`;

const NavUl = styled.ul`
    padding-top: 40px;
    list-style: none;
    ${media.greaterThan("large")`
        padding-top: 0px;
    `}
`;

const NavItems = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    width: 150px;
    z-index: 20;
    padding: 40px 0px;
    text-align: center;

    ${media.greaterThan("medium")`
        width: 170px;
    `}
    ${media.greaterThan("large")`
        width: 30%;
    `}
`;

const NavItemsLrg = styled.div`
    display: none;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    width: 100%;
    z-index: 20;
    padding: 40px 0px;
    text-align: center;

    ${media.greaterThan("large")`
        display: block;
        height: 100%;
        margin-left: auto;
    `}
`;

const NavContainer = styled.div`
    display: flex;
    flex-direaction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 20px;
    width: 100%;
    // background-color: #d7ecd9c4;
    z-index: 50;
    ${media.greaterThan("large")`
        align-items: start;
        padding-right: 0px;
        display: block;
        width: 10%;
        right: 0px;
        top: 50%;
        transform: translate(0%,-50%);
        padding: 0px;
    `}
`;

const MenuBar = styled.div`
    z-index: 30;
`;

const StyledMenu = styled(Menu5)`
    width: 30px;
    height: 30px;
    z-index: 30;
    ${media.greaterThan("large")`
        display: none;
    `}
`;

const HomeIcon = styled(Home)`
    margin: 2px 0px 3px;
    height: 24px;
    ${media.greaterThan("large")`
        margin: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `}
`;

const CodeIcon = styled(Code)`
    margin: 2px 0px 3px;
    height: 24px;
    ${media.greaterThan("large")`
        margin: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `}
`;
const WorkIcon = styled(Briefcase)`
    margin: 2px 0px 3px;
    height: 24px;
    ${media.greaterThan("large")`
        margin: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `}
`;

const PersonIcon = styled(Person)`
    margin: 2px 0px 3px;
    height: 24px;
    ${media.greaterThan("large")`
        margin: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `}
`;

const PhoneIcon = styled(Phone)`
    margin: 2px 0px 3px;
    height: 24px;
    ${media.greaterThan("large")`
        margin: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `}
`;
const ArrowIcon = styled(KeyboardArrowRight)`
    margin: 2px 0px 3px;
    height: 24px;
    ${media.greaterThan("large")`
        margin: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `}
`;

function Navigation(props) {
    const [showMenu, setShowMenu] = useState(false);

    let menu
    let menuLrg
    let icon

    if(showMenu === false){
        icon = <StyledMenu onClick={() => setShowMenu(!showMenu)} />
    } else {
        icon = <Close size="30px" zIndex="30" onClick={() => setShowMenu(!showMenu)} />
    }
    if(window.location.pathname !==  "/") {
        menuLrg =
        <NavItemsLrg>
            <NavUl>
                <NavLi>
                    <NavLink to="/"><HomeIcon /><p>Back Home</p></NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to={'/' + props.next + '/'}><ArrowIcon /><p>Next Project</p></NavLink>
                </NavLi>
            </NavUl>
        </NavItemsLrg>
    } else {
        menuLrg =
        <NavItemsLrg>
            <NavUl>
                <NavLi>
                    <Link
                        activeClass="activePurple"
                        to="Header"
                        spy={true}
                        smooth={true}
                        offset={-180}
                        durarion={500}
                    ><HomeIcon /><p>Home</p></Link>
                </NavLi>
                <NavLi>
                    <Link
                        activeClass="activeGreen"
                        to="Skills"
                        spy={true}
                        smooth={true}
                        offset={-320}
                        durarion={500}
                        ><CodeIcon /><p>Toolkit</p></Link>
                </NavLi>
                <NavLi>
                    <Link
                        activeClass="activePink"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-450}
                        durarion={500}
                    ><WorkIcon /><p>Projects</p></Link>
                </NavLi>
                <NavLi>
                    <Link
                        activeClass="activeBlue"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-580}
                        durarion={500}
                    ><PersonIcon /><p>About</p></Link>
                </NavLi>
                <NavLi>
                    <Link
                        activeClass="activeGreen"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-540}
                        durarion={400}
                    ><PhoneIcon /><p>Contact</p></Link>
                </NavLi>
            </NavUl>
        </NavItemsLrg>
    }
    if(showMenu) {
        if(window.location.pathname !==  "/") {
            menu =
            <NavItems>
                <NavUl>
                    <NavLi>
                        <NavLink to="/"><HomeIcon /><p>Home</p></NavLink>
                    </NavLi>
                    <NavLi>
                        <NavLink to={'/' + props.next + '/'}><ArrowIcon /><p>Next</p></NavLink>
                    </NavLi>
                </NavUl>
            </NavItems>
        } else {
            menu =
            <NavItems>
                <NavUl>
                    <NavLi>
                        <Link
                            activeClass="activePurple"
                            to="Header"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            durarion={500}
                            onClick={() => setShowMenu(!showMenu)}
                        ><HomeIcon /><p>Home</p></Link>
                    </NavLi>
                    <NavLi>
                        <Link
                            activeClass="activeGreen"
                            to="Skills"
                            spy={true}
                            smooth={true}
                            offset={-260}
                            durarion={500}
                            onClick={() => setShowMenu(!showMenu)}
                            ><CodeIcon /><p>Toolkit</p></Link>
                    </NavLi>
                    <NavLi>
                        <Link
                            activeClass="activePink"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={-260}
                            durarion={500}
                            onClick={() => setShowMenu(!showMenu)}
                        ><WorkIcon /><p>Projects</p></Link>
                    </NavLi>
                    <NavLi>
                        <Link
                            activeClass="activeBlue"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={-260}
                            durarion={500}
                            onClick={() => setShowMenu(!showMenu)}
                        ><PersonIcon /><p>About</p></Link>
                    </NavLi>
                    <NavLi>
                        <Link
                            activeClass="activeGreen"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-360}
                            durarion={500}
                            onClick={() => setShowMenu(!showMenu)}
                        ><PhoneIcon /><p>Contact</p></Link>
                    </NavLi>
                </NavUl>
            </NavItems>
        }
    }
    return (
    <div className="navigation">
        <LogoLrg to="Header">
            je
        </LogoLrg>
        <NavContainer className="navContainer">
            <LogoSm to="Header">
                je
            </LogoSm>
            <MenuBar>
                { icon }
            </MenuBar>
            { menu }
            { menuLrg }
            </NavContainer>
        </div>
    );
  }

//   if(window.location.pathname ===  "/sweeteats" || window.location.pathname ===  "/lhmedia") {
//     menu =
//     <NavItems>
//         <NavUl>
//             <NavLi>
//                 <NavLink to="/">Back Home</NavLink>
//             </NavLi>
//             <NavLi>
//                 <NavLink to="/sweeteats" activeClassName="activePink">sweeteats</NavLink>
//             </NavLi>
//             <NavLi>
//                 <NavLink to="/openspace" activeClassName="activePurple">openspace</NavLink>
//             </NavLi>
//             <NavLi>
//                 <NavLink to="/lhmedia" activeClassName="activePurple">LH Media Productions</NavLink>
//             </NavLi>
//             <NavLi>
//                 <NavLink to="/emerald" activeClassName="activeGreen">Emerald Backyards</NavLink>
//             </NavLi>
//             <NavLi>
//                 <NavLink to="/cms" activeClassName="activeBlue">Custom CMS</NavLink>
//             </NavLi>
//             <NavLi>
//                 <NavLink to="/conecrazy" activeClassName="activePink">Cone Crazy</NavLink>
//             </NavLi>
//         </NavUl>
//     </NavItems>
  
  export default Navigation;