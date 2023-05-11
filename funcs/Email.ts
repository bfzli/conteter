import Emails from "../data/Emails.json";

export const Email = () => {
  const randomEmail = Emails[Math.floor(Math.random() * Emails.length)];
  return randomEmail;
};

export default Email;
