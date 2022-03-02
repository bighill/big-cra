import { useState } from "react";

import { latestUsaCovid } from "../lib/api";
import { Text } from "../components";

interface CaseByState {
  name: string;
  range: string;
  casesReported: number;
}

export const CovidAjax = () => {
  const [res, setRes] = useState<CaseByState[]>([]);

  const handleGet = () => {
    latestUsaCovid().then((r) => setRes(r.casesByState));
  };

  return (
    <>
      <Text>
        AJAX sample <button onClick={handleGet}>Get</button>
      </Text>
      {res.length == 0 ? (
        <></>
      ) : (
        <div style={{ margin: "2rem" }}>
          <Text h="3">Covid-19 latest cases by U.S. states</Text>
          {res.map((state) => (
            <div key={state.name}>
              {state.name} {state.casesReported}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
