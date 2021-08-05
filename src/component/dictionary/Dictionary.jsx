import { Grid } from "@material-ui/core";
import "./dictionarystyle/dictionary.css";

import { useContext } from "react";
import { Context } from "../../App";

function Dictionary() {
  const { meaning, phonetics, word } = useContext(Context);

  return (
    <>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="word">
          <h1>{word}</h1>{" "}
        </div>
        <div className="clear"></div>
        {phonetics.length ? (
          <div>
            <span>{phonetics[0].text}</span>
            <audio
              src={phonetics[0].audio}
              autoPlay
              style={{ backgroundColor: "grey" }}
            >
              Your browser doesn't support audio element.
            </audio>
          </div>
        ) : (
          ""
        )}

        {meaning.map((item) =>
          item.definitions.map((definition, i) => (
            <>
              <h2 key={i}>{definition.definition}</h2>
              {definition.synonyms && (
                <>
                  <div className="synon">
                    <span id="synons">Synonyms</span>
                    <span>
                      {" "}
                      <strong>:</strong>{" "}
                    </span>
                    {definition.synonyms.map((li, i) => (
                      <span key={i} className="synonlist">
                        {li} ,{" "}
                      </span>
                    ))}
                    <span>etc</span>
                  </div>
                </>
              )}
              <div className="example">
                <span id="id">Example</span>
                <span>
                  {" "}
                  <strong>:</strong>{" "}
                </span>

                {definition.example && (
                  <span id="exam">{definition.example}</span>
                )}
                <span>.</span>
              </div>
            </>
          ))
        )}
      </Grid>
    </>
  );
}

export default Dictionary;
