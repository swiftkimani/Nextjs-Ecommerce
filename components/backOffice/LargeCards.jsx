import LargeCard from "./LargeCard"

export default function LargeCards() {
    const orderStats = [
      {
        period: "Todays Orders",
        sales: 110000,
        color: "bg-green-600",
      },
      {
        period: "Yersterday Orders",
        sales: 130000,
        color: "bg-blue-600",
      },
      {
        period: "This Months",
        sales: 1600000,
        color: "bg-orange-600",
      },
      {
        period: "All Time Sales",
        sales: 1990000,
        color: "bg-purple-600",
      },
    ];
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2
     md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
          {
              orderStats.map((item, i) => {
                  return (
                      <LargeCard className='bg-green-600' data={item} key={i}/>
                  )
              })
      }
    </div>
  );
}
