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
    button:not(:disabled):hover {
        background: #ECECEC;
    }
    .active {
        background: #A0D792;
        color: white;
    }
    button:disabled {
        color: #dddddd;
        cursor: initial;
    }
`

function NumberButton({start, onClickBtn, pageCnt}) {
    const numList = [];
    for(let i=start; i<start+5; i++) {
        if(i > pageCnt ){
            numList.push(<button type="button" onClick={onClickBtn} disabled>{i}</button>)
        } else {
            numList.push(<button type="button" onClick={onClickBtn}>{i}</button>)
        }
    }
    return (
        <>
            {numList}
        </>
    )
}

export default function Pagination({currPage, setCurrPage, numData}) {
    const [startPage, setStartPage] = useState(1);
    const btnGroup = document.querySelectorAll(".btn-numbers button");
    const navigate = useNavigate();
    const pageCnt = Math.ceil(numData/8);
    const location = decodeURI(useLocation().pathname);

    /*  */
    useEffect(() => {
        if(startPage >= 1) {
            btnGroup.forEach(item => {
                if(item.textContent == currPage) {
                    item.classList.add("active");
                } 
            })
        }
    }, [startPage])

    /*  */
    useEffect(() => {
        if(startPage >= 1) {
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
        if(currPage === "1") {
            setStartPage(1);
        }
    }, [currPage])

    /* 검색 후 currPage와 startPage 1로 리셋 */
    useEffect(() => {
        const locArr = location.split("/");
        if(locArr[1] === "search" && locArr.length === 3) {
            setCurrPage(1);
            removeActivePage();
            setStartPage(1);
        }
    }, [location])

    /* 모든 number 버튼의 active 삭제 */
    const removeActivePage = () => {
        btnGroup.forEach(item => {
            item.classList.remove("active");
        })
    }

    /* < 버튼 클릭 이벤트 핸들러 */
    const decrementPage = (event) => {
        if(startPage > 1) {
            setStartPage(prev => prev-5);
            removeActivePage();
        }
    }

    /* > 버튼 클릭 이벤트 핸들러 */
    const incrementPage = (event) => {
        if(startPage < pageCnt-5) {
            setStartPage(prev => prev+5);
            removeActivePage()
        }
    }

    /** number 버튼 클릭 이벤트 핸들러 
     * 1) currPage 현재 number 버튼으로 변경
     * 2) 모든 number 버튼 active 삭제
     * 3) currPage 버튼에만 active 추가
     * 4) routes에 page number 추가 후 navigate
    */
    const activePage = (event) => {
        setCurrPage(event.target.textContent);
        removeActivePage();
        event.target.classList.add("active");
        if(location.split("/")[1] === "search") {
            navigate(`/${location.split("/")[1]}/${location.split("/")[2]}/${event.target.textContent}`);
        } else if(location.split("/")[1] === "ranking") {
            navigate(`/${location.split("/")[1]}/${event.target.textContent}`);
        }
    }
    return (
        <PaginationStyle>
            <button type="button" onClick={decrementPage}>&#60;</button>
                <div className="btn-numbers">
            <NumberButton start={startPage} onClickBtn={activePage} pageCnt={pageCnt}/>
            </div>
            <button type="button" onClick={incrementPage}>&#62;</button>
        </PaginationStyle>
    )
}
