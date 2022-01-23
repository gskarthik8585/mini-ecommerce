import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../container'
import {
    useGetTotalProductsInCart, useGetUserIsLoggedIn, useShowLoginModal,
    useClearCurrentUserOnLogout, useShowToastMessage, useGetloggedInUserDetails
} from '../../utils/customhooks'
import './styles.scss'

const Header = () => {

    const totalProductsInCart = useGetTotalProductsInCart();
    const { showLoginModal } = useShowLoginModal()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useGetUserIsLoggedIn()
    const loggedInUserDetails = useGetloggedInUserDetails()
    const { showToastMessage } = useShowToastMessage()
    const { clearCurrentUserOnLogout } = useClearCurrentUserOnLogout()

    const showLoginModalForGuests = (e) => {
        if (!isLoggedIn) {
            dispatch(showLoginModal())
        }
    }

    const logout = (e) => {
        dispatch(clearCurrentUserOnLogout())
        navigate('/')
        dispatch(showToastMessage({ message: 'You have logged out successfully', isSuccess: true, isError: false }))
    }

    const loggedInUser = isLoggedIn ? loggedInUserDetails.email.substring(0, loggedInUserDetails.email.indexOf('@')) : null

    return (
        <header className="position-fixed w-100">
            <Container className="h-100 w-100 d-flex justify-content-between align-items-center">
                <Link to={'/'} className="left-area d-flex justify-content-center align-items-center">
                    <img src="/Decathlon-Logo.svg" alt="decathlon-logo" />
                </Link>
                <div className="right-area d-flex h-100">
                    <span className={`action-btn sign-in-button text-center position-relative ${isLoggedIn ? 'logged-in' : ''}`} role="button" onClick={showLoginModalForGuests}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy44NzMiIGhlaWdodD0iMjIuNTE3IiB2aWV3Qm94PSIwIDAgMTcuODczIDIyLjUxNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAzKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNS41LDEwLjQyN0E0Ljk5MSw0Ljk5MSwwLDAsMSwxMC41Myw1LjIxNmE0Ljk3Miw0Ljk3MiwwLDEsMSw5LjkzMiwwQTQuOTgsNC45OCwwLDAsMSwxNS41LDEwLjQyN1ptMC04LjkyNmEzLjQ4LDMuNDgsMCwwLDAtMy40NzEsMy43MTUsMy40NzMsMy40NzMsMCwxLDAsNi45MywwQTMuNDc1LDMuNDc1LDAsMCwwLDE1LjUsMS41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuNTY4KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNLjczMiw0MS42MjVBLjc1Ljc1LDAsMCwxLC4yLDQxLjQwN2EuNzUuNzUsMCwwLDEtLjIyMS0uNjcyTDEuODA5LDMxLjJhLjc1Ljc1LDAsMCwxLC43NS0uNjEySDE1LjcxNGEuNzUuNzUsMCwwLDEsLjc1LjU5M2wxLjM2Miw2LjM1NmEuNzUuNzUsMCwwLDEtLjU4OS44OTNMLjg3NSw0MS42MjVhLjU5My41OTMsMCwwLDEtLjE0MywwWm0yLjQzNS05LjUzNC0xLjUsNy44MzUsMTQuNTEzLTIuOC0xLjA3My01LjAzMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDMgLTE5LjExMikiLz48L2c+PC9nPjwvc3ZnPg==" alt="My Account" />
                        <p
                            className="m-0 d-flex flex-column"
                        >{isLoggedIn ? 'My Account' : 'Sign In'}</p>
                        {
                            isLoggedIn && (
                                <ul className="dropdown-menu">
                                    <li><span className="dropdown-item disabled user-name text-truncate">Hi <span className="fw-bold" title={loggedInUser}>{loggedInUser} </span></span></li>
                                    <li><span className="dropdown-item" onClick={logout}>Logout</span></li>
                                </ul>
                            )
                        }
                    </span>
                    <Link to={'/cart'} className="action-btn cart-button position-relative" role="button">
                        {totalProductsInCart > 0 && <span className="cart-item-number position-absolute">{totalProductsInCart}</span>}
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4xNTUiIGhlaWdodD0iMjEuNDk5IiB2aWV3Qm94PSIwIDAgMjQuMTU1IDIxLjQ5OSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMy40MzEsMTguNWEuODExLjgxMSwwLDAsMS0uNzc1LS41NzZMOS4xODgsNi41NDFBLjgxNC44MTQsMCwwLDEsOS45NjcsNS40OUgyOC43ODVBLjgxMS44MTEsMCwwLDEsMjkuNiw2LjN2OC45MjRhLjgxMS44MTEsMCwwLDEtLjY4Ni44MTFMMTMuNTUzLDE4LjVaTTExLjA2Miw3LjExMywxNCwxNi43NzlsMTMuOTctMi4yNTVWNy4xMTNabTE3LjcyMyw4LjExM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjQ0MSAtMy4yNjMpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMy43ODYsNDQuMDg1YTMuMDQyLDMuMDQyLDAsMSwxLDMuMDM4LTMuMDM4QTMuMDQyLDMuMDQyLDAsMCwxLDIzLjc4Niw0NC4wODVabTAtNC40NjJhMS40MiwxLjQyLDAsMSwwLDEuNDE2LDEuNDIsMS40MiwxLjQyLDAsMCwwLTEuNDE2LTEuNDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMzI4IC0yMi41ODUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik00NS43NTYsNDQuMDg1YTMuMDQyLDMuMDQyLDAsMSwxLDMuMDM4LTMuMDM4QTMuMDQyLDMuMDQyLDAsMCwxLDQ1Ljc1Niw0NC4wODVabTAtNC40NjJhMS40MiwxLjQyLDAsMSwwLDEuNDE2LDEuNDIsMS40MiwxLjQyLDAsMCwwLTEuNDE2LTEuNDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUuMzg2IC0yMi41ODUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik00LjYxOCw0LjE1YS44MTEuODExLDAsMCwxLS43NzEtLjU1NmwtLjU0LTEuNjIzTDEuMTc4LDMuMDIyQS44MTIuODEyLDAsMSwxLC40NTIsMS41N0wzLjQyMi4wODVBLjgxMS44MTEsMCwwLDEsNC41NTMuNTU2bC44MzYsMi41MzFBLjgxMS44MTEsMCwwLDEsNC42MTgsNC4xNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMyAwKSIvPjwvZz48L3N2Zz4=" alt="My Cart" />
                        <p className="m-0 d-flex flex-column">Cart</p>
                    </Link>
                </div>
            </Container>

        </header>
    )
}

export default Header