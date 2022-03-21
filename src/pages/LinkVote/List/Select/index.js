import React from "react";
import { faCaretDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Select = (props) => {
  const onOrderChange = (direction) => {
    props.onOrderChange(direction);
  };

  const renderOrderLabel = () => {
    if (props.direction === "asc") {
      return (
        <>
          Less Voted (A <FontAwesomeIcon icon={faArrowRight} /> Z)
        </>
      );
    } else if (props.direction === "desc") {
      return (
        <>
          {" "}
          Most Voted (Z <FontAwesomeIcon icon={faArrowRight} /> A)
        </>
      );
    } else {
      return <> Order By</>;
    }
  };

  return (
    <div className="select">
      <button>
        <span>{renderOrderLabel()}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      <ul>
        <li onClick={() => onOrderChange("desc")}>
          Most Voted (Z <FontAwesomeIcon icon={faArrowRight} /> A)
        </li>
        <li onClick={() => onOrderChange("asc")}>
          Less Voted (A <FontAwesomeIcon icon={faArrowRight} /> Z)
        </li>
      </ul>
    </div>
  );
};

export default Select;
