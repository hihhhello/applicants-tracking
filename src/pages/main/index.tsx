import { Box } from '@mui/material';
import { ApplicantsColumnsTable } from 'features/applicants-columns-table';

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
          overflowX: 'auto',
        }}
      >
        <ApplicantsColumnsTable
          sx={{
            maxWidth: '999vw',
          }}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
