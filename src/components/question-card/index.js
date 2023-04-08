import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const QuestionCard = ({data,number}) => {
  return (
    <Stack>
        <Stack > {data?.text}</Stack>
        <Stack fontSize={16} display="flex" flexDirection="row">Answer type : <Box fontWeight={600} textTransform={"capitalize  "} color="#5D87FF">{data?.answer_type}</Box></Stack>
    </Stack>
  )
}

export default QuestionCard