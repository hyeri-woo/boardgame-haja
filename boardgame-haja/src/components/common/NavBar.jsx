import styled from "styled-components";
import React from 'react'
import { useState } from "react";
import Filter from './Filter'
import { useNavigate } from "react-router-dom";

const NavStyle = styled.nav`
    width: 650px;
    border-top: 2px solid #BDBDBD;
    margin: 0 auto;
    font-size: 16px;
    color: #828282;
    padding: 5px;
    ul {
        display: flex;
        justify-content: center;
        gap: 30px;
        button {
            padding: 10px;
            width: 80px;
        }
        button.active {
            color: black;
            font-weight: bold;
        }
        button:hover {
            background: #b5b5b5;
            color: white;
        }
    }
`

export default function NavBar({signin, mypage}) {
    const [isFilter, setFilter] = useState(false);
    const navigate = useNavigate();
    const filterToggle = () => {
        setFilter(prev=>!prev);
    }
    const activeNavigate = (link) => (event) => {
        const btnGroup = document.querySelectorAll("button");
        btnGroup.forEach(item => {
            item.classList.remove("active");
        })
        event.target.classList.add("active");
        navigate(`/${link}`);
    }
    if(signin) {
        return (
            <NavStyle>
                <ul>
                    <li><button type="button" onClick={activeNavigate("login")}>로그인</button></li>
                    <li><button type="button" onClick={activeNavigate("signup")}>회원가입</button></li>
                </ul>
            </NavStyle>
        )
    }
    if(mypage) {
        return (
            <NavStyle>
                <ul>
                    <li><button className="active">회원정보</button></li>
                    <li><button>찜 리스트</button></li>
                </ul>
            </NavStyle>
        )
    }

    return (
        <NavStyle>
            <ul>
                <li><button type="button" onClick={activeNavigate("ranking/1")}>랭킹순</button></li>
                <li><button type="button">카테고리별</button></li>
                <li><button type="button" onClick={filterToggle}>필터 <span> {isFilter?"-":"+"}</span></button></li>
            </ul>
            {!isFilter || <Filter/>}
        </NavStyle>
    )
}
