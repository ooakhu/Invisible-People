import React from 'react';
import {Container, FooterBox, Item, Socials, SocialsContainer} from "./style";
import {FiTwitter} from 'react-icons/fi'


const Footer = () => {
    return (
        <Container>
            <SocialsContainer>
                <Socials>
                    <FiTwitter/>
                </Socials>
                <Socials>
                    <FiTwitter/>
                </Socials>
                <Socials>
                    <FiTwitter/>
                </Socials>
                <Socials>
                    <FiTwitter/>
                </Socials>
            </SocialsContainer>
            <FooterBox>
                <Item>
                    <h3>About</h3>
                    <h4>Our Mission</h4>
                    <h4>Our History</h4>
                    <h4>Our Team</h4>

                </Item>

                <Item>
                    <h3>Events % Programs</h3>
                    <h4>Our Mission</h4>
                    <h4>Our History</h4>
                    <h4>Our Team</h4>

                </Item>
                <Item>
                    <h3>Join The Movement</h3>
                    <h4>Our Mission</h4>
                    <h4>Our History</h4>
                    <h4>Our Team</h4>
                </Item>

                <Item>
                    <h3>Contact Us</h3>
                    <h4>Our Mission</h4>
                    <h4>Our History</h4>
                    <h4>Our Team</h4>
                </Item>

            </FooterBox>
        </Container>

    );
};

export default Footer;