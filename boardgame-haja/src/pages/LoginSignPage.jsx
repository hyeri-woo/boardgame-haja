import React from 'react'
import { BigLogo } from '../components/common/Logo'
import LoginForm from './form/LoginForm'
import SignUpForm from './form/SignUpForm'
import PageLayout from '../components/style/PageLayout'
import NavLayout from '../components/style/NavLayout'
import MainLayout from '../components/style/MainLayout'

export default function LoginSign() {
    return (
        <PageLayout>
            <header>
                <BigLogo/>
                <NavLayout>
                    <ul>
                        <li><button className="active">로그인</button></li>
                        <li><button>회원가입</button></li>
                    </ul>
                </NavLayout>
            </header>
            <MainLayout>
                <LoginForm/>
                {/* <SignUpForm/> */}
            </MainLayout>
        </PageLayout>
        
    )
}
