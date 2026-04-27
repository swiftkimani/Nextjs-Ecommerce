import OperationsPage from "@/components/backOffice/OperationsPage";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function OrdersPage() {
  const { stats } = await getDashboardSnapshot();

  return (
    <OperationsPage
      eyebrow="Order operations"
      title="Fulfillment and order readiness"
      description="This workspace exists to bridge live catalog changes with delivery, payment follow-up, and operational handoff once order data is wired in."
      primaryAction={{ href: "/dashboard/products", label: "Review sellable products" }}
      secondaryAction={{ href: "/shop", label: "Preview storefront" }}
      metrics={[
        { label: "Sellable SKUs", value: stats.totalProducts, note: "Current product count that order workflows will depend on." },
        { label: "Fulfillment nodes", value: stats.totalMarkets, note: "Markets and pickup points that can support routing logic." },
        { label: "Discount rules", value: stats.discountedProducts, note: "Products already carrying sale pricing in the storefront." },
        { label: "Promo codes", value: stats.totalCoupons, note: "Coupons that will need validation during checkout." },
      ]}
      workflows={[
        {
          eyebrow: "Why this page exists",
          title: "Protect fulfillment from catalog drift",
          description: "Order ops need visibility into the exact products, pricing, and channels currently visible to shoppers. This page keeps that connection explicit instead of turning fulfillment into a disconnected admin afterthought.",
          points: [
            "Check category and channel structure before routing deliveries.",
            "Confirm discounted items before handling payment exceptions.",
            "Use supplier coverage to prepare procurement or restocking action.",
          ],
          link: { href: "/dashboard/farmers", label: "Review suppliers" },
        },
        {
          eyebrow: "Next implementation target",
          title: "Expand this into a true order queue",
          description: "Once order entities are added, this page should become the place for payment review, packing states, delivery assignment, and exception handling.",
          points: [
            "Add placed, paid, packed, and dispatched states.",
            "Introduce delivery method and channel tracking.",
            "Support refund, cancellation, and return handling.",
          ],
        },
      ]}
    />
  );
}
