import Heading from "@/components/backOffice/Heading";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add Products"
      />
      {/* Table Actions */}

      <TableActions/>

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
