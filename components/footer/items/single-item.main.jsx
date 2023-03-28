import Link from 'next/link';

const FooterMainSingleItem = (props) => (
  <li>
    <Link href={props.href}>{props.name}</Link>
  </li>
);
export default FooterMainSingleItem;
