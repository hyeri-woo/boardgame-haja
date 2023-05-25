import styled from "styled-components";

const FormLayout = styled.form`
    width: 400px;
    margin: 30px auto;
    & > * {
        width: 100%;
        font-size: 16px;
    }
    label {
        display: inline-block;
        color: #767676;
        padding-bottom: 15px;
    }
    input {
        display: inline-block;
        border-bottom: 1px solid #DBDBDB;
        padding: 12px 0px;
        margin-bottom: 20px;
        &:hover {
            border-color: #58A942;
        }
    }
    button {
        background: #58A942;
        border-radius: 44px;
        color: white;
        padding: 20px;
        font-weight: bold;
        margin-top: 15px;
        &:hover {
            background: #3c772b;
        }
    }
`

export default FormLayout;