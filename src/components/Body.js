import { styled } from "styled-components";

import { OverviewContainer } from "./OverviewContainer";
import { TransactionContainer } from "./TransactionContainer";
import { PaginationContainer } from "./PaginationContainer";

const Master= styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
padding: 32px;`

export function Body (){
    return (
        <Master>
            <OverviewContainer/>
            <TransactionContainer/>
        </Master>
    )
}