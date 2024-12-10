export const PageNotFound: React.FC = () => {
  return (
    <main>
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  );
};
