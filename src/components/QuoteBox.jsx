import React from "react";

const QuoteBox = ({ author, quote, onSubmit }) => {
  return (
    <div className="row justify-content-center animate active">
      <div className="col-10">
        <div className="card text-center">
          <div className="card-header">Random Quote</div>
          <div className="card-body ">
            <blockquote className="blockquote mb-0">
              <p>{quote}</p>
              <footer className="blockquote-footer">
                <cite title={author}>{author}</cite>
              </footer>
            </blockquote>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-2">
                <h2>
                  <a
                    rel="noreferrer"
                    href="https://twitter.com/intent/tweet"
                    className="btn btn-outline-primary"
                    target="_blank"
                  >
                    <i className="bi-twitter"></i>
                  </a>
                </h2>
              </div>
              <div className="col-6"></div>
              <div className="col-4">
                <button onClick={onSubmit} className="btn btn-success">
                  Next Quote
                  <i className="bi bi-arrow-right-circle ms-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
