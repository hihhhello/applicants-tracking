import { Check } from '@mui/icons-material';
import { IconButton, TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  onSaveClick: () => void;
};

export const AddTextField = (props: Props) => {
  return (
    <TextField
      autoFocus={true}
      size="small"
      {...props}
      InputProps={{
        endAdornment: (
          <IconButton onClick={props.onSaveClick}>
            <Check />
          </IconButton>
        ),
      }}
    />
  );
};
