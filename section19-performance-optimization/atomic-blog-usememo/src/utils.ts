import { faker } from "@faker-js/faker";

export const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export const handleRandomPost = (length: number) => {
  return Array.from({ length }, () => createRandomPost());
}