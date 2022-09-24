import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'mock-data');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');

    const json = JSON.parse(fileContents);

    // User with id exists
    res.status(200).json(json);
  } catch (error) {
    res.status(500).json({ error: 'Error reading data' });
  }
}
