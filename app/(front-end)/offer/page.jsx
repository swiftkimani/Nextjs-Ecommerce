import Breadcrumbs from "@/components/shop/Breadcrumbs";
import SpecialOffers from "@/components/shop/SpecialOffers/SpecialOffers";

export default function OfferPage() {
  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="Offer" />
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
}
