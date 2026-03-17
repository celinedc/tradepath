import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import PayPage from './pages/Pay';
import LocationPage from './pages/Location';
import AptitudePage from './pages/Aptitude';
import SchoolSearchPage from './pages/SchoolSearch';
import CareerDiscovery from './pages/CareerDiscovery';
import StudentsPage from './pages/Students';
import TradesLibrary from './pages/TradesLibrary';
import Layout from './components/Layout';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          
          <Route 
            path="/dashboard" 
            element={
              <Layout>
                <Dashboard />
              </Layout>
            } 
          />

          <Route 
            path="/students" 
            element={
              <Layout>
                <StudentsPage />
              </Layout>
            } 
          />

          <Route 
            path="/discovery" 
            element={
              <Layout>
                <CareerDiscovery />
              </Layout>
            } 
          />

          <Route 
            path="/library" 
            element={
              <Layout>
                <TradesLibrary />
              </Layout>
            } 
          />
          
          <Route 
            path="/pay" 
            element={
              <Layout>
                <PayPage />
              </Layout>
            } 
          />

          <Route 
            path="/location" 
            element={
              <Layout>
                <LocationPage />
              </Layout>
            } 
          />

          <Route 
            path="/aptitude" 
            element={
              <Layout>
                <AptitudePage />
              </Layout>
            } 
          />

          <Route 
            path="/schools" 
            element={
              <Layout>
                <SchoolSearchPage />
              </Layout>
            } 
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
