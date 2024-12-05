
import Heading from "@/components/backOffice/Heading";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import React from "react";

export default function Markets() {
  return (
    <div>
      <PageHeader
        heading="Markets"
        href="/dashboard/markets/new"
        linkTitle="Add Market"
      />
      {/* Table Actions */}

      <TableActions />

      <div className="py-8">
        <h2>Table Markets</h2>
      </div>
    </div>
  );
}
