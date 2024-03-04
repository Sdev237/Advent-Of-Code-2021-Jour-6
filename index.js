import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const cleanAndParse = (text) => {
  // Utilise une expression régulière pour supprimer tous les caractères non numériques
  const cleanedText = text.replace(/[^\d,]/g, "");
  // Divise la chaîne nettoyée en tableau et convertit chaque élément en nombre
  return cleanedText.trim().split(",").map(Number);
};
const part1 = (data) => {
  const DAYS = 80;
  const fishs = cleanAndParse(final);

  for (let day = 0; day < DAYS; day++) {
    const saveLength = fishs.length;
    for (let i = 0; i < saveLength; i++) {
      if (fishs[i] === 0) {
        fishs[i] = 6;
        fishs.push(8);
      } else {
        fishs[i]--;
      }
    }
  }
  return {
    fishs,
    length: fishs.length,
  };
};

console.log("part1:", part1(final));
