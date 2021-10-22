// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import DateRangePicker from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Box from '@mui/material/Box';
// import { Button } from '@mui/material';



// export default function BasicDateRangePicker() {


//   return (
//     <div>
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DateRangePicker
//         startText="Check-in"
//         endText="Check-out"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <React.Fragment>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField {...endProps} />
//           </React.Fragment>
//         )}
//       />
//     </LocalizationProvider>
//     <Button variant="outlined">Book Now</Button>
//     </div>
//   );
// }
