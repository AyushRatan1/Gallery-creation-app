import React, { useState } from 'react';
import { Page, Layout, Card, Tabs, RadioButton } from '@shopify/polaris';
import './GalleryCreationScreen.css';

function GalleryCreationScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [galleryType, setGalleryType] = useState('');

  const handleTabChange = (selectedTabIndex) => {
    setSelectedTab(selectedTabIndex);
  };

  const handleGalleryTypeChange = (value) => {
    setGalleryType(value);
  };

  const renderGalleryTypeTab = () => (
    <Card sectioned className="custom-card">
      <div className="section-title">Select Type of Gallery:</div>
      <RadioButton
        label="Carousel"
        checked={galleryType === 'carousel'}
        onChange={() => handleGalleryTypeChange('carousel')}
      />
      <RadioButton
        label="Grid"
        checked={galleryType === 'grid'}
        onChange={() => handleGalleryTypeChange('grid')}
      />
    </Card>
  );

  const renderDummyImages = () => {
    if (galleryType === 'carousel') {
      return (
        <div className="dummy-images">
          <img src="https://via.placeholder.com/300x150" alt="Dummy Image 1" />
          <img src="https://via.placeholder.com/300x150" alt="Dummy Image 2" />
          <img src="https://via.placeholder.com/300x150" alt="Dummy Image 3" />
        </div>
      );
    } else if (galleryType === 'grid') {
      return (
        <div className="dummy-images">
          <img src="https://via.placeholder.com/150" alt="Dummy Image 1" />
          <img src="https://via.placeholder.com/150" alt="Dummy Image 2" />
          <img src="https://via.placeholder.com/150" alt="Dummy Image 3" />
          <img src="https://via.placeholder.com/150" alt="Dummy Image 4" />
          <img src="https://via.placeholder.com/150" alt="Dummy Image 5" />
          <img src="https://via.placeholder.com/150" alt="Dummy Image 6" />
        </div>
      );
    }
    return null;
  };

  return (
    <Page title="Gallery Creation Screen">
      <Layout>
        <Layout.Section>
          <Card>
            <Tabs tabs={[
              {
                id: 'galleryTypeTab',
                content: 'Select Type of Gallery',
                accessibilityLabel: 'Select Type of Gallery',
                panelID: 'galleryTypePanel',
              }
            ]}
            selected={selectedTab}
            onSelect={handleTabChange}
            />
          </Card>
        </Layout.Section>
        <Layout.Section>
          {selectedTab === 0 && renderGalleryTypeTab()}
          {renderDummyImages()}
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default GalleryCreationScreen;
