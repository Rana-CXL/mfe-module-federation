// import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent } from "react";
// import { getAuthToken, setAuthToken } from "@hr/services";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();

//   const ADD_TODO = gql`
//     mutation UserLogin($username: String!, $password: String!) {
//       login(username: $username, password: $password)
//     }
//   `;

//   const [userLogIn, { data, loading, error }] = useMutation(ADD_TODO);
//   if(error){
//     alert(`${error}`)
//   }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // userLogIn({
    //   variables: {
    //     username: data.get("email"),
    //     password: data.get("password"),
    //   },
      
    //   onCompleted: (data: any) => {
    //     if (data?.login) {
    //     //   setAuthToken(data.login);
    //     }
    //     alert('logged in successfully')
    //     navigate("/dashboard");
    //   },
    //   onError: (error) => {
    //     alert(error)
    //   }
    // });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "70vh" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          borderRadius: 2,
          background: "#edf4f4",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {/* Forgot password? */}
              </Link>
            </Grid>
            <Grid item>
             
              <Typography  onClick={()=>{
                navigate("/register")
              }} sx={{color:'#1769aa', fontSize:'14px' ,cursor:'pointer'}}>
                Don't have an account? Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
