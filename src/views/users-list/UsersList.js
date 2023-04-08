import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { http } from 'src/utilits/http';
import Loading from 'src/components/loading';
import { IconPencil, IconTrash } from '@tabler/icons';

const useStyles = makeStyles({
  tableHeaderCell: {
    backgroundColor: '#5D87FF',
    color: '#fff',
  },
  tabelCell: {
    color: 'red',
    textAlign: 'center',
  },
});

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const classes = useStyles();

  const getUserData = () => {
    setLoading(true);
    http
      .get('/users/users/')
      .then((res) => {
        setUsers(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleDeleteClose = () => {
    setIsDeleteOpen(null);
  };

  const handleDeleteOpen = (id) => {
    setSelectedId(id);
    setIsDeleteOpen(true);
  };

  const deleteUser = (id) => {
    setLoading(true)
    http
      .delete(`/users/users/${selectedId}/`)
      .then((res) => {
        handleDeleteClose(false)
        getUserData();
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      });
  };

  const DeleteUser = (
    <Dialog open={isDeleteOpen}>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this user</DialogContentText>
        <DialogActions>
          <Button
            onClick={() => {
              handleDeleteClose();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              deleteUser(selectedId);
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="users_list-admin">
      {loading && <Loading />}
      {DeleteUser}
      <h2>Users</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Sl no.</TableCell>
              <TableCell className={classes.tableHeaderCell}>Name</TableCell>
              <TableCell className={classes.tableHeaderCell}>Email</TableCell>
              <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {/* <button
                      style={{
                        border: 'none',
                        outline: 'none',
                        margin: '0 5px',
                        cursor: 'pointer',
                        color: 'blue',
                      }}
                    >
                      <IconPencil size={16} />
                    </button> */}
                    <button
                      style={{
                        border: 'none',
                        outline: 'none',
                        margin: '0 5px',
                        cursor: 'pointer',
                        color: 'red',
                        background:"none"
                      }}
                      onClick={() => {
                        handleDeleteOpen(user.id);
                      }}
                    >
                      <IconTrash size={16} />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
            {isError && (
              <TableRow>
                <TableCell className={classes.tabelCell} colSpan={4}>
                  Something went wrong
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
