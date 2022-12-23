import { Box } from "@mui/system";
import {useState, useEffect} from 'react' 
import { postApi } from "../api/post";
import { Post } from "../models";

function Pages() {
const [userPosts, setUserPosts] = useState<Post[]>([])
console.log(userPosts);


useEffect(() =>{
    postApi.getAll().then(setUserPosts)
},[])
  return (<Box>

    

  </Box>);
}

export default Pages;
