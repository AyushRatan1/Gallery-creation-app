import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json'; // or any other desired language
import GalleryCreationScreen from './GalleryCreationScreen';



function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <GalleryCreationScreen />
    </AppProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
