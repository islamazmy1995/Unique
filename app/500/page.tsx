export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">500</h1>
        <p className="text-xl text-gray-600">Server-side error occurred</p>
        <p className="mt-4 text-gray-500">
          We're working on fixing this. Please try again later.
        </p>
      </div>
    </div>
  );
}
