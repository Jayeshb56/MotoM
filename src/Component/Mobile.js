import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Mobile.css";
import { Box , Card, Typography , CardMedia ,CardActions , CardContent, Button } from "@mui/material"







  
const Mobile = () => {
  return (
    <div>
     <div className="mobile">
      <Box className="box"  textAlign="center"> 
        <Card className="card">
         
          <CardMedia
            component = "img"
            height='350px'
            image="https://img.freepik.com/free-photo/close-up-hand-with-painting-pallete_23-2148915877.jpg?w=826&t=st=1688441263~exp=1688441863~hmac=b744a0c5237b5042f1a8217542aee5dfef6015150ce8cdfc91b93ea88e4829a5"
          />
          <CardContent>
          <Typography variant="h4">Jayesh</Typography>
          
          </CardContent>
          <CardActions className="cardaction">
            <Button size='large' >Buy</Button>
          </CardActions>

        </Card>

      </Box>
      
</div>
</div>
  );
}
  
export default Mobile;