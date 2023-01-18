import { calc } from './data/calc.data';

export default async function handler(req, res) {
  res.status(200).json(calc);
}
