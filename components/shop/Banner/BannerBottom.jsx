import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { PiShieldCheckFill } from "react-icons/pi";

const highlights = [
  {
    icon: <PiShieldCheckFill className="h-6 w-6" />,
    title: "12 month cover",
    description: "Protected purchases on curated electronics and accessories.",
  },
  {
    icon: <MdLocalShipping className="h-6 w-6" />,
    title: "Rapid dispatch",
    description: "Same-day Nairobi fulfilment on stocked catalog items.",
  },
  {
    icon: <CgRedo className="h-6 w-6" />,
    title: "Easy returns",
    description: "Straightforward exchanges within 30 days of delivery.",
  },
];

const BannerBottom = () => (
  <section className="px-4 py-6">
    <div className="mx-auto grid max-w-container gap-4 md:grid-cols-3">
      {highlights.map((item) => (
        <div
          key={item.title}
          className="rounded-[1.75rem] border border-stone-200/80 bg-white/90 p-6 shadow-[0_18px_50px_-34px_rgba(28,25,23,0.4)]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3e4c7] text-stone-900">
            {item.icon}
          </div>
          <h3 className="font-titleFont text-lg font-semibold text-stone-950">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BannerBottom;
