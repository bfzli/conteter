import Surnames from "../data/Surnames.json";

export const Surname = () => {
  const randomSurname = Surnames[Math.floor(Math.random() * Surnames.length)];
  return randomSurname;
};

export default Surname;
