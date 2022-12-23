import {
  Avatar,
  Box, Link, Stack, Typography
} from "@mui/material";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { postApi } from "../../api/post";
import { Post } from "../../models";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postApi.getAll().then(setPosts);
  }, []);

  return (
    <Box>
      {posts.map((post) => (
        <Box paddingTop="15px" key={post.id}>
          <Box
            width="650px"
            mx="auto"
            border="1px solid #e0e0e0"
            borderRadius="10px"
          >
            <Box p="24px" bgcolor="white">
              <Stack flexDirection="row" gap="8px" alignItems="center">
                <Avatar src="https://res.cloudinary.com/practicaldev/image/fetch/s--VSWDxyxd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/21839/3bffe2cb-6603-4757-a8d5-5652fe12e7a1.png" />
                <Box>
                  <Typography variant="subtitle2" lineHeight="20px">
                    {post.user.username}
                  </Typography>
                  <Typography component="span" lineHeight="20px">
                    19 Dec
                  </Typography>
                </Box>
              </Stack>
              <Box paddingLeft="40px">
                <Typography fontSize="1.5rem" marginTop="5px">
                  <Link href="#" underline="none" color='black' sx={{"&:hover":{color:"#2f3ab2"}}} >
                    <b>
                      CodeNewbie Season 22 Episode 7! Starting out in Open Source
                      with Brian Douglas
                    </b>
                  </Link>
                </Typography>
                <Stack flexDirection="row" gap="12px">
                  <Link
                    href="#"
                    padding="4px 7px"
                    border="1px solid transparent"
                    color="black"
                    fontSize="13px"
                    underline="none"
                    sx={{
                      "&:hover": {
                        borderColor: "#d9adff",
                        borderRadius: "5px",
                        background: "#f4e7ff",
                      },
                    }}
                  >
                    #codenewbie
                  </Link>
                  <Link
                    href="#"
                    padding="4px 7px"
                    border="1px solid transparent"
                    color="black"
                    fontSize="13px"
                    underline="none"
                    sx={{
                      "&:hover": {
                        borderColor: "#d9adff",
                        borderRadius: "5px",
                        background: "#f4e7ff",
                      },
                    }}
                  >
                    #codenewbie
                  </Link>
                  <Link
                    href="#"
                    padding="4px 7px"
                    color="black"
                    fontSize="13px"
                    underline="none"
                    border="1px solid transparent"
                    sx={{
                      "&:hover": {
                        borderColor: "#d9adff",
                        borderRadius: "5px",
                        background: "#f4e7ff",
                      },
                    }}
                  >
                    #codenewbie
                  </Link>
                </Stack>
                <Stack
                  flexDirection="row"
                  marginTop="10px"
                  justifyContent="space-between"
                >
                  <Stack flexDirection="row" gap="15px">
                    <Link
                      href="#"
                      display="flex"
                      underline="none"
                      padding="8px 12px"
                      color="black"
                      alignItems="center"
                      sx={{
                        "&:hover": {
                          background: "#f6f6f6",
                          borderRadius: "5px",
                        },
                      }}
                    >
                      <FavoriteBorderIcon sx={{ fontSize: 15 }} />
                      <Box fontSize="15px" paddingLeft="8px">
                        6 reactions
                      </Box>
                    </Link>
                    <Link
                      href="#"
                      display="flex"
                      underline="none"
                      padding="8px 12px"
                      color="black"
                      alignItems="center"
                      sx={{
                        "&:hover": {
                          background: "#f6f6f6",
                          borderRadius: "5px",
                        },
                      }}
                    >
                      <ChatBubbleOutlineIcon sx={{ fontSize: 15 }} />
                      <Box fontSize="15px" paddingLeft="8px">
                        1 comment
                      </Box>
                    </Link>
                  </Stack>
                  <Stack
                    flexDirection="row"
                    padding="8px 12px"
                    alignItems="center"
                  >
                    <Box paddingRight="10px" fontSize="13px">
                      3 min read
                    </Box>
                    <Link
                      href="#"
                      padding="5px 8px"
                      sx={{
                        "&:hover": {
                          background: "#ebecfc",
                          borderRadius: "5px",
                        },
                      }}
                    >
                      <EmojiFlagsIcon />
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Home;
