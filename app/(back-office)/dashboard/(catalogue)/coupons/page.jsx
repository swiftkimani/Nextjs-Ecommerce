import CatalogTable from "@/components/backOffice/CatalogTable";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function Coupons() {
  const { catalog } = await getDashboardSnapshot();
  const rows = catalog.coupons.map((coupon) => ({
    id: coupon.id,
    title: coupon.title,
    code: coupon.couponCode,
    expiry: coupon.expiryDate?.slice(0, 10) || "No expiry",
    status: coupon.isActive ? "Active" : "Inactive",
    previewHref: "/offer",
    editHref: `/dashboard/coupons/update/${coupon.id}`,
  }));

  return (
    <div>
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add coupon"
        storefrontHref="/offer"
        description="Promotion codes and offer logic that can be surfaced across storefront campaigns."
      />
      <TableActions
        storefrontHref="/offer"
        summary="Coupon data is managed here and can support public promotions and campaign-led conversion flows."
      />
      <CatalogTable
        title="Promotions and coupons"
        columns={[
          { key: "title", label: "Coupon" },
          { key: "code", label: "Code" },
          { key: "expiry", label: "Expiry" },
          { key: "status", label: "Status" },
          { key: "actions", label: "Actions" },
        ]}
        rows={rows}
        emptyMessage="No coupons yet. Add promotions to support storefront offers."
      />
    </div>
  );
}
