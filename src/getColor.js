export const getRandomColor = () => {
  const hexadecimal = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const hexa = Array(6)
    .fill("")
    .map(
      (x) => (x = hexadecimal[Math.floor(Math.random() * hexadecimal.length)])
    )
    .join("");
  return "#" + hexa;
};