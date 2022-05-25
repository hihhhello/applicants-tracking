import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = React.lazy(() => import('./main'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
