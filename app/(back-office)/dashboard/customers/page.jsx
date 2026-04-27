import OperationsPage from "@/components/backOffice/OperationsPage";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function CustomersPage() {
  const { stats } = await getDashboardSnapshot();

  return (
    <OperationsPage
      eyebrow="Customer operations"
      title="Customer lifecycle workspace"
      description="Use this area to shape post-purchase service, retention campaigns, and shopper support around the catalog currently sold on the storefront."
      primaryAction={{ href: "/shop", label: "Review shopper journey" }}
      secondaryAction={{ href: "/", label: "Open storefront" }}
      metrics={[
        { label: "Catalog breadth", value: stats.totalProducts, note: "Products that customers can currently browse and purchase." },
        { label: "Browse paths", value: stats.totalCategories, note: "Category structures driving navigation and discovery." },
        { label: "Promo hooks", value: stats.totalCoupons, note: "Coupon records available for retention and reactivation." },
        { label: "Sales channels", value: stats.totalMarkets, note: "Markets and storefront contexts customers move through." },
      ]}
      workflows={[
        {
          eyebrow: "Why this page exists",
          title: "Connect catalog activity to customer care",
          description: "Customer operations should not sit apart from merchandising. This page gives the team one place to review the live offer, active promos, and channel structure before handling service or retention work.",
          points: [
            "Review live categories before drafting support replies or FAQs.",
            "Use active promotions to inform retention offers and cart-recovery messaging.",
            "Keep storefront language, pricing, and support guidance aligned.",
          ],
          link: { href: "/dashboard/coupons", label: "Open promotions" },
        },
        {
          eyebrow: "Next implementation target",
          title: "Prepare this section for real customer data",
          description: "The route now has an operational purpose and can be extended next with orders, profiles, addresses, and service tickets once those models are added.",
          points: [
            "Add customer accounts and order history.",
            "Introduce service-status and refund workflows.",
            "Connect marketing segmentation to coupon usage.",
          ],
          link: { href: "/dashboard/orders", label: "Review order operations" },
        },
      ]}
    />
  );
}
