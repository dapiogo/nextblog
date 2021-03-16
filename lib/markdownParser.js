//backend
import { join } from 'path'; //biblioteka potrzebna do localnych sciezek
import fs from 'fs'; // modul fs uzmozliwia akcje z filesystemem (np odczytanie roznych folderow z naszej apki)
import matter from 'gray-matter';
// process.cwd() - zwraca sciezke na folderow na ktorych pracuje nasz skrypt nodejs

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  //odczytujemy co znajduje sie w sciezce directory
  console.log(directory, process.cwd(), 'directroy proces cwd');
  //   /Users/dg/Desktop/workspace/nextblog/_projects /Users/dg/Desktop/workspace/nextblog directroy proces cwd

  const files = fs.readdirSync(directory); //fn do czytania naszych plikow , // [ 'ecommerce-online.md', 'local-food.md', 'reporting-tool.md' ] - files

  return files.map((file) => {
    const fullPath = join(directory, file); //pelna sciezka naszego jednego pliku
    // workspace/nextblog/_projects/ecommerce-online.md
    // workspace/nextblog/_projects/local-food.md
    // workspace/nextblog/_projects/reporting-tool.md
    console.log(fullPath);

    const fileContent = fs.readFileSync(fullPath, 'utf8'); //to czyta co mamy w pliku bez paramtetru utf-8 dostaje buffer
    console.log(fileContent); //POKAZUJE ZAWARTOSC PLIKU

    const { data } = matter(fileContent); //mater zamienia go na obiekt
    console.log(data);

    return {
      ...data,
      slug: file.replace('.md', ''), //potrzebny do generowania podstron
      createAt: data.date ? Number(new Date(data.date)) : null
    };
  });
};
