import { PropsWithChildren } from 'react';
import { SxProps, Box, IconButton } from '@mui/material';
import { MenuActionsList } from 'shared/lib';
import { MoreHoriz } from '@mui/icons-material';

interface Props<T> {
  menuActions?: MenuActionsList<T>;
  sx?: SxProps;
}

export const Card = <T extends {}>({
  children,
  sx,
  ...props
}: PropsWithChildren<Props<T>>) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        border: '2px solid #000',
        borderRadius: 2,
        paddingInline: 2,
        paddingBlock: 1,
        ...sx,
      }}
    >
      {props.menuActions && props.menuActions.length ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Box>
      ) : null}
      <Box>{children}</Box>
    </Box>
  );
};
