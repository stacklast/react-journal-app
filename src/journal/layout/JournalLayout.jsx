import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        <NavBar drawerWidth={drawerWidth} />

        <SideBar drawerWidth={drawerWidth} />
        <Box component='main'
            sx={{flexGrowl: 1, p:3}}
        >
          <Toolbar>
            
          </Toolbar>
            {children}
        </Box>
    </Box>
  )
}
