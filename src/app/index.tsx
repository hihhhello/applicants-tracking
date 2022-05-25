import { Box, CssBaseline } from '@mui/material';
import { Routing } from 'pages';
import { ToastContainer } from 'react-toastify';
import { withProviders } from './providers';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ToastContainer />
      <CssBaseline />
      <Routing />
    </Box>
  );
};

export default withProviders(App);
