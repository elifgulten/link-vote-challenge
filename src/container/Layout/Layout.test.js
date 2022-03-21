import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../Layout";

test("Layout render corretly", () => {
  render(<Layout />);

  const image = screen.getAllByRole("img");
  expect(image).toHaveLength(2);

  const logoHepsiburada = screen.getByAltText("hepsiburada_logo");
  expect(logoHepsiburada.src).toContain("logo.png");
  expect(logoHepsiburada).toBeInTheDocument();

  const logoLinkVote = screen.getByAltText("link_vote_challenge_logo");
  expect(logoLinkVote.src).toContain("link-vote.png");
  expect(logoLinkVote).toBeInTheDocument();
});
