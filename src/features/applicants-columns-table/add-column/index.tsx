import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { Column, columnModel } from 'entities/column';
import { AddTextField } from 'shared/ui/add-text-field';

export const AddColumn = () => {
  const [adding, setAdding] = useState(false);
  const [columnKey, setColumnKey] = useState('');
  const { addNewColumn } = columnModel.useColumnsContext();

  const onAddClick = () => {
    setAdding(true);
  };

  const saveColumn = () => {
    if (!columnKey) {
      setAdding(false);
      return;
    }

    const result = addNewColumn(columnKey);
    if (result) {
      setAdding(false);
      setColumnKey('');
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnKey(e.target.value);
  };

  const onSaveClick = () => {
    saveColumn();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveColumn();
    }
  };

  return (
    <Column
      sx={{
        cursor: 'pointer',
      }}
      direction="column"
      alignItems="center"
      justifyContent="center"
      onClick={onAddClick}
    >
      <Typography>Add new column</Typography>
      {!adding ? (
        <IconButton>
          <AddCircleOutline />
        </IconButton>
      ) : (
        <AddTextField
          value={columnKey}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onSaveClick={onSaveClick}
        />
      )}
    </Column>
  );
};
