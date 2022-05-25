import React, { PropsWithChildren } from 'react';
import { SxProps, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';

interface Action {
  key: string | number;
  element: React.ReactNode;
}

interface Props {
  menuActions?: Action[];
  sx?: SxProps;
}

export const Card = ({ children, sx, ...props }: PropsWithChildren<Props>) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (open) {
      setAnchorEl(null);
      return;
    }
    setAnchorEl(event.currentTarget);
  };

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
          <IconButton onClick={toggleMenu} size="small">
            <MoreHoriz />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {props.menuActions.map((action) => (
              <MenuItem key={action.key}>{action.element}</MenuItem>
            ))}
          </Menu>
        </Box>
      ) : null}
      <Box>{children}</Box>
    </Box>
  );
};
