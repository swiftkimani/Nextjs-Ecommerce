import CatalogTableWithEdit from "@/components/backOffice/CatalogTableWithEdit";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function page() {
  const { catalog } = await getDashboardSnapshot();
  const rows = catalog.products.map((product) => ({
    id: product._id,
    title: product.productName,
    category: product.category,
    price: `Ksh ${product.price}`,
    tags: Array.isArray(product.tags) ? product.tags.slice(0, 2).join(", ") || "None" : "None",
    previewHref: `/product/${product._id}`,
  }));

  return (
    <div>
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add product"
        storefrontHref="/shop"
        description="Live product records powering storefront shelves, search, and detail pages."
      />
      <TableActions
        storefrontHref="/shop"
        summary="These products feed the homepage collections, search layer, shop listing, and product detail pages."
      />
      <CatalogTableWithEdit
        title="Live product catalog"
        columns={[
          { key: "title", label: "Product" },
          { key: "category", label: "Category" },
          { key: "price", label: "Price" },
          { key: "tags", label: "Tags" },
          { key: "actions", label: "Actions" },
        ]}
        rows={rows}
        emptyMessage="No products yet. Add your first product to populate the storefront."
        editFormType="product"
        panelTitle="Edit Product"
        panelDescription="Update pricing, category, supplier, and product details."
      />
    </div>
  );
}
