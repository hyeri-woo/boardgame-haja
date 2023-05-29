import {SmallLogo} from './Logo'
import styled from "styled-components"
import searchIcon from "../../assets/image/search-icon.svg"
import { getDataByKeyword } from '../../data/fetchData'
import { useNavigate } from 'react-router-dom'

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

export default function SearchBox({setData}) {
    const navigate = useNavigate();
    const onSearch = (event) => {
        event.preventDefault();
        const keyword = event.target.querySelector("#inputSearch").value;
        event.target.querySelector("#inputSearch").value = null;
        navigate(`../search/${keyword}`)
    }
    return (
        <>
            <SmallLogo/>
            <SearchFormStyle onSubmit={onSearch}>
                <label htmlFor="inputSearch" className="a11y-hidden">검색창</label>
                <input type="text" id="inputSearch" placeholder="보드게임을 검색해보세요."/>
                <button type="submit"><img src={searchIcon} alt=""/></button>
            </SearchFormStyle>
        </>
    )
}
