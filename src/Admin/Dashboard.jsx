
import  React, { useEffect } from 'react'
import Appbar from './Appbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Home from './SubViewer/Home'
import Employee from './SubViewer/Employee';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import axios from 'axios';
import StudentView from './SubViewer/StudentView';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
export default ()=>{
    const[data,setData]= React.useState([]);
    const[tab,setTab]=React.useState('home')
    useEffect(()=>{
            getStudentData();
    },[])
    const getdata=()=>{
    
    }
    const getStudentData=()=>{
        // if(data.length==0){
        //     const uri = "http://localhost:8080/api/student";
        //     axios.get(uri).then(res=>console.log(setData(res.data))).catch(e=>console.log(e));
        // }
    }
    const View=()=>{
        if(tab==='home'){
            return <>
            <Divider/>
            <Box>
                <Home/>
            </Box>
            </>
        }else if(tab=='employee'){
            return <>
            <Divider/>
            <Box>
                <Employee/>
            </Box>
            </>
        }else if(tab=='student'){
            return <>
            <Divider/>
            <Box>
                <StudentView/>
            </Box>
            </>
        }else if(tab=='setting'){
            return <>
            <p> settings</p>
            </>
        }
    }
    
    return <>
        <Appbar/>
        <Divider />
        <Grid container justifyContent="center" // Center horizontally
                alignItems="center" // Center vertically
                style={{ paddingTop:10}}>
            <Stack
                sx={{ paddingLeft: 10}}
                spacing={2}
                direction="row">
                <Button variant="outlined" onClick={() => setTab('home')}>Home</Button>
                <Button variant="outlined" onClick={() => setTab('employee')}>Employee</Button>
                <Button variant="outlined" onClick={() => setTab('student')}>Student</Button>
                <Button variant="outlined" onClick={() => setTab('setting')}> Settings</Button>
            </Stack>
        </Grid>
       
        {/* <StudentView data={data}/> */}
        <Box>
            <View/>
        </Box>
        {/* <TablePresenter data={data}/> */}
    </>
}