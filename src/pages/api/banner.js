import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'mock-data');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/banner.json', 'utf8');

    const jsonCategories = JSON.parse(fileContents);

    // User with id exists
    res.status(200).json(jsonCategories);
  } catch (error) {
    res.status(500).json({ error: 'Error reading data' });
  }

  // //Find the absolute path of the json directory
  // const jsonDirectory = path.join(process.cwd(), 'mock-data');
  // //Read the json data file data.json
  // const fileContents = await fs.readFile(jsonDirectory + '/banner.json', 'utf8');
  // //Return the content of the data file in json format
  // res.status(200).json(fileContents);
}
