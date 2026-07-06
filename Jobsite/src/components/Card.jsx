const Card = ({ children, bg = "bg-gray-100" }) => {
  return (
    <>
      <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
        {/* <h2 className="text-2xl font-bold">For Employers</h2>
        <p className="mt-2 mb-4">
          List your job to find the perfect developer for the role
        </p>
        <a
          href="/add-job.html"
          className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
        >
          Add Job
        </a> */}
      </div>
    </>
  );
};

export default Card;
