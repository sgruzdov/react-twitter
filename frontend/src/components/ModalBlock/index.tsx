import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

interface PropsType {
    children: React.ReactNode
    title: string
    visible?: boolean
    onClose: () => void
}

const ModalBlock: React.FC<PropsType> = ({ children, title, visible = false, onClose }) => {
    return (
        <Dialog open={visible} onClose={onClose}>
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={onClose}>
                    <CloseIcon style={{ fontSize: 26 }} color="primary"></CloseIcon>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
}

export default ModalBlock
