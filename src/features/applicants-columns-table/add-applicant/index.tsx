import React, { useState } from 'react';
import { IconButton, Typography, Stack } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { AddTextField } from 'shared/ui/add-text-field';
import { Card } from 'shared/ui';
import { applicantModel } from 'entities/applicant';
import { columnModel } from 'entities/column';

interface Props {
  columnKey: string;
}

export const AddApplicant = ({ columnKey }: Props) => {
  const { addNewApplicant } = applicantModel;
  const { fetchColumns } = columnModel.useColumnsContext();

  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');

  const onAddClick = () => {
    setAdding(true);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const saveApplicant = () => {
    if (!name) {
      setAdding(false);
      return;
    }

    addNewApplicant(name, columnKey);
    setAdding(false);
    setName('');
    fetchColumns();
  };

  const onSaveClick = () => {
    saveApplicant();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveApplicant();
    }
  };

  return (
    <Card
      sx={{
        textAlign: 'center',
        border: 'none',
        height: 'unset',
      }}
    >
      <Stack display="flex" flexDirection="column" alignItems="center">
        <Typography>Add new applicant</Typography>
        {!adding ? (
          <IconButton onClick={onAddClick}>
            <AddCircleOutline />
          </IconButton>
        ) : (
          <AddTextField
            value={name}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            onSaveClick={onSaveClick}
          />
        )}
      </Stack>
    </Card>
  );
};
