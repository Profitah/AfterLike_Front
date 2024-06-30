import Head from 'next/head';
import { css } from '@emotion/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>After Like</title>
        <meta charSet="utf-8" />
      </Head>
      <div>
        <p css={Pstyle}>일해라 백엔드 노예</p>
      </div>
    </>
  );
}

// 세로 가운데 정렬해줘 ai야
const Pstyle = css` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 10em;
  text-align: center;
`;
