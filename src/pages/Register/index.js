import React,{ useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Links from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input';
import api from '../../services/api';
import swal from 'sweetalert';
import { Form } from '@unform/web';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Links color="inherit" href="https://material-ui.com/">
        Your Website
      </Links>{' '}
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  
}));

export default function SignUp() {
  const classes = useStyles();
  const formRef = useRef(null);
  const history = useHistory();


  async function handleRegister(data, { reset }) {
    const response = await api.post('/users', data);
    swal("Sua Conta foi Criada com sucesso", ``, "success");

    history.push('/')
  }

  return (
   
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crie sua conta
        </Typography>
        <Form ref={formRef} onSubmit={handleRegister} className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Primeiro Nome "
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Ultimo Nome"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email "
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
              />
            </Grid>
          </Grid>
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
          
          <Grid container justify="flex-end">
            <Grid item>
              <Link style={{textDecoration: 'none'}} to="/">
               Você ja tem uma conta? Acesse agora
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
    
  );
}