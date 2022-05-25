import { CssBaseline } from '@mui/material';
import { Routing } from 'pages';
import { ToastContainer } from 'react-toastify';
import { withProviders } from './providers';

const App = () => {
  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <Routing />
    </>
  );
};

export default withProviders(App);
