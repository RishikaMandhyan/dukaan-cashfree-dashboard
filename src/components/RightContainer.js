import { styled } from "styled-components"

import { Header } from "./Header"
import { Body } from "./Body"


const Master= styled.div`
display: flex;
flex-direction: column;
background: #FAFAFA;
position: absolute;
left: 224px;
`



export function RightContainer(){

    return (
        <Master>
            <Header/>
            <Body/>
        </Master>
    )
}