import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../../components/Pagination";
import Select from "./Select";
import { useToast } from "../../../store/context/ToastContext";
import { useModal } from "../../../store/context/ModalContext";
import LinkItem from "./LinkItem";
import {
  getPagedLinkItems,
  deleteLinkItem,
  voteUpdate,
} from "../../../services/linkService";
import "./style.scss";

const List = () => {
  const [pagedItems, setPagedItems] = useState(null);
  const [direction, setDirection] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const toastContext = useToast();
  const modalContext = useModal();

  let navigate = useNavigate();

  useEffect(() => {
    const pagedResponse = getPagedLinkItems();

    setPagedItems(pagedResponse);
  }, []);

  useEffect(() => {
    if (direction === null) return;

    const pagedResponse = getPagedLinkItems({ prop: "vote", direction });

    setPagedItems(pagedResponse);
  }, [direction]);

  const handleVote = (id, sign) => {
    voteUpdate(id, sign);

    const pagedResponse = getPagedLinkItems({
      prop: "vote",
      direction: direction || "desc",
    });

    setPagedItems(pagedResponse);
  };

  const onDelete = (linkItem) => {
    modalContext.showModal(
      `<span>Do you want to remove:</span><span>${linkItem.linkName}</span>`,
      () => {
        const responseService = deleteLinkItem(linkItem.id);

        if (responseService) {
          const pagedResponse = getPagedLinkItems();

          if (Object.keys(pagedResponse.pagedData).length < pageNumber)
            setPageNumber(1);

          setPagedItems(pagedResponse);
          toastContext.showToast(
            "success",
            `<span>${linkItem.linkName}</span><span>removed</span>`
          );
        } else {
          toastContext.showToast("error", "Silinirken hata oluştu");
        }
      }
    );
  };

  return (
    <div className="list-page">
      <div className="submit" onClick={() => navigate("/add")}>
        <div className="icon">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <span>Submit a link</span>
      </div>

      <hr />

      <Select
        onOrderChange={(direction) => setDirection(direction)}
        direction={direction}
      />

      <div className="items">
        {pagedItems &&
          pagedItems.pagedData[pageNumber] &&
          pagedItems.pagedData[pageNumber].map((item) => {
            return (
              <LinkItem
                key={item.id}
                item={item}
                upVote={(id) => handleVote(id, "+")}
                downVote={(id) => handleVote(id, "-")}
                onDelete={onDelete}
              />
            );
          })}
      </div>

      <Pagination
        totalCount={pagedItems?.totalCount || 0}
        skipCount={5}
        onChangePage={(pageNumber) => setPageNumber(pageNumber)}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default List;
