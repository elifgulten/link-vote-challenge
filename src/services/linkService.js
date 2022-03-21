import { uuidv4 } from "../utils";

const LINK_LOCAL_STORAGE_KEY = "link";

export const getLinkItems = () => {
  try {
    const linkItems =
      JSON.parse(localStorage.getItem(LINK_LOCAL_STORAGE_KEY)) || [];
    return linkItems;
  } catch {
    return [];
  }
};

export const getPagedLinkItems = (sorting) => {
  try {
    if (!sorting) {
      sorting = { prop: "createdDate", direction: "desc" };
    }

    let linkItems =
      JSON.parse(localStorage.getItem(LINK_LOCAL_STORAGE_KEY)) || [];

    if (sorting.prop !== "createdDate") {
      linkItems = linkItems.sort((item1, item2) => {
        let data1 = item1;
        let data2 = item2;

        if (sorting.direction === "desc") {
          data1 = item2;
          data2 = item1;
        }

        return data1[sorting.prop] - data2[sorting.prop];
      });
    }

    var count = Math.ceil(linkItems.length / 5);

    var response = {
      pagedData: {},
      totalCount: linkItems.length,
    };

    [...Array(count)].forEach((e, i) => {
      response.pagedData[i + 1] = linkItems.slice(i * 5, 5 * (i + 1));
    });

    return response;
  } catch {
    return {
      pagedData: {},
      totalCount: 0,
    };
  }
};

export const addLinkItems = (linkName, linkUrl) => {
  try {
    new URL(linkUrl);

    const data = {
      linkName,
      linkUrl,
      createdDate: new Date(),
      id: uuidv4(),
      vote: 0,
    };

    const linkItems = getLinkItems();

    linkItems.push(data);

    const sortedList = linkItems.sort(
      (item1, item2) =>
        new Date(item2.createdDate) - new Date(item1.createdDate)
    );

    localStorage.setItem(LINK_LOCAL_STORAGE_KEY, JSON.stringify(sortedList));

    return true;
  } catch {
    return false;
  }
};

export const deleteLinkItem = (id) => {
  try {
    const linkItems = getLinkItems();

    const newItems = linkItems.filter((item) => item.id !== id);

    localStorage.setItem(LINK_LOCAL_STORAGE_KEY, JSON.stringify(newItems));

    return true;
  } catch {
    return false;
  }
};

export const voteUpdate = (id, sign) => {
  const linkItems = getLinkItems();
  try {
    const item = linkItems.find((item) => item.id === id);
    if (!item) return;
    if (sign === "-") {
      item.vote -= 1;
    } else {
      item.vote += 1;
    }

    const updatedItems = [...linkItems.filter((item) => item.id !== id), item];

    // createdDate'e göre sıralama (Ekran ilk açıldığında tarihe göre sırlanmalı)
    const sortedList = updatedItems.sort(
      (item1, item2) =>
        new Date(item2.createdDate) - new Date(item1.createdDate)
    );

    localStorage.setItem(LINK_LOCAL_STORAGE_KEY, JSON.stringify(sortedList));

    return sortedList;
  } catch {
    return linkItems;
  }
};
