import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {showHeader && <Header />}
      <main className={`mx-auto w-full max-w-screen-2xl px-fluid ${showHeader ? 'pb-10 pt-4 sm:pt-6' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
