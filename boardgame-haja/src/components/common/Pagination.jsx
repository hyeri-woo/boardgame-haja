import styled from "styled-components";
import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from "react-router-dom";

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
    .btn-numbers {
        display: flex;
        gap: 10px;
    }
    button:hover {
        background: #ECECEC;
    }
    .active {
        background: #A0D792;
        color: white;
    }
`

function NumberButton({start, onClickBtn}) {
    const numList = [];
    for(let i=start; i<start+5; i++) {
        numList.push(<button type="button" onClick={onClickBtn}>{i}</button>)
    }
    return (
        <>
            {numList}
        </>
    )
}

export default function Pagination({currPage, setCurrPage}) {
    const [startPage, setStartPage] = useState(1);
    const btnGroup = document.querySelectorAll(".btn-numbers button");
    const navigate = useNavigate();
    useEffect(() => {
        if(startPage >= 1 && startPage <= 58) {
            btnGroup.forEach(item => {
                if(item.textContent == currPage) {
                    item.classList.add("active");
                }
            })
        }
    }, [startPage])

    useEffect(() => {
        if(startPage >= 1 && startPage <= 58) {
            btnGroup.forEach(item => {
                if(item.textContent == currPage) {
                    item.classList.add("active");
                }
            })
        }
        if(currPage-startPage >= 5) {
            if(currPage%5===0) {
                setStartPage(currPage-4);
            } else {
                setStartPage(currPage-(currPage%5-1));
            }
        }
    }, [currPage])

    const removeActivePage = () => {
        btnGroup.forEach(item => {
            item.classList.remove("active");
        })
    }

    const decrementPage = (event) => {
        if(startPage > 1) {
            setStartPage(prev => prev-5);
            removeActivePage();
        }
    }

    const incrementPage = (event) => {
        if(startPage < 58) {
            setStartPage(prev => prev+5);
            removeActivePage()
        }
    }

    const activePage = (event) => {
        setCurrPage(event.target.textContent);
        removeActivePage()
        event.target.classList.toggle("active");
        navigate(`/ranking/${event.target.textContent}`);
    }
    return (
        <PaginationStyle>
            <button type="button" onClick={decrementPage}>&#60;</button>
                <div className="btn-numbers">
            <NumberButton start={startPage} onClickBtn={activePage}/>
            </div>
            <button type="button" onClick={incrementPage}>&#62;</button>
        </PaginationStyle>
    )
}
