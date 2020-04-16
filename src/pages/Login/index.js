import React, { useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Links from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom'
import { Form } from '@unform/web';
import Input from '../../components/Input';
import api from '../../services/api';
import swal from 'sweetalert';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));



export default function SignIn() {
    const classes = useStyles();
    const formRef = useRef(null);
    const history = useHistory();


    async function handleLogin(data, {reset}) {
        const { email } = data;
       
        // { email: 'test@example.com', password: '123456' }
        const response = await api.post('/sessions', data);

       const { messageSenha, messageEmail, token} = response.data;

       if(messageSenha) {
        swal("Error", `${messageSenha}`, "error");
        }

       if(messageEmail) {
        swal("Error", `${messageEmail}`, "error");
        }

       if(token) {
        swal("Logado com Sucesso", `${email} Seja Bem vindo`, "success");
        history.push('/main');
        }
        
        reset();
      }

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Acessar Sistema
                </Typography>
                <Form ref={formRef} onSubmit={handleLogin} className={classes.form} >
                    <Input
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        
                    />
                    <Input
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Me Lembrar"
                    />
                    
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Entrar
                        </Button>
                   
                    <Grid container>
                        <Grid item xs>
                            <Links href="#" variant="body2">
                              
                            </Links>
                        </Grid>
                        <Grid item>
                            <Link style={{textDecoration: 'none', color: 'blue'}}to="/register">
                                "Don't have an account? Sign Up"
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </div>
            <Box mt={8}>
              
            </Box>
        </Container>
    );
}