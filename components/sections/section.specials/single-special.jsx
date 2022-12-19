import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const SingleSpecial = ({ props }) => {
  const locale = useRouter().locale;

  return (
    <Wrapper className="col-2">
      <Link href={`/special/${props.path}`}>
        <a>
          <Image
            src={`/specials/${props.img(locale)}`}
            width={745}
            height={350}
            alt={props.name}
          />
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  img {
    width: 100%;
  }
  a {
    display: flex;
    overflow: hidden;
    border-radius: 8px;
  }
`;

export default SingleSpecial;
