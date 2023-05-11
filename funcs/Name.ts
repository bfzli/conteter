import Names from "../data/Names.json";

export const Name = () => {
  const randomName = Names[Math.floor(Math.random() * Names.length)];
  return randomName;
};

export default Name;
