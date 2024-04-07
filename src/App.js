import React, { useState } from 'react';
import { Page, Layout, Card, Tabs, FormLayout, RadioButton, Button, TextField } from '@shopify/polaris';
import { TextField } from '@shopify/polaris';

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
    <Card sectioned>
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

  const renderGeneralInfoTab = () => (
    <Card sectioned>
      <FormLayout>
        <FormLayout.Group>
          <TextField label="Gallery Name" />
          <TextField label="Author" />
        </FormLayout.Group>
        <Button primary>Create Gallery</Button>
      </FormLayout>
    </Card>
  );

  return (
    <Page title="Create Gallery">
      <Layout>
        <Layout.Section>
          <Card>
            <Tabs tabs={[
              {
                id: 'galleryTypeTab',
                content: 'Select Type of Gallery',
                accessibilityLabel: 'Select Type of Gallery',
                panelID: 'galleryTypePanel',
              },
              {
                id: 'generalInfoTab',
                content: 'Set up General Info',
                accessibilityLabel: 'Set up General Info',
                panelID: 'generalInfoPanel',
              },
            ]}
            selected={selectedTab}
            onSelect={handleTabChange}
            />
          </Card>
        </Layout.Section>
        <Layout.Section>
          {selectedTab === 0 && renderGalleryTypeTab()}
          {selectedTab === 1 && renderGeneralInfoTab()}
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default GalleryCreationScreen;
