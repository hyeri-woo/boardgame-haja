import styled from "styled-components";
import MainLayout from './MainLayout'

const DetailMainLayout = styled(MainLayout)`
    display: flex;
    align-items: center;
    padding: 40px;
    gap: 40px;
`

const DetailHeader = styled.header`
    h2 {
        text-align: center;
        padding: 10px;
    }
    .btn-back {
        font-size: 20px;
        transform: translate(0px, 45px);
    }
`

const ImageWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .main-image {
        width: 300px;
        aspect-ratio: 180/250;
        object-fit: cover;
        border: 1px solid #BDBDBD;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    button {
        color: #838383;
        font-size: 25px;
        &:hover {
        color: black;
        }
    }
    .heart-image {
        margin-right: 10px;
        width: 18px;
    }
`

const InfoWrapperStyle = styled.div` 
    .title-wrapper {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
    }
    .ranking {
        background: #58A942;
        display: inline-block;
        color: white;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        text-align: center;
        padding: 29px 0;
        font-size: 25px;
        font-weight: bold;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        li {
        color: #959595;
        font-weight: bold;
        font-size: 20px;
        span {
            display: block;
            width: 171px;
            height: 89px;
            border: 3px solid #68CC58;
            border-radius: 5px;
            color: #58A942;
            font-size: 25px;
            text-align: center;
            padding: 27px 0%;
        }
        }
    }
`

export {DetailHeader, DetailMainLayout, ImageWrapperStyle, InfoWrapperStyle}