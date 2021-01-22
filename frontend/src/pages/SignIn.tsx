import React, { useState } from 'react'

import ModalBlock from '../components/ModalBlock'

import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        background: '#71C9F8',
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        '& ul': {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: 380,
            position: 'relative',
            '& li:not(:last-child)': {
                marginBottom: 40,
            },
            '& h6': {
                display: 'flex',
                color: '#fff',
                fontWeight: 700,
                fontSize: 20,
                '& svg': {
                    fontSize: 32,
                    marginRight: 15,
                },
            },
        },
    },
    blueSideBacIcon: {
        position: 'absolute',
        left: '80%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '250%',
        height: '250%',
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& button': {
            marginTop: 15,
        },
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    },
    loginSideFromField: {
        marginBottom: theme.spacing(3),
    },
}))

const SignIn: React.FC = () => {
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp' | undefined>(undefined)
    const classes = useStyles()

    const handleClickOpenSignIn = () => setVisibleModal('signIn')
    const handleClickOpenSignUp = () => setVisibleModal('signUp')
    const handleCloseModal = () => setVisibleModal(undefined)

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.blueSide}>
                    <TwitterIcon color="primary" className={classes.blueSideBacIcon} />
                    <ul>
                        <li>
                            <Typography variant="h6">
                                <SearchIcon />
                                Читайте о том, что вам интересно.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h6">
                                <PeopleOutlineIcon />
                                Узнайте, о чем говорят в мире.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h6">
                                <ModeCommentOutlinedIcon />
                                Присоединяйтесь к общению.
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className={classes.loginSide}>
                    <div className={classes.loginSideWrapper}>
                        <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                        <Typography className={classes.loginSideTitle} variant="h4" gutterBottom>
                            Узнайте, что происходит в мире прямо сейчас
                        </Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
                        <Button onClick={handleClickOpenSignUp} variant="contained" color="primary" fullWidth>
                            Зарегистрироваться
                        </Button>
                        <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
            <ModalBlock
                title="Войти в Твиттер"
                onClose={handleCloseModal}
                visible={visibleModal === 'signIn'}>
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField
                            className={classes.loginSideFromField}
                            autoFocus
                            id="email"
                            label="Email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            className={classes.loginSideFromField}
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                        <Button style={{ marginBottom: 15 }} variant="contained" color="primary" fullWidth>
                            Войти
                        </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>
            <ModalBlock
                title="Создайте учетную запись"
                onClose={handleCloseModal}
                visible={visibleModal === 'signUp'}>
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField
                            className={classes.loginSideFromField}
                            autoFocus
                            id="name"
                            label="Имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="name"
                            fullWidth
                        />
                        <TextField
                            className={classes.loginSideFromField}
                            id="email"
                            label="Email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            className={classes.loginSideFromField}
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                        <Button style={{ marginBottom: 15 }} variant="contained" color="primary" fullWidth>
                            Далее
                        </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>
        </>
    )
}

export default SignIn
