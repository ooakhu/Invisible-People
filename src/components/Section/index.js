import React from 'react'
import {SecondHeader, ThirdHeader, PictureContainer, WhyUs, Title, Icon, WhyBox, After,AfterBox,AfterInner, ApplicationProcess} from "./style"
import {ApplyBtn} from "../Buttons";


import pic1 from "./1.svg"
import pic2 from "./2.svg"
import pic3 from "./3.svg"
import pic4 from "./4.svg"
import pic5 from "./5.svg"
import pic6 from "./6.svg"
import diamond from "./bell (1).svg"
import living from "./living.svg"
import graduate from "./graduate.svg"
import money from "./money.svg"
import opportunities from "./opportunities.svg"

export const SectionOne = () => {
    return (
        <SecondHeader>
            <div style={{width:"50%", margin: "auto"}}>
                <p>
                    InvinciblePeople.org, HoverSys and Huskings are partnering to launch an intensive 6 months development
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
            <h1>What Makes Our Program Different</h1>
            <PictureContainer>
                <img src={pic1} alt="pic1"/>
                <img src={pic2} alt="pic2"/>
                <img src={pic3} alt="pic3"/>
                <img src={pic6} alt="pic5"/>
                <img src={pic4} alt="pic4"/>
                <img src={pic5} alt="pic5"/>
            </PictureContainer>
            <WhyUs>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><strong>Beginner Focused: </strong>You don't need any programming experience. If you are interested in becoming a software developer, we strongly encourage you to apply</p>
                    </Title>
                </WhyBox>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><strong>Learn & Earn: </strong>Instead of paying thousands upfront or losing a percentage of your income, you get to pay nothing. Yes, that's right. This program is free
                        and you'll even get stipends too.</p>
                    </Title>
                </WhyBox>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><strong>Virtual Program: </strong>This program is mostly virtual, however if you live in lagos, you will be encouraged to be at our weekly meetings. There will be alot to learn. But either ways, you will receive hardware, software and other technology tools to create an effective virtual learning environment.</p>
                    </Title>
                </WhyBox>
                <WhyBox>
                    <Icon><img src={diamond} alt="diamond"/></Icon>
                    <Title>
                        <p><strong>Launch a New Career: </strong>Upon completion of your program you will be assisted and equipped with the knowledged needed to land your first job in tech.</p>
                    </Title>
                </WhyBox>

            </WhyUs>
        </ThirdHeader>
    )
}

export const SectionThree = () => {

    return (
        <After>
            <h3>
                Many of us grapple with Imposter Syndrome, but guess what? Perfection isn't a requirement to apply. This program is designed with growth in mind! If the idea of learning new tech skills is something that excites you, don't hesitate.
            </h3>
            <AfterBox>
                <AfterInner>
                    <img src={opportunities} alt="man standing next to world symbol"/>
                    <h3>Access To Worldwide Opportunites</h3>
                    <p>Technology has taken over the world. By equiping yourself with sought after skills, the world is now your oyster. Go do great things!</p>
                </AfterInner>
                <AfterInner>
                    <img src={graduate} alt="graduation-cap"/>
                    <h3>Employable Skills</h3>
                    <br/>
                    <p>You will have no debt to pay after finishing the program and would have left the program with both technical, agile and leadership skills.</p>
                </AfterInner>
                <AfterInner>
                    <img src={money} alt="piggy-bank"/>
                    <h3>Increased Income</h3>
                    <br/>
                    <p>The average salary for people in tech is 2X more than the average private worker.<br/> And offers a better growth path</p>
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

// export const SectionFour = () => {
//     return (
//         <Apply>
//             <h2>Program Starts February 2022</h2>
//             <h2>Limited Spots Available</h2>
//         </Apply>
//     )
// }

export const SectionFive = () => {
    return (
        <ApplicationProcess>
            <h3>Application Process</h3>
            <p><strong>December 3rd, 2021: </strong>Program Applications Opens.</p>
            <p><strong>December 10th, 2021: </strong>Screening of Applications Begins.</p>
            <p><strong>December 17th, 2021: </strong>Application Closes For Batch One :( </p>
            <p><strong>December 27th, 2021: </strong>Final Round of Interviews begin (phone or video calls).</p>
            <p><strong>January 3rd, 2022: </strong>Offers are sent out to accepted applicants.</p>
            <ApplyBtn></ApplyBtn>
            <h2>Limited Spots Available</h2>
        </ApplicationProcess>
    )
}

// export const SectionSix = () => {
//     return (
//         <ApplicationProcess></ApplicationProcess>
//     )
// }