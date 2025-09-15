import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) => {
  const category =
    (await (searchParams ?? Promise.resolve({} as { category?: string })))
      .category || "";
  return (
    <div className="">
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;
