const SpinnerComponent = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div
        role="status"
        aria-label="Loading"
        className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-500"
      />
    </div>
  );
};

export default SpinnerComponent;
