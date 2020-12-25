import React from 'react'
import {BodyBox} from './style'
import {HeaderCard, SmallHeaderCard} from "../Header/index";
import {SectionOne, SectionTwo, SectionThree, SectionFive, SectionFour} from "../Section";
import Partnership from "../BottomSections/SecFive";

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
        </BodyBox>
    )
}