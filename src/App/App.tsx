import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import { StrictMode } from 'react';

import { Container } from './Container';

interface AppProps {
  environment: 'development' | 'production';
}

export default (_props: AppProps) => (
  <StrictMode>
    <BraidProvider theme={apac}>
      <Container />
    </BraidProvider>
  </StrictMode>
);
