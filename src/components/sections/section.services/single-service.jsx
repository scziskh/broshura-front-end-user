import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../../api/Container';
import ButtonLink from '../../form-items/button.link';
import Advantages from './advantages';

const SingleService = ({ props }) => {
  return (
    <Wrapper>
      <Link href={props.href}>
        <a>
          <ImageBackground>
            <Container>
              <Image
                src={`/assets/${props.img}`}
                width={320}
                height={320}
                layout="responsive"
                alt={props.alt}
              />
            </Container>
          </ImageBackground>
          <h3>
            {props.productName} <span>{props.serviceName}</span>
          </h3>
          <Advantages advantages={props.advantages} />
        </a>
      </Link>

      <ButtonLink text="ORDER_NOW" href={props.href} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 24px;
  width: calc(25% - 30px);
  @media screen and (max-width: 1280px) {
    & {
      width: calc(50% - 20px);
    }
  }
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

const ImageBackground = styled.div`
  & {
    border-radius: 8px;
    overflow: hidden;
    background: var(--black);
    width: 100%;
  }
`;

export default SingleService;
