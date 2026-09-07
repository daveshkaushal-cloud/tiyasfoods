import { Leaf, FlaskConical, Truck, Milk } from "lucide-react";
import data from "../../../../data.json";

const iconMap = { Leaf, Milk, FlaskConical, Truck };
const benefits = (data.trustBenefits || []).map((b) => ({
  ...b,
  icon: iconMap[b.icon] || Leaf,
}));

const tileStyles = [
  { bg: "#F1B54D", text: "#2D3427", iconBg: "#FFF1C9" },
  { bg: "#A7BF7B", text: "#26382A", iconBg: "#EDF4DA" },
  { bg: "#D9794D", text: "#FFF8EC", iconBg: "#F7C7AF" },
  { bg: "#7A5260", text: "#FFF7F0", iconBg: "#E4CBD2" },
];

export default function TrustBar() {
  return (
    <section className="relative z-20 bg-[#F7EEDC] px-6 py-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          const style = tileStyles[index % tileStyles.length];

          return (
            <div
              key={item.title}
              className="rounded-[28px] p-5 shadow-[0_16px_35px_rgba(77,54,32,0.08)] transition hover:-translate-y-1"
              style={{ backgroundColor: style.bg, color: style.text }}
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl"
                style={{ backgroundColor: style.iconBg }}
              >
                <Icon size={23} strokeWidth={1.7} />
              </div>
              <p className="mt-5 font-serif text-2xl leading-tight">{item.title}</p>
              <p className="mt-2 text-xs leading-5 opacity-75">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
