import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import "./headstyle/searchstyle.css";

function Search({ getWord, dictionaryWord }) {
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <form onSubmit={dictionaryWord}>
                <input
                  type="text"
                  onChange={getWord}
                  placeholder="search the word"
                />
                <button type="submit">Search</button>{" "}
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Search;
