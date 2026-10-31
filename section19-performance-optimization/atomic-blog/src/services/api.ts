import { faker } from "@faker-js/faker";
import { createContext } from "react";

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export const PostContext = createContext<PostContextAPI>(null!);