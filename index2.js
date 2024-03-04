import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const cleanAndParse = (text) => {
  // Utilise une expression régulière pour supprimer tous les caractères non numériques
  const cleanedText = text.replace(/[^\d,]/g, "");
  // Divise la chaîne nettoyée en tableau et convertit chaque élément en nombre
  return cleanedText.trim().split(",").map(Number);
};

const part2 = (data) => {
  const DAYS = 256;

  const ages = cleanAndParse(data).reduce((acc, curr) => {
    acc[curr] += 1;
    return acc;
  }, Array.from({ length: 9 }).fill(0));

  for (let day = 0; day < DAYS; day++) {
    const day0 = ages.shift();

    ages[6] += day0;
    ages.push(day0);
  }

  return {
    ages,
    l: ages.reduce((acc, curr) => acc + curr),
  };
};

console.log("part2:", part2(final));
