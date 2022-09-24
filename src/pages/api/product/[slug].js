import { promises as fs } from 'fs';
import path from 'path';

export default async function productHandler(req, res) {
  try {
    const { query } = req;
    const { slug } = query;

    const jsonDirectory = path.join(process.cwd(), 'mock-data');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/product_segment.json', 'utf8');

    const jsonProduct = JSON.parse(fileContents);

    const filtered = jsonProduct.filter((p) => p.segment === slug);
    // User with id exists
    return filtered.length > 0
      ? res.status(200).json(filtered[0])
      : res.status(404).json({ message: `Product with id: ${slug} not found.` });
  } catch (error) {
    res.status(500).json({ error: 'Error reading data' });
  }
}
