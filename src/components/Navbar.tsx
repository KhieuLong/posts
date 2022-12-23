import { AppBar,Toolbar,Box } from "@mui/material";
import Typography from "@mui/material/Typography";

function Navbar() {
    return ( 
        <AppBar>
             <Toolbar>
                <Box>
                    <Typography>Post Management</Typography>
                </Box>
             </Toolbar>
        </AppBar>
     );
}

export default Navbar;