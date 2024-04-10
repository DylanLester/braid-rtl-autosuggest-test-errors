import { Box, PageBlock, Stack, Text } from 'braid-design-system';
import { useState } from 'react';

import { CharacterInput } from './CharacterInput';

export function Container() {
  const [username, setUsername] = useState('');

  return (
    <PageBlock>
      <Stack space="small">
        <CharacterInput
          value={username}
          onChange={(value) => {
            setUsername(value);
          }}
          onClear={() => setUsername('')}
        />

        <Box>
          <Text>
            Selected value:{' '}
            <Box display="inline" data={{ testid: 'selected-target' }}>
              {username}
            </Box>
          </Text>
        </Box>
      </Stack>
    </PageBlock>
  );
}
