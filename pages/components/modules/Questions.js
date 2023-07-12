import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller } from "react-hook-form";

const domains = [
  {
    value: "Domain 1: AWS Development",
    label: "Domain 1: AWS Development",
  },
  {
    value: "Domain 2: AWS Security",
    label: "Domain 2: AWS Security",
  },
  {
    value: "Domain 3: AWS Deployment",
    label: "Domain 3: AWS Deployment",
  },
  {
    value: "Domain 4: AWS Troubleshooting",
    label: "Domain 4: AWS Troubleshooting",
  },
];

export default function Questions() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Question Submit Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Domains"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your domain"
          >
            {domains.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="question"
            name="question"
            label="Question"
            fullWidth
            autoComplete="Please enter your question..."
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="answer"
            name="answer"
            label="Answer"
            fullWidth
            autoComplete="Please provide an answer..."
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Description"
            multiline
            fullWidth
            rows={5}
            maxRows={10}
            autoComplete="Please provide a description..."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Miscellaneous Question"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="inherit" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
