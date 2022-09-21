import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const SingleSpecial = ({ props }) => (
  <Wrapper className="col-2">
    <Link href={`/special/${props.path}`}>
      <a>
        <Image
          src={`/specials/${props.img}`}
          width={745}
          height={350}
          alt={props.name}
        />
      </a>
    </Link>
  </Wrapper>
);

const Wrapper = styled.article`
  img {
    width: 100%;
  }
`;

export default SingleSpecial;
