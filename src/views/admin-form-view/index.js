import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IconTrash } from '@tabler/icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loading from 'src/components/loading';
import QuestionCard from 'src/components/question-card';
import { http } from 'src/utilits/http';

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

const AdminFormView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const { id } = useParams();

  const classes = useStyles();

  const navigate= useNavigate();

  useEffect(() => {
    setLoading(true);
    http
      .get(`/questionare/${id}/question/`)
      .then((res) => {
        setLoading(false);
        if (res.data.results) {
          setData(res.data.results);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const deleteForm = () => {
    http
      .delete(`questionare/survey/${id}/`)
      .then((res) => {
        if (res.status < 300) {
          navigate('/admin-forms')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteForm = (
    <Dialog open={showDeletePopup}>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this form</DialogContentText>
        <DialogActions>
          <Button
            onClick={() => {
              setShowDeletePopup(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              deleteForm();
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );

  return (
    <div>
      {loading && <Loading />}
      {DeleteForm}
      <Button
        color="error"
        variant="contained"
        onClick={() => {
          setShowDeletePopup(true);
        }}
      >
        Delete Form
      </Button>
      <h2>Questions</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Sl no.</TableCell>
              <TableCell className={classes.tableHeaderCell}>Question</TableCell>
              <TableCell className={classes.tableHeaderCell}>Answer type</TableCell>
              {/* <TableCell className={classes.tableHeaderCell}>Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length > 0 ? (
              data.map((form, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{form.text}</TableCell>
                    <TableCell>{form.answer_type}</TableCell>
                    {/* <TableCell>
                      <button
                      style={{
                        border: 'none',
                        outline: 'none',
                        margin: '0 5px',
                        cursor: 'pointer',
                        color: 'blue',
                      }}
                    >
                      <IconPencil size={16} />
                    </button>
                      <button
                        style={{
                          border: 'none',
                          outline: 'none',
                          margin: '0 5px',
                          cursor: 'pointer',
                          color: 'red',
                        }}
                      >
                        <IconTrash size={16} />
                      </button>
                    </TableCell> */}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={4} className={classes.tabelCell}>
                  No Items
                </TableCell>
              </TableRow>
            )}
            {/* {isError && (
              <TableRow>
                <TableCell className={classes.tabelCell} colSpan={4}>
                  Something went wrong
                </TableCell>
              </TableRow>
            )} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminFormView;
