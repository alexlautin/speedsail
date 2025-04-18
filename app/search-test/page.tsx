import Search from '../../components/Search';

export default function SearchTestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Search Component Test</h1>
        <Search />
      </div>
    </div>
  );
}
