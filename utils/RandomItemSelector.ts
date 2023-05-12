export default function RandomItemSelector(data: string[]): string {
  const randomItem = data[Math.floor(Math.random() * data.length)];
  return randomItem;
}
