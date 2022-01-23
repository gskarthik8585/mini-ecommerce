import cx from 'classnames'
import React from 'react'
import { useHideToastMessage, useGetToastObject } from "../../utils/customhooks"
import './styles.scss'

const Toasts = () => {

    const { isOpen, message, isError, isSuccess } = useGetToastObject()

    const { dispatch, hideToastMessage } = useHideToastMessage()

    const hideToast = () => {
        dispatch(hideToastMessage())
    }

    React.useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                hideToast()
            }, 3000)
        }
    }, [isOpen])

    return (
        <div aria-atomic="true" aria-live="assertive"
            className={cx('toast', 'toast-wrapper', 'position-fixed', 'end-0', 'm-0', { 'slide-in': isOpen, 'show': isOpen })}
            role="alert"
        >
            <div className="toast-header position-relative p-0">
                <button
                    aria-label="Close"
                    className="btn-close"
                    type="button"
                    onClick={(e) => hideToast()}
                    className="btn close-btn position-absolute top-0 outline-none"
                >+</button>
            </div>
            <div className={cx('toast-body', { 'alert-success': isSuccess, 'alert-danger': isError })}>{message}</div>
        </div >
    )
}

export default Toasts