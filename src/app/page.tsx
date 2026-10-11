import { Suspense } from "react";
import Products from "@/components/Banner/Products";

export default function Home() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex min-h-40 items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <Products />
      </Suspense>
    </div>
  );
}