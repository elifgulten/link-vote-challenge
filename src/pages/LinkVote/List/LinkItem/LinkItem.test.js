import { render, screen } from "@testing-library/react";
import LinkItem from "../LinkItem";

test("Link item page render corretly", () => {
  const { container } = render(<LinkItem />);

  const upVote = container.getElementsByClassName(/up-vote/i);
  expect(upVote.textContent).not.toBe(null);

  const downVote = container.getElementsByClassName(/down-vote/i);
  expect(downVote.textContent).not.toBe(null);

  const deleteBtn = container.getElementsByClassName(/delete/i);
  expect(deleteBtn).not.toBe(null);

  expect(screen.queryAllByTestId("vote").textContent).not.toBe(null);
});

test("Link item page render corretly with props", () => {
  const fakeData = {
    id: "1",
    linkName: "test",
    linkUrl: "http://www.test.com",
    vote: 0,
  };

  const { container } = render(<LinkItem item={fakeData} />);

  const upVote = container.getElementsByClassName(/up-vote/i);
  expect(upVote.textContent).not.toBe(null);

  const downVote = container.getElementsByClassName(/down-vote/i);
  expect(downVote.textContent).not.toBe(null);

  const deleteBtn = container.getElementsByClassName(/delete/i);
  expect(deleteBtn).not.toBe(null);

  expect(screen.queryByTestId("vote").textContent).toBe(
    fakeData.vote.toString()
  );
});
