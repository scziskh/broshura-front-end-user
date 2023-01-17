import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const loader = document.getElementById('loader');
    const handleStart = () => {
      loader.classList.remove('loading-complete');
      loader.classList.remove('loading-start');
      loader.classList.add('loading-start');
    };
    const handleComplete = () => {
      loader.classList.remove('loading-start');
      loader.classList.add('loading-complete');
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router]);

  return <Loader id="loader" />;
};

const Loader = styled.div`
  background: var(--yellowGrad);
  z-index: 999;
  height: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default Loading;
