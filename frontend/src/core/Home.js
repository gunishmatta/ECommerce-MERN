import React from "react";
import '../styles.css'
import Base from './Base';
export default function Home() {

  return (
    <Base title="HomePage" description="Welcome to Tshirt Store">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">Test</button>

        </div>
        <div className="col-4">
          <button className="btn btn-success">Test</button>

        </div>
        <div className="col-4">
          <button className="btn btn-success">Test</button>

        </div>

      </div>
    </Base>
  );
}
