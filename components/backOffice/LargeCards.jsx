import LargeCard from "./LargeCard"

export default function LargeCards() {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2
     md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
          
      <LargeCard className="bg-green-600" />
      <LargeCard className="bg-blue-600" />
      <LargeCard className="bg-orange-600" />
      <LargeCard className="bg-purple-600" />
    </div>
  );
}
