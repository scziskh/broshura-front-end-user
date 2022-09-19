import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const BreadcrumbsSection = props => {
  const router = useRouter();
  const myArray = router.pathname.split('/');

  const breadcrumbs = myArray.map((element, index) => {
    const path =
      index === 0 ? `/${element}` : `${myArray[index - 1]}/${element}`;
    return (
      <Crumb  key={index}>
      <Link href={path}>
        page
      </Link></Crumb>
    );
  });
  return (
    <Wrapper>
      <h2>Наши услуги</h2>
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
}`

export default BreadcrumbsSection;
