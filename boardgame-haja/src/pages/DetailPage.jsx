import React, {useState} from 'react'
import PageLayout from '../components/style/PageLayout'
import NavLayout from '../components/style/NavLayout'
import SearchBox from '../components/common/SearchBox'
import LoginSign from '../components/common/LoginSign'
import heartIcon from "../assets/image/empty-heart.svg"
import {DetailHeader, DetailMainLayout, ImageWrapperStyle, InfoWrapperStyle} from "../components/style/DetailStyle"


export default function DetailPage() {
  return (
    <PageLayout>
        <DetailHeader>
            <SearchBox/>
            <LoginSign/>
            <button className="btn-back" type="button">
              &#60; 목록으로 돌아가기
            </button>
            <NavLayout>
              <h2>상세정보</h2>
            </NavLayout>
        </DetailHeader>
        <DetailMainLayout>
            <ImageWrapperStyle>
              <img src="image" className="main-image"/>
              <button type="button"><img src={heartIcon} className="heart-image"/>찜하기</button>
            </ImageWrapperStyle>
            <InfoWrapperStyle>
              <div class="title-wrapper">
                <span className="ranking">#91</span>
                <h3 style={{fontSize:"40px", fontWeight:"bold"}}>달무티</h3>
              </div>
              <ul>
                <li>인원<span>1-4명</span></li>
                <li>플레이 타임<span>15분</span></li>
                <li>사용 연령<span>12세 이상</span></li>
                <li>테마<span>공상 과학</span></li>
                <li>난이도<span>3.15/5</span></li>
                <li>평점<span>8.9/10</span></li>
              </ul>
            </InfoWrapperStyle>
        </DetailMainLayout>
    </PageLayout>
  )
}
