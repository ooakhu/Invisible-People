import React from 'react'
import {HeaderBox, SmallHeaderBox, Hover, Icon, Title, RightTriangle, LeftTriangle, SecondHeader} from './style'
import Logo from './Logo.svg';
import left from './left.svg'
import right from './right.svg'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineMail, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiOutlineSearch  } from 'react-icons/ai'
import {DonateBtn, MemberBtn} from "../Buttons";

export const HeaderCard = () => {
    return (
        <HeaderBox>
            <img className="left" src={left} alt="Logo"/>
            <img className="right" src={right} alt="Logo"/>
            {/*<LeftTriangle/>*/}
            {/*<RightTriangle/>*/}
            <h2>Get The Skills You Need For The Job That You Want</h2>
        </HeaderBox>

    )
}

export const SmallHeaderCard = () => {
    return (
        <SmallHeaderBox>
            <div className="welcome">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="socials">
                <h4>Who We Are</h4>
                <h4>Get Involved</h4>
                <h4>Contact</h4>
                <h4>Events & Programs</h4>
                <AiOutlineSearch size="25px"/>
                <DonateBtn/>
                <MemberBtn/>

            </div>
        </SmallHeaderBox>
    )
}