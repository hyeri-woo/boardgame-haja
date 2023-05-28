import styled from "styled-components";

const LoginListStyle = styled.ul`
    display: flex;
    position: absolute;
    top: 45px;
    right: 45px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    gap: 10px;
`

export default function LoginSign() {
    return (
        <LoginListStyle>
            <li><button>로그인</button></li>
            <li><button>회원가입</button></li>
        </LoginListStyle>
    )
}
