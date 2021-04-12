import React, { useState, useEffect } from "react";
import CreateJobs from "./CreateJob";
import { Typography, CircularProgress } from "@material-ui/core";
import Job from "./Job";

const Jobs = () => {
  const [state, setState] = useState({ offers: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = "/offers";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((offers) => {
        setState({ offers });
        setLoading(false);
      });
  }, []);

  const renderLoading = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );

  return (
    <div>
      <Typography variant="h3" align="center">
        Ofertas laborales
      </Typography>
      {loading && renderLoading()}
      {state.offers.map((e, i) => (
        <Job key={i} offer={e} loading={loading} />
      ))}
      <CreateJobs
        updateJobs={(j) => setState((s) => ({ offers: [...s.offers, j] }))}
      />
    </div>
  );
};

export default Jobs;
