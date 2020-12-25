import React from 'react'
import {BodyBox} from './style'
import {HeaderCard, SmallHeaderCard} from "../Header/index";
import {SectionOne, SectionTwo, SectionThree, SectionFive, SectionFour} from "../Section";
import Partnership from "../BottomSections/SecFive";
import Encourage from "../BottomSections/SecSix";
import ReachOut from "../BottomSections/SecSeven";
import Footer from "../Footer";


export const BodyCard = () => {
    return (
        <BodyBox>
            <SmallHeaderCard/>
            <HeaderCard/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <Partnership/>
            <Encourage/>
            <ReachOut/>
            <Footer/>
        </BodyBox>
    )
}