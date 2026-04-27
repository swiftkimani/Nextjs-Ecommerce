import OperationsPage from "@/components/backOffice/OperationsPage";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function CommunityPage() {
  const { stats } = await getDashboardSnapshot();

  return (
    <OperationsPage
      eyebrow="Growth campaigns"
      title="Audience and campaign planning"
      description="This page exists to connect merchandising, promotions, and brand storytelling before those campaigns are pushed to the storefront."
      primaryAction={{ href: "/dashboard/banners", label: "Manage hero banners" }}
      secondaryAction={{ href: "/offer", label: "View offer page" }}
      metrics={[
        { label: "Banner slots", value: stats.totalBanners, note: "Homepage and campaign visuals currently available." },
        { label: "Live coupons", value: stats.totalCoupons, note: "Promotional hooks that can anchor campaigns." },
        { label: "Featured items", value: stats.featuredProducts, note: "Products already positioned for merchandising stories." },
        { label: "Discounted items", value: stats.discountedProducts, note: "Sale products ready for seasonal pushes." },
      ]}
      workflows={[
        {
          eyebrow: "Why this page exists",
          title: "Plan campaigns from live commerce data",
          description: "Campaign planning only matters if it reflects what the storefront can actually sell. This route ties your banner inventory, offers, and featured products back into one marketing surface.",
          points: [
            "Pair active coupons with homepage hero content.",
            "Use featured products as launch anchors for campaigns.",
            "Coordinate campaign timing with what is truly available in the catalog.",
          ],
          link: { href: "/dashboard/coupons", label: "Open coupon records" },
        },
        {
          eyebrow: "Next implementation target",
          title: "Turn this into a campaign calendar",
          description: "The next step is to add campaign schedules, content approvals, and performance notes mapped to products and promotions.",
          points: [
            "Add scheduled launches and end dates.",
            "Store campaign briefs and approvals.",
            "Track which catalog items were included in each push.",
          ],
        },
      ]}
    />
  );
}
