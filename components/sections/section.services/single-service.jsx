import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../../api/Container';
import ButtonLink from '../../form-items/button.link';
import Advantages from './advantages';

const SingleService = (props) => {
  const { href, img, alt, name, bind, adv, buttonService } = props;
  return (
    <Wrapper>
      <Link href={href}>
        <a>
          <ImageBackground>
            <Container>
              <Image
                src={`/assets/${img}`}
                width={320}
                height={320}
                layout="responsive"
                alt={alt}
              />
            </Container>
          </ImageBackground>
          <h3>
            {bind} <span>{name}</span>
          </h3>
          <Advantages adv={adv} />
        </a>
      </Link>

      <ButtonLink text={buttonService} href={href} />
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
