import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useContext, useState } from "react";
import { Context } from "../../App";
import Dictionary from "./Dictionary";
import Show from "./Show";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import "../dictionary/displaystyle/display.css";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

function Display() {
  const { meaning } = useContext(Context);
  const [bg, setbg] = useState("aliceblue");
  const [color, setColor] = useState("black");

  const handlemode = () => {
    if (bg === "aliceblue") {
      setbg("#333");
      setColor("white");
    } else {
      setbg("aliceblue");
      setColor("black");
    }
  };
  return (
    <>
      <Box className="show" style={{ backgroundColor: bg, color: color }}>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {" "}
              <div className="darkmode">
                {bg === "aliceblue" ? (
                  <Tooltip title="Light Mode">
                    <IconButton aria-label="delete">
                      <Brightness4Icon
                        onClick={handlemode}
                        style={{
                          cursor: "pointer",
                          boxShadow: "0px 0px 10px 5px gray",
                          borderRadius: "50%",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Dark Mode">
                    <IconButton aria-label="dark">
                      <Brightness7Icon
                        onClick={handlemode}
                        style={{
                          cursor: "pointer",
                          boxShadow: "0px 0px 10px 5px white",
                          borderRadius: "50%",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
            </Grid>

            {meaning.length ? <Dictionary /> : <Show />}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Display;
