import OperationsPage from "@/components/backOffice/OperationsPage";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function WalletPage() {
  const { stats } = await getDashboardSnapshot();

  return (
    <OperationsPage
      eyebrow="Payout operations"
      title="Revenue, payouts, and settlement prep"
      description="This workspace exists to keep pricing, promotions, supplier records, and payout workflows aligned before finance automation is added."
      primaryAction={{ href: "/dashboard/farmers", label: "Review suppliers" }}
      secondaryAction={{ href: "/dashboard/products", label: "Review pricing" }}
      metrics={[
        { label: "Inventory value", value: stats.inventoryValueLabel, note: "Current catalog valuation based on visible product pricing." },
        { label: "Discount exposure", value: stats.discountedProducts, note: "Discounted products that can impact margin review." },
        { label: "Supplier ledger inputs", value: stats.totalFarmers, note: "Supplier records that will influence payout and procurement workflows." },
        { label: "Sales channels", value: stats.totalMarkets, note: "Markets that can later drive channel-level reconciliation." },
      ]}
      workflows={[
        {
          eyebrow: "Why this page exists",
          title: "Finance should read the same commerce signals",
          description: "Payout and margin review become unreliable when finance works from stale exports. This page anchors finance planning to the same live prices, discounts, and supplier relationships used in the storefront.",
          points: [
            "Track margin pressure created by sale pricing.",
            "Use supplier records to prepare settlement and procurement discussions.",
            "Review market structure before introducing channel-based reconciliation.",
          ],
          link: { href: "/dashboard/markets", label: "Open markets" },
        },
        {
          eyebrow: "Next implementation target",
          title: "Add settlement workflows and financial reporting",
          description: "Once payment and order data exist, this route should evolve into payout runs, margin snapshots, and supplier settlement history.",
          points: [
            "Add revenue summaries by channel and period.",
            "Track supplier payables and settlement status.",
            "Flag discounts and coupon use in margin reporting.",
          ],
        },
      ]}
    />
  );
}
