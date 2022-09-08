import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpensePage from 'Components/AddExpensePage';
import EditExpensePage from 'Components/EditExpensePage';
import ExpenseDashboardPage from 'Components/ExpenseDashboardPage';
import Header from 'Components/Header';
import HelpPage from 'Components/HelpPage';
import NotFoundPage from 'Components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<ExpenseDashboardPage />} />
      <Route path='/create' element={<AddExpensePage />} />
      <Route path='/edit/:id' element={<EditExpensePage />} />
      <Route path='/help' element={<HelpPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
