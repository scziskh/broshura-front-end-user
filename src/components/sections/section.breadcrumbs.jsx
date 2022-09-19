import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { sitemap } from '../helpers/builders/sitemap';

const BreadcrumbsSection = props => {
  const router = useRouter();
  const pathnames = router.pathname.split('/');
  const path = pathnames[pathnames.length - 1];

  const breadcrumbs = pathnames.map((element, index) => {
    const temp = pathnames.map(item => item);
    temp.length = index + 1;
    const href = temp.reduce((accum, curr, currIndex) => {
      const result =
        currIndex === 0
          ? `/${curr}`
          : `${accum === '/' ? '/' : accum + '/'}${curr}`;
      return result;
    }, undefined);

    return (
      <Crumb key={index}>
        <Link href={href}>{sitemap[element]}</Link>
      </Crumb>
    );
  });
  return (
    <Wrapper>
      <h2>{sitemap[path]}</h2>
      <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: var(--yellowGrad);
  margin-bottom: 48px;
`;

const Breadcrumbs = styled.div`
  padding-bottom: 16px;
  text-align: center;
  p:nth-last-child(-n + 1):after {
    display: none;
  }
`;

const Crumb = styled.p`
  display: inline-flex;
  &::after {
    margin: 0 5px;
    content: '/';
    display: inline-flex;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default BreadcrumbsSection;
