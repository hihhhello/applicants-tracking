import React, { useCallback } from 'react';
import { Box, Menu, MenuItem, Typography } from '@mui/material';
import { columnModel } from 'entities/column';
import { ApplicantPreview, ColumnKey } from 'shared/api';

interface Props {
  applicant: ApplicantPreview;
  columnKey: string;
  columnsKeys: ColumnKey[];
}

export const MoveApplicant = ({ applicant, columnKey, columnsKeys }: Props) => {
  const { moveApplicant } = columnModel.useColumnsContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (open) {
      setAnchorEl(null);
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  const onMove = useCallback(
    (moveToKey: ColumnKey) => () => {
      moveApplicant(applicant, columnKey, moveToKey);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Box sx={{ display: 'inline' }}>
      <Typography onClick={toggleMenu}>Move applicant</Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* eslint-disable-next-line array-callback-return */}
        {columnsKeys.map((key) => {
          if (key !== columnKey) {
            return <MenuItem onClick={onMove(key)}>{key}</MenuItem>;
          }
        })}
      </Menu>
    </Box>
  );
};
