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
  rowMenuActions?: MenuActionsList<{
    applicant: ApplicantPreview;
    columnKey: string;
    columnsKeys: string[];
  }>;
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
        maxWidth: '100%',
        height: '100%',
        display: 'flex',
        gap: sortedColumns.length ? 1 : 0,
        overflowX: 'auto',
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
                {columnData.applicants.map((row) => {
                  const actions = rowMenuActions?.map((action) => ({
                    key: action.name,
                    element: action.element({
                      applicant: row,
                      columnKey: key,
                      columnsKeys: Object.keys(columns),
                    }),
                  }));

                  return (
                    <Card key={row.id} menuActions={actions}>
                      {row.name}
                    </Card>
                  );
                })}
              </Stack>
              <AddApplicant columnKey={key} />
            </Column>
          );
        })}
      </Box>
      <Box
        sx={{
          height: '100%',
        }}
      >
        <AddColumn />
      </Box>
    </Box>
  );
};
