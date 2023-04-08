import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { IconFileAnalytics } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { http } from 'src/utilits/http';

const AdminForms = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    http
      .get('/questionare/survey/')
      .then((res) => {
        if (res.data.results) {
          setData(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Forms</h2>
      <Stack display={'flex'} flexDirection="row" gap={10} mt={5} flexWrap="wrap">
        {data.map((form, index) => {
          return (
            <Box key={index} textAlign="center" onClick={()=>navigate(`/admin-forms/${form.id}`)} cursor="pointer">
              <IconFileAnalytics size={70} color="#5D87FF" />
              <Stack>{form?.name}</Stack>
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default AdminForms;
