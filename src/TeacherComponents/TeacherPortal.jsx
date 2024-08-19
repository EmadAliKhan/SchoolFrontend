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
import { Cursor, useTypewriter } from "react-simple-typewriter";
import AddStudent from "./AddStudent";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import StudentAttendence from "./StudentAttendence";
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Avatar from '@mui/material/Avatar';
import TeacherAbout from "./TeacherAbout";
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';
import Attendence from "./Attendence";

const drawerWidth = 240;

const routes = [
    {
        name: "AddStudent",
        path: "addStudent",
        element: <AddStudent />,
        icon: <PersonAddAlt1Icon />
    },
    {
        name: "StudentAttendence",
        path: "attendence",
        element: <StudentAttendence />,
        icon: <CoPresentIcon />
    },
    {
        name: "About",
        path: "teacherAbout",
        element: <TeacherAbout />,
        icon: <ContactsIcon />
    },
    // {
    //     name: "Attendence",
    //     path: "studentAttendence",
    //     element: <Attendence />,
    //     icon: <ContactsIcon />
    // }
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

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function AdminPortal() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(true);

    const [text] = useTypewriter({
        words: ["Welcome to the Jamila Educational Academy", "This is the Teacher Portal"],
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
                className="bg-danger"
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
                        <b>Jamila Educational Academy</b> (Teacher Portal)
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
                        <Avatar sx={{ width: 70, height: 70 }} className="border border-black border-2" alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzKngKTe0LsQY81ISNZ4eJ_YN6ro6K_63nsNal3ybnUudcjW-WiLzjaOvLwf079HZPHA&usqp=CAU" />
                        <Typography variant="h6" sx={{ mt: 1 }} className="text-danger fw-bold">Sir Emad Khan</Typography>
                    </Box>
                    <IconButton onClick={handleDrawerClose} className="bg-danger text-light">
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List className="bg-danger text-white">
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
                        <button className='btn btn-light text-danger px-3' onClick={() => {
                            localStorage.clear()
                            navigate('/')
                        }}><LogoutIcon/>Logout</button>
                    </div>
                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {page === true ? <h1 className='d-flex justify-content-center align-items-center my-5 fw-bold text-danger' >{text}
                    <span className="text-danger"><Cursor /></span>
                </h1> : null}
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                    <Route path='attendence/studentAttendence' element={<Attendence />} />

                </Routes>
            </Main>
        </Box>
    );
}
