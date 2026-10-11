
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[#E1E9E1] bg-[#F0F5F0]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 px-5 py-5 sm:flex-row sm:items-center sm:px-6">

        {/* Left: Brand */}
        <div>
          <h2 className="text-sm font-bold text-[#26352B]">
            বাজার দর
          </h2>

          <p className="mt-1 text-[11px] text-gray-500">
            প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>
        </div>

        {/* Right: Disclaimer */}
        <p className="text-[10px] leading-relaxed text-gray-500 sm:max-w-[380px] sm:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
          পরিবর্তিত হয়।
        </p>

      </div>
    </footer>
  );
};

export default Footer;
