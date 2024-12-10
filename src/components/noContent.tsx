import React from "react";

type NoContentPageProps = {
  name: string;
};

const NoContentPage: React.FC<NoContentPageProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          No Content Found
        </h1>
        <p className="text-gray-700 dark:text-gray-400">
          Sorry, we couldn't find any movie matching "
          <span className="font-semibold text-red-400">{name}</span>".
        </p>
      </div>
    </div>
  );
};

export default NoContentPage;
