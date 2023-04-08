import {
  Backdrop,
  Box,
  CircularProgress,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { IconFileAnalytics } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Loading from 'src/components/loading';
import { http } from 'src/utilits/http';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const UserForms = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    http
      .get('/questionare/survey/')
      .then((res) => {
        if (res.data.results) {
          setData(res.data.results);
        }
        setLoading(false);
      })
      .then((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h2>Forms</h2>
      <Stack display={'flex'} flexDirection="row" gap={10} mt={5} flexWrap="wrap">
        {data.map((form, index) => {
          return (
            <Box
              key={index}
              textAlign="center"
              onClick={() => navigate(`/user-submit-answer/${form.id}`)}
              cursor="pointer"
            >
              <IconFileAnalytics size={70} color="#5D87FF" />
              <Stack>{form?.name}</Stack>
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default UserForms;
