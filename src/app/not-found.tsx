
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-green-700">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        কোনো পণ্য পাওয়া যায়নি!
      </h2>

      <p className="mt-2 max-w-md text-gray-500">
        দুঃখিত, আপনি যে ক্যাটাগরি বা পণ্যটি খুঁজছেন,
        সেটি পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;
