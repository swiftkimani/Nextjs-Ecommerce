import CatalogTableWithEdit from "@/components/backOffice/CatalogTableWithEdit";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function page() {
  const { catalog } = await getDashboardSnapshot();
  const rows = catalog.categories.map((category) => ({
    id: category.id,
    title: category.title,
    slug: category.slug,
    products: `${category.productCount ?? 0} products`,
    markets: Array.isArray(category.markets) ? category.markets.join(", ") || "No markets" : "No markets",
    previewHref: "/shop",
  }));

  return (
    <div>
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add category"
        storefrontHref="/shop"
        description="Category structure used by navigation, search, and merchandising."
      />
      <TableActions
        storefrontHref="/shop"
        summary="Category records organize storefront browsing and feed the shop discovery experience."
      />
      <CatalogTableWithEdit
        title="Live category structure"
        columns={[
          { key: "title", label: "Category" },
          { key: "slug", label: "Slug" },
          { key: "products", label: "Product volume" },
          { key: "markets", label: "Markets" },
          { key: "actions", label: "Actions" },
        ]}
        rows={rows}
        emptyMessage="No categories yet. Add categories to organize the storefront."
        editFormType="category"
        panelTitle="Edit Category"
        panelDescription="Update title, description, markets, and image."
      />
    </div>
  );
}
