import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpdateIcon from '@mui/icons-material/Update';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ImagesUpload from "./ImagesUpload";
import DeleteImages from "./DeleteImages";
import Notification from "./Notification";
import TeacherAttendence from "./TeacherAttendence";
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Attendence from "./Attendence";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CreateAccount from "./CreateAccount";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Account from "./Account";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import JEAUpdate from "./JEAUpdate";
import { Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';


const drawerWidth = 240;

const routes = [
    {
        name: "CreateAccount",
        path: "createAccount",
        element: <CreateAccount />,
        icon: <SaveAsIcon />,
      },
      {
        name: "Accounts",
        path: "account",
        element: <Account />,
        icon: <AccountBoxIcon />,
      },
      {
        name: "TeacherAttendence",
        path: "teachersAttendence",
        element: <TeacherAttendence />,
        icon: <CoPresentIcon />,
      },
    {
        name: "Attendence",
        path: "attendence",
        element: <Attendence />,
        icon: <ChildCareIcon />,
      },
    {
        name: "JEAUpdates",
        path: "JEAupdate",
        element: <JEAUpdate />,
        icon: <UpdateIcon />,
      },
  {
    name: "UploadImage",
    path: "uploadImage",
    element: <ImagesUpload />,
    icon: <DriveFolderUploadRoundedIcon />,
  },
  {
    name: "Delete Images & Updates",
    path: "deleteImage",
    element: <DeleteImages />,
    icon: <DeleteIcon />,
  },
  {
    name: "notification",
    path: "Notification",
    element: <Notification />,
    icon: <CircleNotificationsIcon />,
  }
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// sx={{
//     backgroundColor: "black",
//   }}
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AdminPortal() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(true);

  const [text] = useTypewriter({
    words: ["Welcome to the Jamila Educational Academy","This is the Admin Portal"],
    loop: {}
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed"
       className="bg-primary"
       open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <b>Jamila Educational Academy</b> (Admin Portal)
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", padding: "10px 0" }}>
                        <Avatar sx={{ width: 60, height: 60 }} className="border border-black border-2" alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzKngKTe0LsQY81ISNZ4eJ_YN6ro6K_63nsNal3ybnUudcjW-WiLzjaOvLwf079HZPHA&usqp=CAU" />
                        <Typography variant="h6" sx={{ mt: 1 }} className="text-primary fw-bold">Gulnaz Mansoor</Typography>
                    </Box>

          <IconButton onClick={handleDrawerClose} className='bg-primary text-light'>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="bg-primary text-white">
          {routes.map((route, index) => (
            <ListItem onClick={() => {
              setPage(false)
            }} key={index} disablePadding>
              <ListItemButton onClick={() => navigateHandler(route.path)}>
                <ListItemIcon className="text-white">
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <div className='d-flex justify-content-center align-item-center my-3'>
            <button className='btn btn-light text-primary px-3' onClick={() => {
              localStorage.clear()
              navigate('/')
            }}><LogoutIcon/>Logout</button>
          </div>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {page === true ? <h1 className='d-flex justify-content-center align-items-center my-5 fw-bold text-primary' >{text}
          <span className="text-danger"><Cursor /></span>
        </h1> : null}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Main>
    </Box>
  );
}
