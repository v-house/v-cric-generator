import React from "react";

const Currentmatches = (props) => {
  let {
    status,
    totalscores,
    totalwickets,
    totalovers,
    overball,
    team,
    matchname,
    team1,
    team2,
  } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {matchname} </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {team1} vs {team2}{" "}
          </h5>
          <p className="card-text">
            {team} : {totalscores}/{totalwickets} in {totalovers}.{overball}
          </p>
          <p className="card-text">Status : {status}</p>
          <a
            rel="noreferrer"
            href="/match"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

Currentmatches.defaultProps = {
    status: 'postponed',
    totalscores: 0,
    totalwickets: 0,
    totalovers: 0,
    overball: 0,
    team: 'Team A',
    team1: 'Team A',
    team2: 'Team B',
    matchname: 'A vs B'
}


export default Currentmatches
