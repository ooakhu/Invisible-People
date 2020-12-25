import React from 'react'
import {HeaderBox, SmallHeaderBox, Hover, Icon, Title, RightTriangle, LeftTriangle, SecondHeader} from './style'
import Logo from './Logo.png';
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineMail, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiOutlineSearch  } from 'react-icons/ai'


export const HeaderCard = () => {
    return (
        <HeaderBox>
            <LeftTriangle/>
            <RightTriangle/>
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
                <button>Donate Now!</button>
                <button>Become A Member</button>

            </div>
        </SmallHeaderBox>
    )
}