import styled from "styled-components";

const FooterStyle = styled.footer`
    bottom: 0%;
    width: 100%;
    background: #F2F2F2;
    div {
        width: 1200px;
        margin: 0 auto;
        & > * {
            width: 100%;
        }
    }
    h3 {
        border-bottom: 1px solid #C4C4C4;
        padding: 50px 0;
        font-size: 25px;
    }
    ul {
        display: flex;
        gap: 10px;
        color: #4F4F4F;
        padding: 36px 0;
    }
`


export default function Footer() {
    return (
        <FooterStyle>
            <div>
                <h3>보드게임하자</h3>
                <ul>
                    <li>(주)77ㅣ리77ㅣ리</li>
                    <li><strong>대표</strong> 양파쿵야</li>
                    <li><strong>사업자 번호</strong> 000-0000-0000</li>
                    <li>보드게임 페이지 제작업</li>
                    <li><strong>주소</strong> 야채부락리 마을</li>
                    <li>ⓒ 777</li>
                </ul>
            </div>
        </FooterStyle>
    )
}
