import React from "react";
import {
  Container,
  TextField,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import useForm from "./../utils/useForm";
import * as Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required().trim(),
  company: Joi.string().required().trim(),
  salary: Joi.string().required().trim(),
  city: Joi.string().required().trim(),
});

const FORM = [
  {
    label: "Job offer name",
    name: "name",
  },
  {
    label: "Company name",
    name: "company",
  },
  {
    label: "Salary",
    name: "salary",
  },
  {
    label: "City",
    name: "city",
  },
];

function CreateJobs(props) {
  const { handleSubmit, handleInputChange, errors } = useForm(
    schema,
    props.updateJobs
  );

  const hasError = (name, needsMessage) => {
    if (errors && errors.some((e) => e.context.key === name))
      return needsMessage
        ? errors.find((e) => e.context.key === name).message
        : true;
    return needsMessage ? "" : false;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justify="center" style={{ marginTop: 32 }}>
          <Grid item>
            <Typography variant="h3" align="center">
              Crea una oferta
            </Typography>
          </Grid>
          {FORM.map((f) => (
            <Grid item xs={12} key={f.name}>
              <TextField
                variant="outlined"
                label={f.label}
                name={f.name}
                onChange={handleInputChange}
                error={hasError(f.name)}
                helperText={hasError(f.name, true)}
                fullWidth={true}
                required
              />
            </Grid>
          ))}
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Crear oferta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CreateJobs;
