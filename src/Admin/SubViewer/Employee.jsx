import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';
import { Box,Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';
import axios from 'axios';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import {Grid} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   glassCard: {
//     background: 'rgba(255, 255, 255, 0.15)', // Background color with transparency
//     backdropFilter: 'blur(10px)', // Apply a blur filter
//     border: '1px solid rgba(255, 255, 255, 0.18)', // Add a subtle border
//     borderRadius: '8px', // Rounded corners
//     padding: theme.spacing(2), // Adjust the padding
//   },
//   cardContent: {
//     color: theme.palette.text.primary,
//   },
// }));
// import XLSX from 'xlsx';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default ()=>{
  const[data,setData]= React.useState([]);
 //let checkList=[];
  const [clicked, setClicked] = React.useState(false);
  // const classes = useStyles();
  React.useEffect(()=>{
    if(data.length==0){
      const uri = "http://localhost:8080/api/faculty";
      axios.get(uri).then(res=>setData(res.data));
  }
  });
  const DownloadCheckList=()=>{
   // checkList.map(i=>console.log(i));
  }
  return data.length==0?<>    
                <CircularProgress />
        </>:<>
        <Box sx={{maxWidth: 1080,backgroundColor:""}}>
        <Grid container spacing={2}>
          <Grid item xs={2}sx={{width:20}}>
            <Stack>
            <Button variant="outlined">filter</Button>
              <Button onClick={DownloadCheckList}> Download selected files as XL</Button>
              <Button>Share</Button>
            </Stack>
          </Grid>
            <Grid item xs={10}>
            <Stack sx={{maxwidth:'100%'}}>
            {
            data.map((i,index)=>{
              return<>
              <Card 

                key={i} 
                onClick={()=>{
                  setClicked(true);
                  //alert(i.studentid);
                  //handler to redirect the student profiler to load all the data from student Default schema
                }}
                // style={{ backgroundColor: clicked ? 'lightblue' : '#00A9FF' }}
                sx={{color:"#FFFFDD",backgroundColor:"#00A9FF",opacity:0.9,margin:1,borderBlockColor:"#4F4A45",borderRadius:5}}>
                {/* */}
                <CardHeader
              
                    avatar={
                      <Avatar sx={{width:120,height:120}}alt="not found" src="">
                            Demo
                      </Avatar>
                    }
                    action={
                     
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                       <Checkbox onClick={()=>{
                       //checkList.push(i);
                        }}/>
                        <Button variant="contained" color="primary" onClick={()=>{
                                         
                          }}>options</Button>
                         
    </div>
                    }
                    title={"Unique id: "+i.userid}
                    subheader={"Name:  "+i.name +" Gender :"+i.gender}
                    />
                  <CardContent>
                  <Grid container spacing={2}>
                      <Grid item xs={3}>
                          <Typography variant="body2" >
                            Department: {i.department?i.department:"N/A"}
                          </Typography>
                      </Grid>
                      <Grid item xs={3}>
                          <Typography variant="body2">
                          Email Id {i.emailid?i.emailid:"N/A"}
                          </Typography>
                      </Grid>
                      <Grid item xs={3}>
                            <Typography variant="body2">
                           Contact {i.contactnumber?i.contactnumber:"N/A"}
                            </Typography>
                      </Grid>
                      <Grid item xs={3}>
                            <Typography variant="body2">
                            Date of Birth :{i.dob?i.dob:"N/A"}
                            </Typography>
                      </Grid>
                      <Grid item xs={3}>
                            <Typography variant="body2">
                           Address: {i.address?i.address:"N/A"}
                            </Typography>
                      </Grid>
                      <Grid item xs={3}>
                            <Typography variant="body2">
                            Designation:{i.branch?i.branch:"N/A"}
                            </Typography>
                      </Grid>
                   
                    </Grid>
                    </CardContent>
              </Card>
              </>
            })}
            </Stack>
        </Grid>
        </Grid>
        </Box>
        
        </>
}