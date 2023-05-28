import React from 'react'
import FormLayout from '../../components/style/FormLayout'

export default function SignupPage() {
    return (
        <FormLayout>
            <h2 className="a11y-hidden">회원가입 폼</h2>
            <label htmlFor="inputName">닉네임</label>
            <input id="inputName" className="input-name" type="text"/>
            <label htmlFor="inputEmail">이메일</label>
            <input id="inputEmail" className="input-email" type="email"/>
            <label htmlFor="inputPw">비밀번호</label>
            <input id="inputPw" className="input-pw" type="password"/>
            <label htmlFor="inputPwConfirm">비밀번호</label>
            <input id="inputPwConfirm" className="input-pwConfirm" type="password"/>
            <button type="submit" className="btn-signin">회원가입</button>
        </FormLayout>
    )
}
