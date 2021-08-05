import { Grid } from "@material-ui/core";
import React from "react";
import "../dictionary/displaystyle/display.css";

function Show() {
  return (
    <>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="showcom" style={{ textAlign: "center" }}>
          <p>Search The Word</p>
          <blockquote>
            "Always remember that you are absolutely unique. Just like everyone
            else." -Margaret Mead
          </blockquote>
        </div>{" "}
      </Grid>
    </>
  );
}

export default Show;
