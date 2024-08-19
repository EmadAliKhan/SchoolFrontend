import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
// import { ToastContainer } from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginIcon from '@mui/icons-material/Login';



export default function TeacherForm() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const notifyFieldsError = () => toast.error('🦄 Please fill all The fields!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });


  const notifyInvalidError = () => toast.error('🦄 Invalid email and Password!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      notifyFieldsError()
    } else if (email === "teacher@gmail.com" && password === "226688") {
      localStorage.setItem("uid", email);
      navigate("/teacherPortal");
      console.log("Valid email and password");
    } else {
      notifyInvalidError()
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-teachers-day-poster-background-blackboard-teacher-image_12766.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          maxWidth: 450,
          margin: "0 auto",
          padding: "20px",
          border: "1px solid black",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)", // Apply blur to the background
          borderRadius: "10px", // Add rounded corners for better aesthetics
        }}
      >
        <CardContent>
          <h1 className="d-flex justify-content-center text-white mb-3 fw-bold">
            Teacher Form
          </h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  required
                  label="TeacherEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: 'white' }, // Change label color to white
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Change border color to white
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    input: { color: 'white' } // Change input text color to white
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  label="TeacherPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                  type="password" // Ensure the password is masked
                  InputLabelProps={{
                    style: { color: 'white' }, // Change label color to white
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Change border color to white
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    input: { color: 'white' } // Change input text color to white
                  }}
                />
              </Grid>
              <Grid
                xs={12}
                marginTop={2}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button className="btn btn-light px-5 fw-bold" type="submit">
                   Login <LoginIcon/>
                </button>
              </Grid>
            </Grid>
            <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
          </form>
          
        </CardContent>
      </Card>

      
    </div>
  );
}
