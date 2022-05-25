import { Box, SxProps, Stack } from '@mui/material';
import { Column, columnModel } from 'entities/column';
import { AddColumn } from './add-column';
import { MenuActionsList } from 'shared/lib';
import { Card } from 'shared/ui';
import { AddApplicant } from './add-applicant';
import { useMemo } from 'react';
import { ApplicantPreview } from 'shared/api';

interface Props {
  sx?: SxProps;
  rowMenuActions?: MenuActionsList<ApplicantPreview>;
}

export const ApplicantsColumnsTable = (props: Props) => {
  const { columns } = columnModel.useColumnsContext();

  const { rowMenuActions, sx } = props;

  // @ts-ignore
  // Sorting columns by order value
  const sortedColumns = useMemo(
    () => Object.entries(columns).sort((a, b) => a[1].order - b[1].order),
    [columns],
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: 8,
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        {sortedColumns.map(([key, columnData]) => {
          return (
            <Column key={key} aria-label="column-wrapper" header={key}>
              <Stack
                aria-label="column-applicants"
                sx={{
                  paddingBlock: 2,
                  paddingInline: 0.5,
                  display: 'flex',
                  gap: 0.5,
                }}
              >
                {columnData.applicants.map((row) => (
                  <Card key={row.id} menuActions={rowMenuActions}>
                    {row.name}
                  </Card>
                ))}
              </Stack>
              <AddApplicant columnKey={key} />
            </Column>
          );
        })}
      </Box>
      <AddColumn />
    </Box>
  );
};
