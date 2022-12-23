import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { postApi } from "../../api/post";
import { Post } from "../../models";

function Posts() {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  console.log(userPosts);

  useEffect(() => {
    postApi.getAll().then(setUserPosts);
  }, []);

  return <Box>
    
  </Box>;
}

export default Posts;
