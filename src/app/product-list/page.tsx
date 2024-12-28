import { CategoriesList } from "~/components/categories/categories-list";
import { CustomizationSection } from "~/components/customization-section";
import { ProductList } from "~/components/product/product-list";
import { MenuThemeProvider } from "~/components/theme-context";
import {
  getAllCategories,
  getAllMenuThemes,
  getAllProducts,
} from "~/server/queries";

export default async function ProductListView() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  const initialTheme = await getAllMenuThemes();

  console.log("categories: ", categories);
  return (
    initialTheme[0] && (
      <MenuThemeProvider initialTheme={initialTheme[0]}>
        <CategoriesList categories={categories} />
        <ProductList products={products} />
        <CustomizationSection />
      </MenuThemeProvider>
    )
  );
}
