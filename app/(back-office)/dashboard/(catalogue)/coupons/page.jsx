import Heading from "@/components/backOffice/Heading";
import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import React from "react";

export default function Coupons() {
  return (
    <div>
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      />
      {/* Table Actions */}

      <TableActions />

      <div className="py-8">
        <h2>Coupons</h2>
      </div>
    </div>
  );
}
