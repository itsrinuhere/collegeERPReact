import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default ({data})=>{
        return (data.length==0?<p>Empty</p>:
        <Grid container spacing={2}>
            {data.map(i=>{
                return <>
                 <Grid item xs={8}>
                    <Item>{i}</Item>
                </Grid>
                </>
            })}
               
        </Grid>
        );

}