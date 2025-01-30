import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { GlobalPage } from 'Pages/GlobalPage/GlobalPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GlobalPage />} />
        <Route path="*" element={<GlobalPage />} />
      </Route>
    </Routes>
  );
};
