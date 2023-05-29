import styled from "styled-components"

const BigLogoStyle = styled.h1`
    color: #58A942;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    padding-bottom: 20px;
`

const SmallLogoStyle = styled(BigLogoStyle)`
    color: #58A942;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    padding-bottom: 5px;
`

function BigLogo() {
    return (
        <BigLogoStyle>BOARDGAME HAJA</BigLogoStyle>
    )
}

function SmallLogo() {
    return (
        <SmallLogoStyle>BOARDGAME HAJA</SmallLogoStyle>
    )
}


export {BigLogo, SmallLogo};
