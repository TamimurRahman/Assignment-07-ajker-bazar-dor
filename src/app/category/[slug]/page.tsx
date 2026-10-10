
import CategoryPage from "@/components/Banner/CategoryPage";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <CategoryPage slug={slug} />;
};

export default Page;
