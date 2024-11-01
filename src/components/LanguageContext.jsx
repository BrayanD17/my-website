import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const LanguageContext = createContext();

// Proveedor del contexto para envolver la aplicación
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ENG');

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del idioma
export const useLanguage = () => useContext(LanguageContext);
