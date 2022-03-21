import React from "react";
import {
  faArrowUp,
  faArrowDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const LinkItem = (props) => {
  const upVote = () => {
    props.upVote(props.item.id);
  };

  const downVote = () => {
    props.downVote(props.item.id);
  };

  const onDelete = () => {
    props.onDelete(props.item);
  };

  return props.item ? (
    <div className="link-item">
      <div className="points">
        <span data-testid="vote">{props.item.vote}</span>
        <span>Points</span>
      </div>
      <div className="detail">
        <div className="info">
          <span className="title">{props.item.linkName}</span>
          <span className="link">{`(${props.item.linkUrl})`}</span>
        </div>
        <div className="action-group">
          <div className="action up-vote" onClick={upVote}>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>Up Vote</span>
          </div>
          <div className="action down-vote" onClick={downVote}>
            <FontAwesomeIcon icon={faArrowDown} />
            <span>Down Vote</span>
          </div>
        </div>
      </div>
      <div className="delete" onClick={onDelete}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LinkItem;
