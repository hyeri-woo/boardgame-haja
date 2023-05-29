import React, {useState, useEffect} from 'react'
import PageLayout from '../components/style/PageLayout'
import MainLayout from '../components/style/MainLayout'
import Card from '../components/common/Card'
import Pagination from '../components/common/Pagination'
import styled from "styled-components";
import Header from '../components/common/Header'
import { fetchData, getDataByKeyword } from '../data/fetchData'
import { useParams, useLocation } from 'react-router-dom'

const ItemListStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
`

function ItemList({currPage, data}) {
    const itemList = [];
    let pageCnt = 0;
    if(data.length < currPage*8) {
        pageCnt = data.length;
    } else {
        pageCnt = currPage*8;
    }
    for(let i=(currPage-1)*8; i < pageCnt; i++) {
        itemList.push(<li key={data[i]?.id}>
            <Card data={data[i]}/>
        </li>)
    }
    return (
        <ItemListStyle>
            {itemList}
        </ItemListStyle>
    )
}

export default function HomePage() {
    const [filter, setFilter] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [data, setData] = useState([]);
    const {page} = useParams();
    const location = decodeURI(useLocation().pathname);
    // console.log(location);
    useEffect(() => {
        const getData = async() => {
            const db = await fetchData();
            setData(db);
        }
        getData();
    }, []);
    useEffect(() => {
        if(!page) {
            setCurrPage(1);
        } else {
            setCurrPage(page);
        }
    }, [page]);
    useEffect(() => {
        const getData = async() => {
            console.log(location.split("/"));
            if(location.split("/")[1] === "search") {
                console.log(location.split("/")[2]);
                const db = await getDataByKeyword(location.split("/")[2]);
                setData(db);
            }
        }
        getData();
        console.log(data);
    }, [location])
    return (
        <PageLayout>
            <Header setData={setData} search/>
            <MainLayout>
                <h2 className="a11y-hidden">랭킹순</h2>
                <ItemList currPage={currPage} data={data}/>
                <Pagination currPage={currPage} setCurrPage={setCurrPage}/>
            </MainLayout>
        </PageLayout>
    )
}
