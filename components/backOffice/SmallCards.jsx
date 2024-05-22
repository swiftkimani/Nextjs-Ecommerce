import { ShoppingCart, CheckCheck, RefreshCcw, Loader2 } from "lucide-react";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Todays Orders",
      numbers: 500,
      iconBg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      numbers: 100,
      iconBg: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Order Processing",
      numbers: 1600000,
      iconBg: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      numbers: 1990000,
      iconBg: "bg-purple-600",
      icon: CheckCheck,
    },
  ];
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2
     md:grid-cols-3 lg:grid-cols-4 gap-4 py-8"
    >
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
    </div>
  );
}
