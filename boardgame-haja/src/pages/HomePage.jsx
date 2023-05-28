import React, {useState} from 'react'
import PageLayout from '../components/style/PageLayout'
import NavLayout from '../components/style/NavLayout'
import MainLayout from '../components/style/MainLayout'
import Card from '../components/common/Card'
import SearchBox from '../components/common/SearchBox'
import Filter from '../components/common/Filter'
import Pagination from '../components/common/Pagination'
import LoginSign from '../components/common/LoginSign'
import styled from "styled-components";

const ItemListStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
`

function ItemList() {
    const itemList = [];
    for(let i=0; i<8; i++) {
        itemList.push(<li><Card/></li>)
    }
    return (
        <ItemListStyle>
            {itemList}
        </ItemListStyle>
    )
}

export default function HomePage() {
    const [isFilter, setFilter] = useState(false);
    const filterToggle = () => {
        setFilter(prev=>!prev);
    }
    return (
        <PageLayout>
            <header>
                <SearchBox/>
                <LoginSign/>
                <NavLayout>
                    <ul>
                        <li><button className="active" type="button">랭킹순</button></li>
                        <li><button type="button">카테고리별</button></li>
                        <li><button type="button" onClick={filterToggle}>필터 <span> {isFilter?"-":"+"}</span></button></li>
                    </ul>
                    {!isFilter || <Filter/>}
                </NavLayout>
            </header>
            <MainLayout>
                <h2 className="a11y-hidden">랭킹순</h2>
                <ItemList/>
                <Pagination/>
            </MainLayout>
        </PageLayout>
    )
}
