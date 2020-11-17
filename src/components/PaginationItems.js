import React from "react";
import { Link } from "react-router-dom";

const PaginationItem = ({ currentPage, numberOfPages }) => {
  let currentP = parseInt(currentPage);
  let numOfPages = parseInt(numberOfPages);
  const isFirst = currentP === 1;
  const isLast = currentP === numOfPages;

  const previousPage =
    currentP - 1 === 1 ? "/" : "/newP/" + (currentP - 1).toString();
  const nextPage = "/newP/" + (currentP + 1).toString();

  return (
    <div className="row" style={{ width: "100%", zIndex: "1" }}>
      <nav className="mx-auto pagination-outer">
        <ul className="pagination ulPag">
          {isFirst ? (
            <li className="page-item disabled">
              <Link to="/newP/1" className="page-link pagA">
                Primero
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/newP/1" className="page-link pagA">
                Primero
              </Link>
            </li>
          )}
          {isFirst ? (
            <li className="page-item disabled">
              <Link to={previousPage} className="page-link pagA">
                Anterior
              </Link>
            </li>
          ) : (
            <li>
              <Link to={previousPage} className="page-link pagA">
                Anterior
              </Link>
            </li>
          )}
          {Array.from({ length: numberOfPages }, (_, i) =>
            currentP === i + 1 ? (
              <li className="page-item active " key={`page-number${i + 1}`}>
                <Link
                  to={`/${i === 0 ? "newP/1" : "newP/" + (i + 1)}`}
                  className="page-link pagA"
                >
                  {i + 1}
                </Link>
              </li>
            ) : (
              <li className="page-item " key={`page-number${i + 1}`}>
                <Link
                  to={`/${i === 0 ? "newP/1" : "newP/" + (i + 1)}`}
                  className="page-link pagA"
                >
                  {i + 1}
                </Link>
              </li>
            )
          )}
          {isLast ? (
            <li className="page-item disabled">
              <Link to={nextPage} className="page-link pagA">
                Siguiente
              </Link>
            </li>
          ) : (
            <li>
              <Link to={nextPage} className="page-link pagA">
                Siguiente
              </Link>
            </li>
          )}
          {isLast ? (
            <li className="page-item disabled">
              <Link to={"/newP/" + numberOfPages} className="page-link pagA">
                Ultimo
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/newP/" + numberOfPages} className="page-link pagA">
                Ultimo
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationItem;
