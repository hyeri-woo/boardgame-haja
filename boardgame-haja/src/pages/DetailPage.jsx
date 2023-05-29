import React, {useState, useEffect} from 'react'
import PageLayout from '../components/style/PageLayout'
import Header from '../components/common/Header'
import {getDataById} from '../data/fetchData'
import heartIcon from "../assets/image/empty-heart.svg"
import {DetailMainLayout, ImageWrapperStyle, InfoWrapperStyle} from "../components/style/DetailStyle"
import { useParams } from 'react-router-dom'


export default function DetailPage() {
  const [data, setData] = useState({});
  const {id} = useParams();
  useEffect(() => {
    const getData = async() => {
      const db = await getDataById(id);
      setData(db);
    }
    getData();
  }, []);
  const player = `${data?.min_player}-${data?.max_player}명`
  return (
    <PageLayout>
        <Header search/>
        <DetailMainLayout>
            <ImageWrapperStyle>
              <img src={data?.image} className="main-image"/>
              <button type="button"><img src={heartIcon} className="heart-image"/>찜하기</button>
            </ImageWrapperStyle>
            <InfoWrapperStyle>
              <div class="title-wrapper">
                <span className="ranking">#{data?.ranking}</span>
                <h3 style={{fontSize:"40px", fontWeight:"bold"}}>{data?.name}</h3>
              </div>
              <ul>
                <li>인원<span>{player}</span></li>
                <li>플레이 타임<span>{data?.play_time}</span></li>
                <li>사용 연령<span>{data?.play_age}</span></li>
                <li>테마<span>{data?.theme}</span></li>
                <li>난이도<span>{data?.difficulty}/5</span></li>
                <li>평점<span>{data?.rate}/10</span></li>
              </ul>
            </InfoWrapperStyle>
        </DetailMainLayout>
    </PageLayout>
  )
}
