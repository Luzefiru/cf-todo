import Loading from './loading';
import Table from './ui/Table';
import { Suspense } from 'react';

export const runtime = 'edge';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <div className="w-full px-4 mx-auto sm:px-6 lg:px-16">
      <h3 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
        Task List
      </h3>
      <Suspense fallback={<Loading />}>
        <Table />
      </Suspense>
    </div>
  );
}
