import {
  Leaf,
  FlaskConical,
  Truck,
  Milk,
} from "lucide-react";
import data from '../../../../data.json'

const iconMap = { Leaf, Milk, FlaskConical, Truck };
const benefits = (data.trustBenefits || []).map((b) => ({
  ...b,
  icon: iconMap[b.icon] || Leaf,
}));

export default function TrustBar() {
  return (
    <section className="relative z-20 px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#15120e]/90 p-6 backdrop-blur-xl md:p-8">
        <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 px-4 py-4 md:px-6"
              >
                <Icon
                  size={27}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#f5b82e]"
                />

                <div>
                  <p className="text-sm font-semibold">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[11px] text-stone-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}