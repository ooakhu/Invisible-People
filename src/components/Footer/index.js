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
        </Container>

    );
};

export default Footer;