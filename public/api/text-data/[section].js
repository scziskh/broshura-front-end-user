import { contactUs } from './data/contact-us.text-data';
import { info } from './data/info.text-data';
import { main } from './data/main.text-data';
import { services } from './data/services.text-data';

export default async function handler(req, res) {
  const { section } = req.query;
  const textData = {
    contactUs,
    info,
    main,
    services,
  };

  res.status(200).json(textData[section]);
}
