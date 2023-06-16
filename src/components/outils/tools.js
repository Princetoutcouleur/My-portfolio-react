import React from "react";
import "./tools.css";
import html from "../../assets/imgs/outils/html-5.svg";
import css from "../../assets/imgs/outils/css-3.svg";
import bootstrap from "../../assets/imgs/outils/bootstrap.svg";
import javascript from "../../assets/imgs/outils/javascript.svg";
import react from "../../assets/imgs/outils/react.svg";
import git from "../../assets/imgs/outils/git.svg";
import github from "../../assets/imgs/outils/github-icon.svg";
import gitlab from "../../assets/imgs/outils/gitlab.svg";
import vscode from "../../assets/imgs/outils/visual-studio-code.svg";
import firebase from "../../assets/imgs/outils/firebase.svg";
import netlify from "../../assets/imgs/outils/netlify.svg";
import vercel from "../../assets/imgs/outils/vercel.svg";

const tools = () => {
  return (
    <div id="tools" className="min-vh-100 pt-5 bg-dark">
      <div className="container text-light">
        <h4 className="text-danger">Tools ⚒️</h4>
        <div className="row">
          <div>
            <h2>IDE</h2>
            <hr />
            <div className="code d-flex justify-content-start align-items-center gap-3 mb-5">
              <img src={vscode} alt="" className="img-fluid" />
            </div>
          </div>
          <div>
            <h2>Technology</h2>
            <hr />
            <div className="code d-flex justify-content-start align-items-center gap-3 mb-5">
              <img src={html} alt="" className="img-fluid" />
              <img src={css} alt="" className="img-fluid" />
              <img src={bootstrap} alt="" className="img-fluid" />
              <img src={javascript} alt="" className="img-fluid" />
              <img src={react} alt="" className="img-fluid" />
            </div>
          </div>
          <div>
            <h2>Versioning</h2>
            <hr />
            <div className="code d-flex justify-content-start align-items-center gap-3 mb-5">
              <img src={git} alt="" className="img-fluid" />
              <img src={github} alt="" className="img-fluid" />
              <img src={gitlab} alt="" className="img-fluid" />
            </div>
          </div>
          <div>
            <h2>API</h2>
            <hr />
            <div className="code d-flex justify-content-start align-items-center gap-3 mb-5">
              <img src={firebase} alt="" className="img-fluid" />
            </div>
          </div>
          <div>
            <h2>Deployment</h2>
            <hr />
            <div className="code d-flex justify-content-start align-items-center gap-3 mb-5">
              <img src={netlify} alt="" className="img-fluid" />
              <img src={vercel} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tools;
