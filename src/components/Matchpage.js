import React, { useState } from "react";

function Matchpage(props) {
  let strikerate = 0;
  const [runs, setRuns] = useState(0);
  const [lastover, setLastover] = useState("");
  const [tfours, setTfours] = useState(0);
  const [fours1, setFours1] = useState(0);
  const [sixes1, setSixes1] = useState(0);
  const [fours2, setFours2] = useState(0);
  const [sixes2, setSixes2] = useState(0);
  const [tsixes, setTsixes] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [overstatus, setOverstatus] = useState("");
  const [overball, setOverball] = useState(0);
  const [runs1, setRuns1] = useState(0);
  const [runs2, setRuns2] = useState(0);
  const [balls1, setBalls1] = useState(0);
  const [balls2, setBalls2] = useState(0);
  const [lastball, setLastball] = useState(0);
  const [wides, setWides] = useState(0);
  const [noballs, setNoballs] = useState(0);
  const [player1, setPlayer1] = useState(1);
  const [player1name, setPlayer1name] = useState("Player 1");
  const [player2name, setPlayer2name] = useState("Player 2");
  const [bowlername, setBowlername] = useState("Bowler");
  const [player2, setPlayer2] = useState(0);
  const [playertocrease, setPlayertocrease] = useState(2);
  const [lastbatsman, setLastbatsman] = useState("");
  const Increaseby1 = () => {
    setRuns(runs + 1);
    setOverstatus(overstatus + "1 ");
    setLastover(lastover + "1 ");

    if (player1 === 1) {
      setPlayer1(0);
      setPlayer2(1);
      setRuns1(runs1 + 1);
      setBalls1(balls1 + 1);
      setLastball(
        `A smart run by ${player1name} to rotate the strike to ${player2name}.`
      );
    } else {
      setPlayer1(1);
      setPlayer2(0);
      setRuns2(runs2 + 1);
      setBalls2(balls2 + 1);
      setLastball(`A quick single by ${player2name}.`);
    }
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "1 | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Increaseby2 = () => {
    setRuns(runs + 2);
    setOverstatus(overstatus + "2 ");
    setLastover(lastover + "2 ");

    if (player1 === 1) {
      setRuns1(runs1 + 2);
      setBalls1(balls1 + 1);
      setLastball(
        `A smart run by ${player1name} to keep the strike to himself.`
      );
    } else {
      setRuns2(runs2 + 2);
      setBalls2(balls2 + 1);
      setLastball(`A well placed shot by ${player2name} for a easy double.`);
    }
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "2 | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(
        lastball + " The batsmen rotate the strike due to the over completion."
      );
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Increasebywide = () => {
    setRuns(runs + 1);
    setWides(wides + 1);
    setOverstatus(overstatus + "Wd ");
    setLastover(lastover + "Wd ");
    if (player1 === 1) {
      setLastball(
        `A clear wide by the bowler to ${player1name}, a good thought to leave it.`
      );
    } else {
      setLastball(
        `A clear wide by the bowler to ${player2name}, a good idea of not taking it to rotate strike.`
      );
    }
  };
  const Dotball = () => {
    if (player1 === 1) {
      setBalls1(balls1 + 1);
      setOverstatus(overstatus + "0 ");
      setLastover(lastover + "0 ");
      setLastball(
        `${player1name} gets under pressure by this dot, would look up for better contact.`
      );
    } else {
      setBalls2(balls2 + 1);
      setOverstatus(overstatus + "0 ");
      setLastover(lastover + "0 ");
      setLastball(
        `A perfect ball by the bowler to ${player2name} to keep him away from run reach.`
      );
    }
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "0 | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Noball = () => {
    setRuns(runs + 1);
    setNoballs(noballs + 1);
    setOverstatus(overstatus + "Nb ");
    setLastover(lastover + "Nb ");
    if (player1 === 1) {
      setBalls1(balls1 + 1);
      setLastball(
        `A Huge mistake by the bowler, ${player1name} would be looking for maximizing the profit ball.`
      );
    } else {
      setBalls2(balls2 + 1);
      setLastball(`A free ball for ${player2name} from the bowler.`);
    }
  };
  const Increaseby3 = () => {
    setRuns(runs + 3);
    setOverstatus(overstatus + "3 ");
    setLastover(lastover + "3 ");

    if (player1 === 1) {
      setPlayer1(0);
      setPlayer2(1);
      setRuns1(runs1 + 3);
      setBalls1(balls1 + 1);
      setLastball(`A good finding of gap, ${player1name}! enough for three.`);
    } else {
      setPlayer1(1);
      setPlayer2(0);
      setRuns2(runs2 + 3);
      setBalls2(balls2 + 1);
      setLastball(
        `A quick running by ${player2name} and ${player1name} for a fast 3 runs.`
      );
    }
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "3 | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Increaseby4 = () => {
    setRuns(runs + 4);
    setOverstatus(overstatus + "4 ");
    setLastover(lastover + "4 ");
    setTfours(tfours + 1);
    if (player1 === 1) {
      setRuns1(runs1 + 4);
      setBalls1(balls1 + 1);
      setFours1(fours1 + 1);
      setLastball(
        `A nice drive by ${player1name} resulting to a must needed boundary.`
      );
    } else {
      setRuns2(runs2 + 4);
      setBalls2(balls2 + 1);
      setFours2(fours2 + 1);
      setLastball(`A wonderful shot ${player2name}! A fantastic four.`);
    }
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "4 | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Increaseby6 = () => {
    setRuns(runs + 6);
    setTsixes(tsixes + 1);
    setOverstatus(overstatus + "6 ");
    setLastover(lastover + "6 ");
    if (player1 === 1) {
      setRuns1(runs1 + 6);
      setBalls1(balls1 + 1);
      setSixes1(sixes1 + 1);
      setLastball(
        `Wow ! That's huge, a catch to the audience, well-done ${player1name}.`
      );
    } else {
      setRuns2(runs2 + 6);
      setBalls2(balls2 + 1);
      setSixes2(sixes2 + 1);
      setLastball(
        `Classy one! A half a dozen runs by ${player2name} for the team.`
      );
    }
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "6 | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Bowled = () => {
    setOverstatus(overstatus + "W ");
    setLastover(lastover + "W ");
    if (player1 === 1) {
      setBalls1(balls1 + 1);
      if (balls1 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs1 / (balls1 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          "\n" +
          ` ${player1name} : ${runs1}(${
            balls1 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours1}, Sixes : ${sixes1}, out-by ${bowlername} ]`
      );
      setFours1(0);
      setSixes1(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer1name(`Player ${playertocrease + 1}`);
      setRuns1(0);
      setBalls1(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `A perfect ball by the bowler! It bowled, ${player1name} should look for his way to pavilion.`
      );
    } else {
      setBalls2(balls2 + 1);
      if (balls2 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs2 / (balls2 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          ` ${player2name} : ${runs2}(${
            balls2 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours2}, Sixes : ${sixes2}, out-by ${bowlername} ]`
      );
      setFours2(0);
      setSixes2(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer2name(`Player ${playertocrease + 1}`);
      setRuns2(0);
      setBalls2(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `A perfect ball by the bowler to ${player2name}, this was targeted to the stumps. Its clearly bowled.`
      );
    }
    setWickets(wickets + 1);
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "W | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Catchout = () => {
    setOverstatus(overstatus + "W ");
    setLastover(lastover + "W ");
    if (player1 === 1) {
      setBalls1(balls1 + 1);
      if (balls1 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs1 / (balls1 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          "\n" +
          ` ${player1name} : ${runs1}(${
            balls1 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours1}, Sixes : ${sixes1}, out-by ${bowlername} ]`
      );
      setFours1(0);
      setSixes1(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer1name(`Player ${playertocrease + 1}`);
      setRuns1(0);
      setBalls1(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `Wondeful catch! And it is out, ${player1name} leaves to pavilion.`
      );
    } else {
      setBalls2(balls2 + 1);
      if (balls2 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs2 / (balls2 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          ` ${player2name} : ${runs2}(${
            balls2 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours2}, Sixes : ${sixes2}, out-by ${bowlername} ]`
      );
      setFours2(0);
      setSixes2(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer2name(`Player ${playertocrease + 1}`);
      setRuns2(0);
      setBalls2(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `It is in the air, ${player2name} shouldn't have gone for this, its clearly into the fielder's hand.`
      );
    }
    setWickets(wickets + 1);
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "W | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player2 === 0) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Stumpout = () => {
    setOverstatus(overstatus + "W ");
    setLastover(lastover + "W ");
    if (player1 === 1) {
      setBalls1(balls1 + 1);
      if (balls1 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs1 / (balls1 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          "\n" +
          ` ${player1name} : ${runs1}(${
            balls1 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours1}, Sixes : ${sixes1}, out-by ${bowlername} ]`
      );
      setFours1(0);
      setSixes1(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer1name(`Player ${playertocrease + 1}`);
      setRuns1(0);
      setBalls1(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `Wow that was so quick by the keeper, A Dhoni style of keeping and it a stump out to ${player1name}.`
      );
    } else {
      setBalls2(balls2 + 1);
      if (balls2 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs2 / (balls2 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          ` ${player2name} : ${runs2}(${
            balls2 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours2}, Sixes : ${sixes2}, out-by ${bowlername} ]`
      );
      setFours2(0);
      setSixes2(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer2name(`Player ${playertocrease + 1}`);
      setRuns2(0);
      setBalls2(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `This was close, very very close ! ${player2name} should have sticked to the crease.`
      );
    }
    setWickets(wickets + 1);
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "W | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Legbefore = () => {
    setOverstatus(overstatus + "W ");
    setLastover(lastover + "W ");
    if (player1 === 1) {
      setBalls1(balls1 + 1);
      if (balls1 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs1 / (balls1 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          "\n" +
          ` ${player1name} : ${runs1}(${
            balls1 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours1}, Sixes : ${sixes1}, out-by ${bowlername} ]`
      );
      setFours1(0);
      setSixes1(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer1name(`Player ${playertocrease + 1}`);
      setRuns1(0);
      setBalls1(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `Its a huge appeal from keeper and bowler, and its the umpire finger raising up. A wicket again in the form of ${player1name}.`
      );
    } else {
      setBalls2(balls2 + 1);
      if (balls2 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs2 / (balls2 + 1)) * 100);
      }
      setLastbatsman(
        lastbatsman +
          ` ${player2name} : ${runs2}(${
            balls2 + 1
          }) [ Strike Rate : ${strikerate}, Fours : ${fours2}, Sixes : ${sixes2}, out-by ${bowlername} ]`
      );
      setFours2(0);
      setSixes2(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer2name(`Player ${playertocrease + 1}`);
      setRuns2(0);
      setBalls2(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `There isn't any sound than the shouts of the fielders, ${player2name} looks underconfident, and he is. The finger is raised.`
      );
    }
    setWickets(wickets + 1);
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "W | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Runout = () => {
    if (player1 === 1) {
      setOverstatus(overstatus + "W ");
      setLastover(lastover + "W ");
      if (balls1 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs1 / balls1) * 100);
      }
      setLastbatsman(
        lastbatsman +
          "\n" +
          ` ${player1name} : ${runs1}(${balls1}) [ Strike Rate : ${strikerate}, Fours : ${fours1}, Sixes : ${sixes1}, out-by ${bowlername} ]`
      );
      setFours1(0);
      setSixes1(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer1name(`Player ${playertocrease + 1}`);
      setRuns1(0);
      setBalls1(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `Oh no ${player1name} is late to return. A bad call for a run, resulting in another wicket down.`
      );
    } else {
      setBalls2(balls2 + 1);
      if (balls2 === 0) {
        strikerate = 0;
      } else {
        strikerate = Math.round((runs2 / balls2) * 100);
      }
      setLastbatsman(
        lastbatsman +
          ` ${player2name} : ${runs2}(${balls2}) [ Strike Rate : ${strikerate}, Fours : ${fours2}, Sixes : ${sixes2}, out-by ${bowlername} ]`
      );
      setFours2(0);
      setSixes2(0);
      setPlayertocrease(playertocrease + 1);
      setPlayer2name(`Player ${playertocrease + 1}`);
      setRuns2(0);
      setBalls2(0);
      setPlayertocrease(playertocrease + 1);
      setLastball(
        `This wasn't expected from ${player2name}, it could have been a little more quick.`
      );
    }
    setWickets(wickets + 1);
    if (overball > 4) {
      setOverstatus("");
      setLastover(lastover + "W | ");
      setOvers(overs + 1);
      setOverball(0);
      setLastball(lastball + " The strike has being rotated due to over up.");
      if (player1 === 1) {
        setPlayer1(0);
        setPlayer2(1);
      } else {
        setPlayer1(1);
        setPlayer2(0);
      }
    } else {
      setOverball(overball + 1);
    }
  };
  const Increaseby5 = () => {
    setOverstatus(overstatus + "4Wd ");
    setLastover(lastover + "4Wd ");
    setRuns(runs + 5);
    setWides(wides + 5);

    if (player1 === 1) {
      setLastball(`Equivalent to five wides, a bad bowler experience.`);
    } else {
      setLastball(
        `A good dive by the keeper, but its a running out of 5 runs.`
      );
    }
  };

  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [tosswinner, setTosswinner] = useState("");

  const handlethechange1 = (event) => {
    setTeamA(event.target.value);
  };
  const handlethechange2 = (event) => {
    setTeamB(event.target.value);
  };
  const handlethechangename1 = (event) => {
    setPlayer1name(event.target.value);
  };
  const handlethechangename2 = (event) => {
    setPlayer2name(event.target.value);
  };
  const handlethechangename3 = (event) => {
    setBowlername(event.target.value);
  };

  return (
    <>
      {/* Scorecard above start */}
      <div>
        <div className="container border border-primary my-5">
          <h2>
            <p className="text-center" style={{ color: "blue" }}>
              Scoreboard : {teamA.length > 0 ? teamA : "_______"} vs{" "}
              {teamB.length > 0 ? teamB : "_______"}
            </p>
          </h2>
          <h5>
            Toss is won by {tosswinner % 2 === 0 ? teamB : teamA}
            <u>
              <strong></strong>
            </u>{" "}
            and has elected to <u>{tosswinner > 2 ? "ball" : "bat"}</u> first.
          </h5>
          <div className="container border border-primary my-2 p-2">
            <button className="btn btn-primary my-2">
              1st Innings : {tosswinner < 2 || tosswinner > 3 ? teamA : teamB}
            </button>
            <div className="container border border-success w-50 p-2 mb-2">
              <div className="d-flex justify-content-around">
                <div>
                  <h5>
                    Total : {runs}/{wickets}
                  </h5>
                </div>
                <div>
                  <h5>
                    Run-rate :{" "}
                    {Math.round((runs / (overs + overball / 6)) * 100) / 100}
                  </h5>
                </div>
                <div>
                  <h5>
                    Overs : {overs}.{overball}
                  </h5>
                </div>
              </div>
              <div className="m-3">
                <strong> Last ball : </strong>
                {lastball}
              </div>

              <div className="m-3">
                <strong> Over-status : </strong>
                {lastover}
              </div>
              <div className="text-primary mx-3">
                <h5>Batting</h5>
              </div>
              <div className="border border-primary mx-3 my-1 p-2 d-flex justify-content-around">
                <div>
                  <h6>
                    {player1name}
                    {player1 > 0 ? "*" : "_"}
                  </h6>{" "}
                </div>
                <div>
                  <h6>
                    {runs1}({balls1}) | Fours({fours1}) | Sixes({sixes1})
                  </h6>
                </div>
              </div>
              <div className="border border-primary mx-3 my-1 p-2 d-flex justify-content-around">
                <div>
                  <h6>
                    {player2name}
                    {player2 > 0 ? "*" : "_"}
                  </h6>{" "}
                </div>
                <div>
                  <h6>
                    {runs2}({balls2}) | Fours({fours2}) | Sixes({sixes2})
                  </h6>
                </div>
              </div>
              <div className="text-primary mx-3 my-1">
                <h5>Bowler of the over</h5>
              </div>
              <div className="border border-primary mx-3 my-1 p-2 d-flex justify-content-around">
                <div>
                  <h6>{bowlername}</h6>
                </div>
                <div>
                  <h6>{overstatus}</h6>
                </div>
              </div>
              <div className="m-3">
                <strong> Last wicket : </strong>
                <div>{lastbatsman}</div>
              </div>
              <div className="m-3">
                <strong> Assets : </strong>
                <div className="text-center">
                  {tfours + tsixes} total boundaries | {tfours} fours | {tsixes}{" "}
                  sixes
                </div>
                <div className="text-center">
                  {wides + noballs} total extras | {wides} wides | {noballs} no
                  balls
                </div>
              </div>
            </div>
            Total score of the team is {runs}
            {wickets < 10 ? `/${wickets}` : ""} runs in{" "}
            {overball < 6 ? `${overs}.${overball}` : `${overs + 1}.0`} overs.
          </div>
        </div>
      </div>
      {/* end */}

      {/* Start of development side */}
      <div>
        <div className="container border border-primary my-5 w-75 p-4">
          <h3>
            <p className="text-center">Developer side</p>
          </h3>
          <div className="input-group-prepend d-flex justify-content-center">
            <span
              className="input-group-text"
              style={{ color: "white", backgroundColor: "#246fc2" }}
            >
              Enter the team names
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Team 1"
              value={teamA}
              onChange={handlethechange1}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Team 2"
              value={teamB}
              onChange={handlethechange2}
            />
          </div>
          <form>
            <div className="form-row align-items-center d-flex justify-content-center my-1">
              <div className="col-auto my-1">
                <select
                  className="custom-select mr-sm-2"
                  id="teamtoss"
                  value={tosswinner}
                  onChange={(e) => setTosswinner(e.target.value)}
                >
                  <option selected>Toss Winner?</option>
                  <option value="1">
                    Toss won by {teamA.length > 0 ? teamA : "Team 1"} and
                    elected to bat
                  </option>
                  <option value="2">
                    Toss won by {teamB.length > 0 ? teamB : "Team 2"} and
                    elected to bat
                  </option>
                  <option value="3">
                    Toss won by {teamA.length > 0 ? teamA : "Team 1"} and
                    elected to ball
                  </option>
                  <option value="4">
                    Toss won by {teamB.length > 0 ? teamB : "Team 2"} and
                    elected to ball
                  </option>
                </select>
              </div>
            </div>
            <div className="input-group-prepend d-flex justify-content-center my-2">
              <span
                className="input-group-text"
                style={{ color: "white", backgroundColor: "#246fc2" }}
              >
                Enter the batsman on crease names
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Player 1"
                value={player1name}
                onChange={handlethechangename1}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Player 2"
                value={player2name}
                onChange={handlethechangename2}
              />
            </div>
            <div className="input-group-prepend d-flex justify-content-center my-2">
              <span
                className="input-group-text"
                style={{ color: "white", backgroundColor: "#246fc2" }}
              >
                Enter the bowler name
              </span>

              <input
                type="text"
                className="form-control"
                value={bowlername}
                onChange={handlethechangename3}
              />
            </div>
            <div>
              Enter the current ball situation :
              <div
                className="btn-toolbar d-flex justify-content-center my-1"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  <button
                    type="button"
                    className="btn btn-secondary mx-1"
                    onClick={Increasebywide}
                  >
                    Wide
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mx-1"
                    onClick={Dotball}
                  >
                    Dot ball
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mx-1"
                    onClick={Noball}
                  >
                    No ball
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mx-1"
                    onClick={Increaseby5}
                  >
                    Wide + 4
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={Increaseby1}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={Increaseby2}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={Increaseby3}
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={Increaseby4}
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={Increaseby6}
                  >
                    6
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mx-1"
                    onClick={Bowled}
                  >
                    Bowled
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mx-1"
                    onClick={Catchout}
                  >
                    Catch-out
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mx-1"
                    onClick={Runout}
                  >
                    Runout
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mx-1"
                    onClick={Stumpout}
                  >
                    Stumped
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mx-1"
                    onClick={Legbefore}
                  >
                    LBW
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end */}
    </>
  );
}

Matchpage.defaultProps = {};

export default Matchpage;
