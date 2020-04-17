import React, { useEffect, useState, useRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Main from '../../components/Main';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Modal from '../../components/Modal';
import api from '../../services/api';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Input from '../../components/Input';
import { Form } from '@unform/web';
import swal from 'sweetalert';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#19181F',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },

  deleteIcon: {
    margin: theme.spacing(-0.5),
    right: theme.spacing(0),
    bottom: theme.spacing(0),
    background: ' #b71c1c',
    '&:hover': {
      backgroundColor: '#f44336'
    }
  },

  editIcon: {
    margin: theme.spacing(-0.5),
    right: theme.spacing(0),
    bottom: theme.spacing(0),
  },

  addIcon: {
    margin: theme.spacing(-0.5),
    right: theme.spacing(-1),
    bottom: theme.spacing(1.5),
    backgroundColor: '#52b202',
    '&:hover': {
      backgroundColor: '#76ff03',
    }
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#7159c1',

  },

  textfield: {
    backgroundColor: 'white',
    borderRadius: 10
  }


}));



export default function Clients() {
  const classes = useStyles();
  const formRef = useRef(null);

  const [client, setClient] = useState(['']);

  async function loadTable() {
    const response = await api.get('/clients');

    const clients = response.data;

    setClient(clients);
  }

  async function handleSubmit(data, { reset }) {
    const response = await api.post('/clients', data);

    const { message, cpf, email } = response.data;

    if (cpf) {
      swal("Atenção!", `${cpf}`, "warning");
    }

    if (email) {
      swal("Atenção!", `${email}`, "warning");
    }

    if ((cpf) && (email)) {
      swal("Good job!", "O cpf e o email ja estão cadastrados", "warning");
    }

    swal("Sucesso", `${message}`, "success");

    reset();
  }

  async function deleteClient(id) {
    const response = await api.delete(`/clients/${id}`);

    const message = response.data;

    swal("Excluído", `${message}`, "success");
  }

  async function alterClient(data, { reset }) {
    const { id, name, email, cpf } = data;

    const response = await api.put(`/clients/${id}`, {
      name,
      email,
      cpf
    });

    const { message } = response.data;

    console.log(message)
    swal("Sucesso", `${message}`, "success");

    reset();
  }

  async function getClient(id) {
    const response = await api.get(`/clients/${id}`);

    const { _id } = response.data;

    return _id;
  }


  useEffect(() => {
    loadTable();
  }, [client]);



  return (
    <>
      <Main title="CADASTRO SIMPLES DE UM CLIENTE">
        <Modal openModal={<Tooltip title="Cadastrar Cliente" aria-label="add">
          <Fab color="primary" size='large' className={classes.addIcon}>
            <AddIcon />
          </Fab>
        </Tooltip>}
        >
          {/**CORPO DO MODAL QUE SERÁ O FORM DO CADASTRO DO CLIENTE */}
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <h1 style={{ color: 'black' }}>Cadastre os Dados</h1>
              <Form ref={formRef} onSubmit={handleSubmit} className={classes.form} noValidate>
                <Input
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  name="name"
                  className={classes.textfield}
                  color="secondary"

                />
                <Input
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  name="cpf"
                  label="CPF"
                  id="cpf"

                  className={classes.textfield}
                  color="secondary"
                />
                <Input
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail Address"
                  name="email"


                  className={classes.textfield}
                  color="secondary"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Salvar
                  </Button>

              </Form>
            </div>
          </Container>


        </Modal>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell align="right">CPF</StyledTableCell>
                <StyledTableCell align="right">E-mail</StyledTableCell>
                <StyledTableCell align="right">Excluir</StyledTableCell>
                <StyledTableCell align="right">Alterar</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {client.map((client) => (
                <StyledTableRow key={client._id}>
                  <StyledTableCell component="th" scope="row">
                    {client.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{client.cpf}</StyledTableCell>
                  <StyledTableCell align="right">{client.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Tooltip title="Add" aria-label="add" onClick={() => deleteClient(client._id)}>
                      <Fab color="primary" size='small' className={classes.deleteIcon}>
                        <DeleteOutlineIcon />
                      </Fab>
                    </Tooltip>
                  </StyledTableCell>

                  <StyledTableCell align="right">



                    <Modal openModal={
                      <Tooltip title="Alterar" aria-label="Atlerar" onClick={() => getClient(client._id)}>
                        <Fab color="primary" size='small' className={classes.editIcon}>
                          <EditOutlinedIcon />
                        </Fab>
                      </Tooltip>
                    }>
                      <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                          <h1 style={{ color: 'black' }}>Altere os Dados</h1>
                          <Form ref={formRef} onSubmit={alterClient} className={classes.form} noValidate>
                            <Input
                              variant="filled"
                              margin="normal"
                              autoFocus='false'
                              fullWidth
                              id="id"
                              label="Id"
                              name="id"
                              className={classes.textfield}
                              color="secondary"
                              defaultValue={client._id}
                              disabled

                            />
                            <Input
                              variant="filled"
                              margin="normal"
                              required
                              fullWidth
                              id="name"
                              label="Nome"
                              name="name"
                              className={classes.textfield}
                              color="secondary"
                              defaultValue={client.name}

                            />
                            <Input
                              variant="filled"
                              margin="normal"
                              required
                              fullWidth
                              name="cpf"
                              label="CPF"
                              id="cpf"
                              className={classes.textfield}
                              color="secondary"
                              defaultValue={client.cpf}
                            />
                            <Input
                              variant="filled"
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="E-mail Address"
                              name="email"
                              className={classes.textfield}
                              color="secondary"
                              defaultValue={client.email}
                            />
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                            >
                              Alterar
                            </Button>
                          </Form>
                        </div>
                      </Container>
                    </Modal>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Main>
    </>
  );
}
