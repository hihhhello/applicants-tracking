import { Box } from '@mui/material';
import { ApplicantsColumnsTable } from 'features/applicants-columns-table';
import { MoveApplicant } from 'features/move-applicant';

const MainPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '80vw',
          height: '80%',
          border: '2px solid grey',
          paddingInline: 2,
          borderRadius: 2,
        }}
      >
        <ApplicantsColumnsTable
          sx={{
            paddingBlock: 2,
          }}
          rowMenuActions={[
            {
              name: 'Move applicant',
              element: (row) => {
                return (
                  <MoveApplicant
                    applicant={row.applicant}
                    columnKey={row.columnKey}
                    columnsKeys={row.columnsKeys}
                  />
                );
              },
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
