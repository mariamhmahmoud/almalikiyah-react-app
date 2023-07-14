import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get("username")
        const password = data.get("password")
        console.log({
            username: data.get("username"),
            password: data.get("password"),
        });
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'username': username, 'password': password })
        };

        try {
            fetch('/login', requestOptions)
                .then(response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json();
                    } else {
                        throw new Error('Login failed');
                    }
                })
                .then(json => {
                    navigate('/admin');
                })
                .catch(error => {
                    console.log(error);
                    // Handle login error, e.g., show an error message to the user
                });
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Admin Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#08244c' }}
                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>
            </Container>
        </>
    );
}
