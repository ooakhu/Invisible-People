import React from 'react'
import {SecondHeader, ThirdHeader, PictureContainer, WhyUs, Title, Icon, WhyBox, After,AfterBox,AfterInner, Apply, ApplicationProcess} from "./style"

import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import pic4 from "./pic4.jpg"
import pic5 from "./pic5.jpg"
import pic6 from "./pic6.jpg"
import diamond from "./diamond.svg"
import living from "./living.svg"
import graduate from "./graduate.svg"
import money from "./money.svg"
import opportunities from "./opportunities.svg"

export const SectionOne = () => {
    return (
        <SecondHeader>
            <div style={{width:"50%", margin: "auto"}}>
                <p>
                    InvisiblePeople.org, Microsoft and Huskings are partnering to launch an intensive 6 months development
                    program to increase the representation of masculine and gender nonconforming women in tech. Trainees are
                    provided with a laptop, stipends for data, food and power during the course of the program. And upon successful
                    completion, are helped with job placements.
                </p>
            </div>

        </SecondHeader>
    )
}

export const SectionTwo = () => {
    return (
        <ThirdHeader>
            <h2>What Makes Our Program Different</h2>
            <PictureContainer>
                <img src={pic1} alt="pic1"/>
                <img src={pic2} alt="pic2"/>
                <img src={pic3} alt="pic3"/>
                <img src={pic4} alt="pic4"/>
                <img src={pic5} alt="pic5"/>
                <img src={pic6} alt="pic6"/>
            </PictureContainer>
            <WhyUs>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><span>Beginner Focused-</span>You don't need any programming experience. If you are interested in becoming a software developer, we strongly encourage you to apply</p>
                    </Title>
                </WhyBox>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><span>Learn & Earn-</span>Instead of paying thousands upfront or losing a percentage of your income, you get to pay nothing. Yes, that's right. This program is free
                        and you'll even get stipends too.</p>
                    </Title>
                </WhyBox>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><span>Virtual Program-</span>This program is mostly virtual, but if you live in lagos, you will be encouraged to be at our bi-weekly meetings. There will be alot to learn. But eitherways, you will recieve hardware, software and other technology tools to create an effective virtual learning environment</p>
                    </Title>
                </WhyBox>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><span>Launch a New Career-</span>Upon completion of your program you will be assisted and equiped with the knowledged needed to land your first job in tech</p>
                    </Title>
                </WhyBox>

            </WhyUs>
        </ThirdHeader>
    )
}

export const SectionThree = () => {

    return (
        <After>
            <h1>After Completing the Program...</h1>
            <AfterBox>
                <AfterInner>
                    <img src={graduate} alt="graduation-cap"/>
                    <h3>Employable Skills</h3>
                    <p>You will have no debt to pay after finishing the program and would have left the program with both technical, agile and leadership skills.</p>
                </AfterInner>
                <AfterInner>
                    <img src={money} alt="piggy-bank"/>
                    <h3>Increased Income</h3>
                    <p>The average salary for people in tech is 2X more than the average private worker.<br/> And offers a better growth path</p>
                </AfterInner>
                <AfterInner>
                    <img src={opportunities} alt="man standing next to world symbol"/>
                    <h3>Access To Worldwide Opportunites</h3>
                    <p>Technology has taken over the world. By equiping yourself with sought after skills, the world is now your oyster. Go do great things!</p>
                </AfterInner>
                <AfterInner>
                    <img src={living} alt="woman and dog in a park"/>
                    <h3>Increased Standard of Living</h3>
                    <p>By equipping yourself with valuable skills, accessing more income and therefore better amenities, your standard of living skyrockets.</p>
                </AfterInner>
            </AfterBox>
        </After>
    )
}

export const SectionFour = () => {
    return (
        <Apply>
            <h2>Program Starts February 2022</h2>
            <h2>Limited Spots Available</h2>
        </Apply>
    )
}

export const SectionFive = () => {
    return (
        <ApplicationProcess>
            <h1>Application Process</h1>
            <p><span>December 3rd, 2021:</span>Program applications opens.</p>
            <p><span>December 10th, 2021:</span>Screening of applications begins.</p>
            <p><span>December 17th, 2021:</span>Application closes :( </p>
            <p><span>December 27th, 202`:</span>Interviews begin (video calls).</p>
            <p><span>January 3rd, 2022:</span>Offers are sent out to accepted applicants</p>
            <h4>Limited Spots Available</h4>
        </ApplicationProcess>
    )
}

export const SectionSix = () => {
    return (
        <ApplicationProcess></ApplicationProcess>
    )
}