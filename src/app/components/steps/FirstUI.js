const FirstUI = () => (
  <div className="text-center space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Facebook Buddy</h1>
    <p>Write a Market research with our AI</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Example card */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <p className="bg-blue-500 text-white text-center py-2 rounded-full">
          Facebook
        </p>
        <p>Run data-driven geo-specific Facebook ads</p>
      </div>
    </div>
  </div>
);

export default FirstUI;
