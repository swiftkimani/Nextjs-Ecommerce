import CatalogTableWithEdit from "@/components/backOffice/CatalogTableWithEdit";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function page() {
  const { catalog } = await getDashboardSnapshot();
  const rows = catalog.banners.map((banner) => ({
    id: banner.id,
    title: banner.title,
    link: banner.link,
    image: banner.imageUrl || "No image",
    placement: "Homepage promo",
    previewHref: "/",
  }));

  return (
    <div>
      <PageHeader
        heading="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add banner"
        storefrontHref="/"
        description="Hero and promotional visuals exposed to the public storefront."
      />
      <TableActions
        storefrontHref="/"
        summary="Banner records are shared with the storefront marketing layer and homepage merchandising."
      />
      <CatalogTableWithEdit
        title="Store banner inventory"
        columns={[
          { key: "title", label: "Banner" },
          { key: "link", label: "Link target" },
          { key: "image", label: "Image source" },
          { key: "placement", label: "Placement" },
          { key: "actions", label: "Actions" },
        ]}
        rows={rows}
        emptyMessage="No banners yet. Add banners to power homepage promotions."
        editFormType="banner"
        panelTitle="Edit Banner"
        panelDescription="Update title, destination link, and hero image."
      />
    </div>
  );
}
