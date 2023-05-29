import SearchBox from './SearchBox'
import LoginSign from './LoginSign'
import NavBar from './NavBar'
import { BigLogo } from './Logo'


export default function Header({search, logged, signin, detail, mypage}) {
    return (
        <header>
            {search ? <SearchBox/> : <BigLogo/>}
            {logged ? <LoginSign logged/> : <LoginSign/>}
            {search ? <NavBar/> : (signin ? <NavBar signin/> : <NavBar mypage/>)}
        </header>
    )
}
