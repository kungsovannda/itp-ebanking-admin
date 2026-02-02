'use client';

import PageContainer from '@/components/layout/page-container';
import { productInfoContent } from '@/config/infoconfig';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [account, setAccount] = useState<{ data: string }>();
  useEffect(() => {
    const fetcher = async () => {
      fetch('/account/public/test')
        .then((response) => response.json())
        .then((data) => setAccount(data));
    };

    fetcher();
  }, []);

  return (
    <PageContainer
      scrollable={false}
      pageTitle='Token Handler'
      pageDescription='Token Handler with BFF Pattern'
      infoContent={productInfoContent}
    >
      <div className='font-semi-bold text-2xl text-blue-500'>
        {account?.data}
      </div>
    </PageContainer>
  );
}
