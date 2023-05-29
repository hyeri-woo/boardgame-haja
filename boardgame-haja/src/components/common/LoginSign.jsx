import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginListStyle = styled.ul`
    display: flex;
    position: absolute;
    top: 45px;
    right: 45px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    gap: 10px;
    button {
        padding: 5px;
    }
    button:hover {
        background: #b5b5b5;
        color: white;
    }
`

export default function LoginSign({logged}) {
    const navigate = useNavigate();
    return (
        <LoginListStyle>
            { logged ? (
                <>
                    <li><button type="button" onClick={()=>{navigate("/mypage")}}>마이페이지</button></li>
                    <li><button type="button" onClick={()=>{navigate("/")}}>로그아웃</button></li>
                </>
                
                ) : (
                <>
                    <li><button type="button" onClick={()=>{navigate("/login")}}>로그인</button></li>
                    <li><button type="button" onClick={()=>{navigate("/signup")}}>회원가입</button></li>
                </>
                )
            }
        </LoginListStyle>
    )
}
