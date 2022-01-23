import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    useGetUserIsLoggedIn, useHideLoginModal, useGetLoginModalObj,
    useShowToastMessage, useUpdateCurrentUserOnLogin
} from '../../utils/customhooks'
import { checkIfUserIsValid } from '../../utils/helpers'
import cx from 'classnames'
import './styles.scss'


const LoginModal = () => {


    const [state, setState] = React.useState({ username: '', password: '' });

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { hideLoginModal } = useHideLoginModal()
    const isLoggedIn = useGetUserIsLoggedIn()
    const { isOpen, navigateToOnSuccess } = useGetLoginModalObj()
    const { showToastMessage } = useShowToastMessage()
    const { updateCurrentUserOnLogin } = useUpdateCurrentUserOnLogin()

    const hideLoginPopupModal = () => {
        dispatch(hideLoginModal())
    }

    const onSubmit = (e) => {

        e.preventDefault()

        const { email, password } = state
        let message = ''
        let isError = false
        let isSuccess = false

        if (!email && !password) {

            isError = true
            isSuccess = false
            message = 'Please enter the email and password'

        } else if (!email && password) {

            isError = true
            isSuccess = false
            message = 'Please enter the email'

        } else if (email && !password) {

            isError = true
            isSuccess = false
            message = 'Please enter the password'

        } else {

            let emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gi

            if (!emailPat.test(email)) {

                isError = true
                isSuccess = false
                message = 'Please enter the email in the right format'

            } else {

                const userObject = checkIfUserIsValid({ email: state.email, password: state.password })

                if (!userObject) {

                    isError = true
                    isSuccess = false
                    message = 'Invalid credentials. Please try again.'

                } else {

                    isError = false
                    isSuccess = true
                    message = 'Logged In Successfully !'
                    dispatch(updateCurrentUserOnLogin({ ...userObject }))
                    hideLoginPopupModal()
                    navigate(navigateToOnSuccess)

                }
            }
        }

        dispatch(showToastMessage({ message, isError, isSuccess }))

    }

    const updateFormValues = (type, value) => {
        if (type === 'email') {
            setState(prevState => ({ ...prevState, email: value }))
        } else if (type === 'pwd') {
            setState(prevState => ({ ...prevState, password: value }))
        }
    }


    return (
        <>
            {
                isOpen && (
                    <>
                        <div className={cx('modal', 'login-modal', { 'show': isOpen, 'fade-in': isOpen, 'd-block': isOpen })}>
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h4 className="modal-title text-center w-100">Log In</h4>
                                        <button type="button" className="btn close-btn" onClick={(e) => hideLoginPopupModal()}>+</button>
                                    </div>

                                    <div className="modal-body">
                                        <form className="text-center m-auto" onSubmit={onSubmit}>
                                            <div className="mb-3 mt-3">
                                                <input
                                                    autocomplete="off"
                                                    type="email"
                                                    className="form-control text-center"
                                                    id="email"
                                                    placeholder="Enter email"
                                                    onChange={(e) => updateFormValues('email', e.target.value)}
                                                    name="email"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    autocomplete="off"
                                                    type="password"
                                                    className="form-control text-center"
                                                    id="pwd"
                                                    placeholder="Enter password"
                                                    onChange={(e) => updateFormValues('pwd', e.target.value)}
                                                    name="pswd"
                                                />
                                            </div>
                                            <button type="submit" className="submit-btn btn mt-2 mb-3">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('modal-backdrop', { 'show': isOpen })} onClick={(e) => hideLoginPopupModal()} />
                    </>
                )
            }

        </>
    )
}

export default LoginModal