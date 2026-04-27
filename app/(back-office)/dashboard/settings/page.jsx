import OperationsPage from "@/components/backOffice/OperationsPage";
import { getDashboardSnapshot } from "@/lib/dashboard";

export default async function SettingsPage() {
  const { stats } = await getDashboardSnapshot();

  return (
    <OperationsPage
      eyebrow="Workspace settings"
      title="Commerce workspace configuration"
      description="This page exists to define how the shared dashboard should evolve: branding, channels, permissions, and future multi-store or multi-tenant boundaries."
      primaryAction={{ href: "/dashboard/staff", label: "Review team setup" }}
      secondaryAction={{ href: "/dashboard", label: "Open dashboard home" }}
      metrics={[
        { label: "Current mode", value: "Single workspace", note: "The codebase currently runs one shared catalog, not true multi-tenancy." },
        { label: "Catalog scope", value: stats.totalProducts, note: "Products managed under the current shared workspace." },
        { label: "Channel count", value: stats.totalMarkets, note: "Markets already available for future partitioning." },
        { label: "Brand assets", value: stats.totalBanners, note: "Banner records that can evolve into store-specific content later." },
      ]}
      workflows={[
        {
          eyebrow: "Why this page exists",
          title: "Make platform boundaries explicit",
          description: "Settings should be where platform decisions live, not a dead link. This route now establishes where workspace identity, access control, and future multi-tenant work should be managed.",
          points: [
            "Clarify that the current implementation is one shared commerce workspace.",
            "Use markets as an early foundation for future channel or tenant separation.",
            "Define staff roles before expanding admin surface area.",
          ],
        },
        {
          eyebrow: "Next implementation target",
          title: "Prepare for true multi-store support",
          description: "If you want multi-tenancy, the next real work is data partitioning. Products, categories, banners, coupons, and orders need store or tenant ownership in the schema and queries.",
          points: [
            "Add a Store or Tenant model in Prisma.",
            "Attach tenant ownership to catalog and order entities.",
            "Scope dashboard queries, auth, and permissions by tenant.",
          ],
        },
      ]}
    />
  );
}
