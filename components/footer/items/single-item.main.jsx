import Link from 'next/link';

const FooterMainSingleItem = props => (
  <li>
    <Link href={props.href}>
      <a>{props.name}</a>
    </Link>
  </li>
);
export default FooterMainSingleItem;
