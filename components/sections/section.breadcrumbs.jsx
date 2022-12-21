import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGetLocaleQuery } from '../../services/redux/api/localeApi';

const BreadcrumbsSection = (props) => {
  const { pathname, locale } = useRouter();
  console.log(props);

  //fetching text
  const { data: text } = useGetLocaleQuery({
    locale,
    part: 'breadcrumbsSection',
  });

  //pathnames of path of current page
  const pathnames = pathname.split('/');

  //current page pathname
  const path = pathnames[pathnames.length - 1];

  //Breadcrumbs
  const breadcrumbs = pathnames.map((page, index) => {
    const temp = pathnames.map((item) => item);
    temp.length = index + 1;

    //path of current breadcrumb
    const href = temp.reduce((accum, curr, currIndex) => {
      const result =
        currIndex === 0
          ? `/${curr}`
          : `${accum === '/' ? '/' : accum + '/'}${curr}`;
      return result;
    }, undefined);

    //Breadcrumb JSX
    return (
      <Crumb key={index}>
        <Link href={href}>
          <a>{text?.[page]}</a>
        </Link>
      </Crumb>
    );
  });

  //Breadcrumbs JSX
  return (
    <Wrapper>
      <h2>{text?.[path]}</h2>
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
