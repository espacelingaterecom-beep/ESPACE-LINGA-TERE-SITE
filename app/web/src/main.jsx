import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import { AuthProvider } from '@/lib/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </LanguageProvider>
);