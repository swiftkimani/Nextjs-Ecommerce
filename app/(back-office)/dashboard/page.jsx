import CustomDataTable from "@/components/backOffice/CustomDataTable";
import DashboardCharts from "@/components/backOffice/DashboardCharts";
import Heading from "@/components/backOffice/Heading";
import LargeCards from "@/components/backOffice/LargeCards";
import SmallCards from "@/components/backOffice/SmallCards";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />

      {/* Large card */}

      <LargeCards />

      {/* Small card */}

      <SmallCards />

      {/* Charts */}

      <DashboardCharts />
      
      {/* Recent orders table */}

      <CustomDataTable />
      
    </div>
  );
}
