import styled from "styled-components";
import React, {useState} from 'react'

const PaginationStyle = styled.div`
    background: #FFFFFF;
    border: 3px solid #BDBDBD;
    border-radius: 10px;
    width: 300px;
    margin: 20px auto 0;
    display: flex;
    gap: 10px;
    padding: 10px;
    button {
        color: #BDBDBD;
        width: 30px;
        height: 30px;
        font-size: 15px;
        border-radius: 10px;
        font-weight: bold;
        padding: 7px;
    }
    button:hover {
        background: #ECECEC;
    }
    .active {
        background: #A0D792;
        color: white;
    }
`

function NumberButton({start}) {
    const numList = [];
    for(let i=start; i<start+5; i++) {
        numList.push(<button type="button">{i}</button>)
    }
    return (
        <>
            {numList}
        </>
    )
}

export default function Pagination() {
    const [startPage, setStartPage] = useState(1);
    const decrementPage = () => {
        if(startPage > 1) {
            setStartPage(prev => prev-1);
        }
    }
    const incrementPage = () => {
        setStartPage(prev => prev+1);
    }
    return (
        <PaginationStyle>
            <button type="button" onClick={decrementPage}>&#60;</button>
            <NumberButton start={startPage}/>
            <button type="button" onClick={incrementPage}>&#62;</button>
        </PaginationStyle>
    )
}
