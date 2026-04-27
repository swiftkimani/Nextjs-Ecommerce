import CatalogTable from "@/components/backOffice/CatalogTable";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function page() {
  const { catalog } = await getDashboardSnapshot();
  const rows = catalog.markets.map((market) => ({
    id: market.id,
    title: market.title,
    slug: market.slug || "No slug",
    description: market.description || "No description",
    logo: market.logoUrl ? "Logo added" : "No logo",
    previewHref: "/shop",
    editHref: `/dashboard/markets/update/${market.id}`,
  }));

  return (
    <div>
      <PageHeader
        heading="Markets"
        href="/dashboard/markets/new"
        linkTitle="Add market"
        storefrontHref="/shop"
        description="Market and sales channel records connected to categories and inventory."
      />
      <TableActions
        storefrontHref="/shop"
        summary="Markets define how the shared catalog can be segmented and presented across storefront contexts."
      />
      <CatalogTable
        title="Market records"
        columns={[
          { key: "title", label: "Market" },
          { key: "slug", label: "Slug" },
          { key: "description", label: "Description" },
          { key: "logo", label: "Branding" },
          { key: "actions", label: "Actions" },
        ]}
        rows={rows}
        emptyMessage="No markets yet. Add markets to structure sales channels."
      />
    </div>
  );
}
