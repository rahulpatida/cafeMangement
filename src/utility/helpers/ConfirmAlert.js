import React, { useEffect } from 'react'
import { Spinner } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import { FM } from './common'

const MySwal = withReactContent(Swal)
/**
 * Show Alert with confirm
 */
const ConfirmAlert = ({
    itemId = null,
    title = null,
    text = null,
    enableNo = false,
    icon = 'warning',
    confirmButtonText,
    showCancelButton = true,
    successIcon = "success",
    successTitle = null,
    successText = null,
    failedIcon = "error",
    failedTitle = null,
    failedText = null,
    onClickYes = () => { },
    onClickNo = () => { },
    children,
    id = "",
    style = {},
    className = {},
    onClose = () => { },
    onSuccess = false,
    onFailed = false,
    color = "text-success"
}) => {

    title = title ? (title) : ("are-you-sure")
    text = text ? (text) : ("you-wont-be-able-to-revert-this")
    confirmButtonText = confirmButtonText ? (confirmButtonText) : ("yes")
    // Success
    successTitle = successTitle ? (successTitle) : ("deleted")
    successText = successText ? (successText) :("item-deleted")
    // Failed
    failedTitle = failedTitle ?(failedTitle) :("failed")
    failedText = failedText ?(failedText) :("item-deleted-failed")

    useEffect(() => {
        if (onSuccess) {
            MySwal.fire({
                onDestroy: () => { onClose() },
                icon: successIcon,
                title: successTitle,
                text: successText,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                onClose(true, itemId)
            })
        }
    }, [onSuccess])

    useEffect(() => {
        if (onFailed) {
            MySwal.fire({
                onDestroy: () => { onClose() },
                icon: failedIcon,
                title: failedTitle,
                text: failedText,
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                onClose(false)
            })
        }
    }, [onFailed])

    const popup = () => {
        return MySwal.fire({
            title,
            text,
            icon,
            showDenyButton: enableNo,
            showCancelButton,
            confirmButtonText,
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ms-1',
                denyButton: 'btn btn-warning ms-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            console.log(result?.value)
            if (result.value === true) {
                onClickYes()
                MySwal.fire({
                    title: <>
                        <div className=''>
                            <Spinner animation="border" color='danger' size={"lg"}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </>,
                    text: "Please Wait",
                    showConfirmButton: false,
                    showCancelButton: false,
                    allowOutsideClick: false
                })
            } else if (result.value === false) {
                onClickNo()
                MySwal.fire({
                    title: <>
                        <div className=''>
                            <Spinner animation="border" color='danger' size={"lg"}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </>,
                    text: "Please Wait",
                    showConfirmButton: false,
                    showCancelButton: false,
                    allowOutsideClick: false
                })
            }
        })
    }

    return (
        <>
            <span role="button" onClick={popup} className={className} style={style} id={id}>
                {children}
            </span>
        </>
    )

}

export default ConfirmAlert