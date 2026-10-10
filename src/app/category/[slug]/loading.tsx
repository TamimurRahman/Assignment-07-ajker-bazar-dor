const Loading = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="h-28 animate-pulse rounded-xl bg-gray-200" />
      <div className="h-28 animate-pulse rounded-xl bg-gray-200" />
      <div className="h-28 animate-pulse rounded-xl bg-gray-200" />
    </div>
  );
};

export default Loading;