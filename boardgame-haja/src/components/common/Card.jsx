import { useNavigate } from "react-router-dom";
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
        border-right: 1px solid #BDBDBD;
    }
    .option button:hover {
        background: #BDBDBD;
    }
    .heart {
        background: url("../assets/image/empty-heart.svg") no-repeat 0 0 / 1em;
    }
`

export default function Card({data}) {
    // const heartIcon = "../../assets/image/search-icon.svg";
    const player = `${data?.min_player}-${data?.max_player}명` 
    const navigate = useNavigate();
    return (
        <CardStyle>
            <img src={data?.image} alt="" className="thumbnail"/>
            <h3 className="ellipsis">{data?.name}</h3>
            <ul>
                <li><span>인원</span> {player}</li>
                <li className="grade"><span>평점</span> {data?.rate}</li>
                <li><span>테마</span> {data?.theme}</li>
                <li><span>플레이 타임</span> {data?.play_time}</li>
            </ul>
            <div className="option">
                <button type="button"><span className="heart"/>찜하기</button>
                <button type="button" onClick={() => navigate(`/detail/${data?.ranking}`)}>상세정보</button>
            </div>
        </CardStyle>
    )
}

