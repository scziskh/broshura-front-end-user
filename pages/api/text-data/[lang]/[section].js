import { textData } from '../data';

export default async function handler(req, res) {
  const { section, lang } = req.query;
  res.status(200).json(textData[section][lang]);
}
