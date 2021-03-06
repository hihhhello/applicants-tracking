import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoadingPage } from 'shared/ui';

export const withRouter = (component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASEURL}>
      <Suspense fallback={<LoadingPage />}>{component()}</Suspense>
    </BrowserRouter>
  );
};
