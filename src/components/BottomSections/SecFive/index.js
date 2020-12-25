import React from 'react'
import {PartnerBox, IconBox, SmallerIconBox} from "./style";
import logo from './wonder-1.svg'
import logo1 from './big-planet.svg'
import logo2 from './logo-blender.svg'
import logo3 from './saskatoon-blades.svg'



const Partnership = () => {
    return (
        <PartnerBox>
            <h1>In Partnership with Intuit and Treehouse</h1>
            <img src={logo} alt="logo"/>
            <IconBox>
                <SmallerIconBox>
                    <img src={logo3} alt="a logo"/>
                    <h2>Blades</h2>
                </SmallerIconBox>

                <SmallerIconBox>
                    <img src={logo1} alt="a logo"/>
                    <h2>Big Planet</h2>
                </SmallerIconBox>

                <SmallerIconBox>
                    <img src={logo2} alt="a logo"/>
                    <h2>Logo Blender</h2>
                </SmallerIconBox>
            </IconBox>
            <h3>Intuit is a mission-driven, global financial platform company. They use AI, data, machine learning, and other emerging technologies to provide breakthrough solutions to our customers’ most pressing financial challenges. Their innovative products-including TurboTax, QuickBooks, and Mint-help 57 million customers around the world prosper. They’re committed to helping individuals realize their professional potential, and we’re looking for talented software engineers, data scientists, and other technologists to join our team.</h3>
        </PartnerBox>
    )
}

export default Partnership;