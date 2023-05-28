import styled from "styled-components";

const CardStyle = styled.article`
    width: 220px;
    height: 441px; 
    background: white;
    border: 1px solid #BDBDBD;
    border-radius: 10px;
    padding: 19px 20px 11px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    img.thumbnail {
        width: 180px;
        aspect-ratio: 180/250;
        object-fit: cover;
        border: 1px solid #BDBDBD;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h3 {
        font-size: 16px;
        font-weight: 900;
        margin: 14px 0px 10px;
        text-align: start;
    }
    ul {
        font-size: 14px;
    }
    li span {
        color: #828282;
    }
    .grade span::after {
        content: "";
        display: inline-block;
        width: 13px;
        aspect-ratio: 1/1;
        background: url("../../assets/image/star-icon.svg") no-repeat 0 0 / 1em;
        margin-left: 3px;
    }
    .option {
        font-size: 14px;
        font-weight: bold;
        width: 100%;
        height: 41px;
        bottom: 0;
        left: 0;
        background: #f2f2f2;
        position: absolute;
        border-top: 1px solid #BDBDBD;
    }
    .option button {
        width: 50%;
        box-sizing: border-box;
        padding: 12px;
    }
`

export default function Card() {
    const heartIcon = "../../assets/image/empty-heart.svg";
    return (
        <CardStyle>
            <img src="image" className="thumbnail"/>
            <h3>제목</h3>
            <ul>
                <li><span>인원</span> 판타지</li>
                <li class="grade"><span>평점</span> 9.05</li>
                <li><span>장르</span> 2021.03.27</li>
                <li><span>플레이 타임</span> 15분</li>
            </ul>
            <div class="option">
                <button type="button"><img src={heartIcon}/>찜하기</button>
                <button type="button">상세정보</button>
            </div>
        </CardStyle>
    )
}

