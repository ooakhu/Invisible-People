import React from 'react'
import {BodyBox} from './style'
import {HeaderCard, SmallHeaderCard} from "../Header/index";
import {SectionOne, SectionTwo, SectionThree, SectionFive} from "../Section";
import Footer from "../Footer";


export const BodyCard = () => {
    return (
        <BodyBox>
            <SmallHeaderCard/>
            <HeaderCard/>
            <SectionOne/>
            <SectionTwo/>
            <SectionFive/>
            <SectionThree/>
            <Footer/>
        </BodyBox>
    )
}