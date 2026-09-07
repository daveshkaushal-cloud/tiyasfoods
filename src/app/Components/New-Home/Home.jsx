'use client'
import ScrollProgress from "./ScrollProgress";
import Hero from "./Hero";
import GheeShowcase from "./GheeShowcase";
import GheeProcess from "./GheeProcess";
import Transition from "./Transition";
import ProteinShowcase from "./ProteinShowcase";
import ProteinDeepDive from "./ProteinDeepDive";
import GreekYogurtShowcase from "./GreekYogurtShowcase";
import YogurtProduction from "./YogurtProduction";
import HungCurdTransition from "./HungCurdTransition";
import HungCurd from "./HungCurd";
import HungCurdBenefits from "./HungCurdBenefits";
import Link from "next/link";
import { ShoppingBag } from "lucide-react"

const HomePage = () => {
    return <div className="relative">
        <ScrollProgress />
        <Hero />
        <GheeShowcase />
        {/* 3. Process of Making Ghee — with farmer-in-field bg at 40% opacity */}
        <GheeProcess />
        {/* Transition: color change after ghee finishes */}
        <Transition />
        {/* 4. Protein Powder scroller */}
        <ProteinShowcase />
        {/* 5. Benefits of Protein Powder + Process of Making */}
        <ProteinDeepDive />
        {/* 6. Greek Yogurt — interactive 3D product scroller */}
        <GreekYogurtShowcase />
        {/* 7. The Pure Art of Greek Yogurt: Production & Benefits */}
        <YogurtProduction />
        {/* 8. Cinematic transition: dark green -> warm cream/gold */}
        <HungCurdTransition />
        {/* 9. Hung Curd — 3D animated production process */}
        <HungCurd />
        {/* 10. Hung Curd — Benefits & Stories deep-dive */}
        <HungCurdBenefits />
        <Link
            href="/Products"
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full 
                 bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3 
                 text-sm font-bold text-[#0c0a09] shadow-lg shadow-amber-500/40 
                 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
            <ShoppingBag className="h-5 w-5 text-[#0c0a09]" />
            Shop Now
        </Link>
    </div>
}
export default HomePage