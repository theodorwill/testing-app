/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Validate from '../components/validate';
import { validateZipCode, createHeading, formatPrice, isLowerCase, isPrime, genitive, getUsers, getGroups } from '../utils/functionLibrary';


test('renders learn react link', () => {
  render(<Validate email={'something@gmail.com'} />);
  const linkElement = screen.getByText(/email is valid/i);
  expect(linkElement).toBeInTheDocument();
});

describe('validateZipCode', () => {
  it("fails if value is not integer of 5", () => {
    expect(validateZipCode("1234")).toBe(false);
    expect(validateZipCode("123456")).toBe(false);
    expect(validateZipCode("12345")).toBe(true);
  });
});

describe('createHeading', () => {
  it("should pass if it returns header with input string", () => {
    expect(createHeading("Hello")).toBe("<h1>Hello</h1>");
  });
});

describe('formatPrice', () => {
  it("should format the price correctly", () => {
    expect(formatPrice(100, "en-US", "USD")).toBe("$100.00");
    expect(formatPrice(100, "en-IE", "EUR")).toBe("€100.00");
    expect(formatPrice(100, "de-DE", "EUR")).toBe("100,00 €");
    expect(formatPrice(100, "se-SE", "SEK")).toBe("100,00 kr");
  });
});

describe('isLowerCase', () => {
  it("should return true if string is lowercase", () => {
    expect(isLowerCase("hello")).toBe(true);
    expect(isLowerCase("Hello")).toBe(false);
  });
});

describe('isPrime', () => {
  it("should return number if true", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(11)).toBe(true);
  });
});

describe('genitive', () => {
  it("should return input as noun", () => {
    expect(genitive("cat")).toBe("cat's");
    expect(genitive("cats")).toBe("cats");
  });
});

describe('getUsers', () => {
  it("should return users", async () => {
    const users = await getUsers();
    expect(users).toEqual([
      {
        "name": "Erik",
        "group": 1
      },
      {
        "name": "Lisa",
        "group": 2
      },
      {
        "name": "Hampus",
        "group": 2
      },
      {
        "name": "Linda",
        "group": 3
      },
      {
        "name": "Eva",
        "group": 1
      },
      {
        "name": "Anna",
        "group": 3
      }
    ]);
  });
});

describe('getGroups', () => {
  it("should return groups", async () => {
    const groups = await getGroups();
    expect(groups).toEqual([
      {
        "id": 1,
        "groupName": "Hajarna"
      },
      {
        "id": 2,
        "groupName": "Valarna"
      },
      {
        "id": 3,
        "groupName": "Zebrorna"
      }
    ]);
  });
});