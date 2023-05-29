import React, {useState} from 'react'
import FormLayout from '../../components/style/FormLayout'

export default function LoginPage() {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });
    return (
        <FormLayout>
            <h2 className="a11y-hidden">로그인 폼</h2>
            <label htmlFor="inputEmail">이메일</label>
            <input id="inputEmail" className="input-email" type="email"/>
            <label htmlFor="inputPw">비밀번호</label>
            <input id="inputPw" className="input-pw" type="password"/>
            <button type="submit" className="btn-login">로그인</button>
        </FormLayout>
    )
}
