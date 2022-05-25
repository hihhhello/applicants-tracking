import { StackProps, Stack, Box, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

type Props = StackProps & {
  header?: string;
};

export const Column = ({
  header,
  children,
  sx,
  ...stackProps
}: PropsWithChildren<Props>) => {
  return (
    <Stack
      sx={{
        border: '1px solid #000',
        borderRadius: 2,
        width: 200,
        ...sx,
      }}
      direction="column"
      {...stackProps}
    >
      <Box
        sx={{
          borderBottom: '1px solid black',
          textAlign: 'center',
          paddingBlock: 0.5,
        }}
        aria-label="column-header"
      >
        <Typography aria-label="column-title" fontWeight={600}>
          {header}
        </Typography>
      </Box>
      <Box
        sx={{
          maxHeight: '100%',
          overflowY: 'auto',
          textAlign: 'center',
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};
