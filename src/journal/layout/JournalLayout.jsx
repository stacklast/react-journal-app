import { Box } from "@mui/system"
import { NavBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        <NavBar />
        <Box component='main'
            sx={{flexGrowl: 1, p:3}}
        >
            {children}
        </Box>
    </Box>
  )
}
