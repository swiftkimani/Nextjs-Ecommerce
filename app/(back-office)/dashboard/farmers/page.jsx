import CatalogTable from "@/components/backOffice/CatalogTable";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function Farmers() {
  const { catalog } = await getDashboardSnapshot();
  const rows = catalog.farmers.map((farmer) => ({
    id: farmer.id,
    name: farmer.name,
    code: farmer.code || "No code",
    email: farmer.email || "No email",
    role: "Catalog supplier",
    previewHref: "/shop",
    editHref: `/dashboard/farmers/update/${farmer.id}`,
  }));

  return (
    <div>
      <PageHeader
        heading="Suppliers"
        href="/dashboard/farmers/new"
        linkTitle="Add supplier"
        storefrontHref="/shop"
        description="Supplier and procurement records attached to the live product catalog."
      />
      <TableActions
        storefrontHref="/shop"
        summary="Supplier data ties inventory ownership, procurement context, and product sourcing back to the same storefront-visible catalog records."
      />
      <CatalogTable
        title="Supplier directory"
        columns={[
          { key: "name", label: "Name" },
          { key: "code", label: "Code" },
          { key: "email", label: "Email" },
          { key: "role", label: "Role" },
          { key: "actions", label: "Actions" },
        ]}
        rows={rows}
        emptyMessage="No suppliers yet. Add supplier records to enrich your inventory data."
      />
    </div>
  );
}
