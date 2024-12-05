import Heading from "@/components/backOffice/Heading";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";

export default function Farmers() {
  return (
    <div>
      <PageHeader
        heading="Farmers"
        href="/dashboard/farmers/new"
        linkTitle="Add Farmer"
      />
      {/* Table Actions */}

      <TableActions />

      <div className="py-8">
        <h2>Coupons</h2>
      </div>
    </div>
  );
}
