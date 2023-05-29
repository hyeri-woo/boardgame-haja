import React from 'react'
import { BigLogo } from '../components/common/Logo'
import LoginForm from './form/LoginForm'
import SignUpForm from './form/SignUpForm'
import PageLayout from '../components/style/PageLayout'
import NavLayout from '../components/common/NavBar'
import MainLayout from '../components/style/MainLayout'
import Header from '../components/common/Header'

export default function LoginSign({login}) {
    return (
        <PageLayout>
            <Header signin/>
            <MainLayout>
                {login?<LoginForm/>:<SignUpForm/>}
            </MainLayout>
        </PageLayout>
        
    )
}
