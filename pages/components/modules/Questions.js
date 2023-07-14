import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller } from "react-hook-form";
import { saveQuestion } from "@/pages/api/questionsApi";

const domains = [
  {
    id: 1,
    value: "1",
    label: "Domain 1: AWS Development",
  },
  {
    id: 2,
    value: 2,
    label: "Domain 2: AWS Security",
  },
  {
    id: 3,
    value: "3",
    label: "Domain 3: AWS Deployment",
  },
  {
    id: 4,
    value: "4",
    label: "Domain 4: AWS Troubleshooting",
  },
];

export default function Questions() {
  const { register, handleSubmit, control } = useForm();

  const onFormSubmit = async (data) => {
    const res = await saveQuestion(data);
  };
  const onErrors = (errors) => console.error(errors);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Questions Submit Form
      </Typography>
      <form noValidate onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="domains"
              required
              {...register("domain")}
              select
              label="Domains"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your domain"
            >
              {domains.map((option) => (
                <option key={option.id} value={option.value}>
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
              {...register("question")}
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
              {...register("answer")}
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
              {...register("description")}
              multiline
              fullWidth
              autoComplete="Please provide a description..."
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Controller
                  render={({ field }) => (
                    <Checkbox
                      color="secondary"
                      name="miscellaneous"
                      value="yes"
                      {...field}
                    />
                  )}
                  control={control}
                  name="miscellaneous"
                />
              }
              label="Miscellaneous Question"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="Submit"
              variant="contained"
              color="inherit"
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
