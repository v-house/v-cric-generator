import React from "react";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light border border-primary m-1">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <h1>IITHbuzz</h1>
            </a>
          </div>
          {/* <div>
            <button type="button" className="btn btn-primary text-center">
                <h5>Host</h5>
                
            </button>
          </div> */}
        </nav>
      </div>
    </>
  );
}
