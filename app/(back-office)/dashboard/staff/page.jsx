import OperationsPage from "@/components/backOffice/OperationsPage";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function StaffPage() {
  const { stats } = await getDashboardSnapshot();

  return (
    <OperationsPage
      eyebrow="Team enablement"
      title="Commerce team coordination"
      description="This page exists to help merchandising, support, and operations teams work from the same storefront truth instead of managing updates in separate silos."
      primaryAction={{ href: "/dashboard", label: "Open dashboard overview" }}
      secondaryAction={{ href: "/", label: "View storefront" }}
      metrics={[
        { label: "Catalog teams", value: "3", note: "Merchandising, operations, and customer support should share this workspace." },
        { label: "Shared assets", value: stats.totalBanners, note: "Marketing visuals that require cross-team coordination." },
        { label: "Supplier records", value: stats.totalFarmers, note: "Supplier contacts the team can use for procurement follow-up." },
        { label: "Promotion records", value: stats.totalCoupons, note: "Campaign objects the team must understand before launch." },
      ]}
      workflows={[
        {
          eyebrow: "Why this page exists",
          title: "Reduce admin handoff friction",
          description: "Team pages should clarify ownership, not just list users. This route now frames how staff interact with products, campaigns, suppliers, and storefront content during day-to-day work.",
          points: [
            "Merchandising owns products, categories, banners, and coupon readiness.",
            "Operations tracks supplier coverage, markets, and fulfillment risks.",
            "Support reflects the same pricing, promos, and category language customers see.",
          ],
          link: { href: "/dashboard/markets", label: "Review channels" },
        },
        {
          eyebrow: "Next implementation target",
          title: "Add permissions and role management",
          description: "The next concrete step here is access control: team roles, activity logs, and page-level permissions tied to commerce responsibilities.",
          points: [
            "Define admin, merchandising, support, and fulfillment roles.",
            "Track who changed pricing, banners, and coupon states.",
            "Restrict sensitive financial and payout actions.",
          ],
        },
      ]}
    />
  );
}
