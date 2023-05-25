import styled from "styled-components";

const NavLayout = styled.nav`
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
        li {
            padding: 10px;
        }
        li.active {
            color: black;
            font-weight: bold;
        }
        li:hover {
            background: #b5b5b5;
            color: white;
        }
    }
`

export default NavLayout;