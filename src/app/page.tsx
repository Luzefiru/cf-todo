import Table from './ui/Table';

export default function Home() {
  return (
    <div className="w-full px-4 mx-auto sm:px-6 lg:px-16">
      <h3 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
        Task List
      </h3>
      <Table />
    </div>
  );
}
