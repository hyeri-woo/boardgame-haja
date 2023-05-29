import {SmallLogo} from './Logo'
import styled from "styled-components"
import searchIcon from "../../assets/image/search-icon.svg"

const SearchFormStyle = styled.form`
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    input {
        background: #FFFFFF;
        border: 2px solid #58A942;
        border-radius: 10px;
        width: 400px;
        color: #58A942;
        padding: 15px 20px;
        font-size: 20px;
        &::placeholder {
            color: #A0D792;
        }
    }
    button {
        transform: translate(-45px, 9px);
    }
`

export default function SearchBox() {
    return (
        <>
            <SmallLogo/>
            <SearchFormStyle>
                <label htmlFor="inputSearch" className="a11y-hidden">검색창</label>
                <input type="text" id="inputSearch" placeholder="보드게임을 검색해보세요."/>
                <button type="submit"><img src={searchIcon} alt=""/></button>
            </SearchFormStyle>
        </>
    )
}
