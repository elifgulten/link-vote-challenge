import React, { useEffect, useState } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Pagination = (props) => {
  const [pageCount, setPageCount] = useState(1);
  const [activePageCount, setActivePageCount] = useState(1);

  useEffect(() => {
    setActivePageCount(props.pageNumber);
  }, [props.pageNumber]);

  useEffect(() => {
    setPageCount(Math.ceil(props.totalCount / props.skipCount));
  }, [props.totalCount, props.skipCount]);

  const onChangePage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > pageCount) return;
    setActivePageCount(pageNumber);
    props.onChangePage(pageNumber);
  };

  return (
    pageCount > 1 && (
      <div className="pagination">
        <span onClick={() => onChangePage(activePageCount - 1)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>

        <ul>
          {[...Array(pageCount)].map((e, i) => (
            <li
              className={activePageCount === i + 1 ? "active" : ""}
              key={i}
              onClick={() => onChangePage(i + 1)}
            >
              {i + 1}
            </li>
          ))}
        </ul>
        <span onClick={() => onChangePage(activePageCount + 1)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
    )
  );
};

export default Pagination;
