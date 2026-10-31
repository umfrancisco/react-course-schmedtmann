import { faker } from "@faker-js/faker";
import { createContext } from "react";
import type { PostContextType } from "../types";

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export const PostContext = createContext<PostContextType>(null!);