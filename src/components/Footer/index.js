import React from 'react';
import {Container, FooterBox, Item, Socials, SocialsContainer} from "./style";
import {FiTwitter, FiInstagram, FiLinkedin, FiFacebook} from 'react-icons/fi'
import {MemberButton} from "../Buttons/style";


const Footer = () => {
    return (
        <Container>
            <SocialsContainer>
                <Socials>
                    <FiTwitter/>
                </Socials>
                <Socials>
                    <FiInstagram/>
                </Socials>
                <Socials>
                    <FiLinkedin/>
                </Socials>
                <Socials>
                    <FiFacebook/>
                </Socials>
            </SocialsContainer>
            <h3>We Occasionally Send Out Awesome Stuff</h3>
            <input placeholder="Your Email" />
            <MemberButton>Submit</MemberButton>
            <FooterBox>
                <Item>
                    <h3>About Us</h3>
                    <h4>Our Mission</h4>
                    <h4>Our History</h4>
                    <h4>Our Team</h4>

                </Item>

                <Item>
                    <h3>Events & Programs</h3>
                    <h4>For Individuals</h4>
                    <h4>For Organizations</h4>
                    <h4>For Academics</h4>

                </Item>
                <Item>
                    <h3>Join The Movement</h3>
                    <h4>Sponsors</h4>
                    <h4>Partners</h4>
                    <h4>Donate</h4>
                </Item>

                <Item>
                    <h3>Contact Us</h3>
                    <h4>Newsletter</h4>
                    <h4>Press</h4>
                    <h4>Blog</h4>
                </Item>

            </FooterBox>
        </Container>

    );
};

export default Footer;