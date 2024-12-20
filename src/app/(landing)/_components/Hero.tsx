import Image from 'next/image';
import HeroImage from '@/assets/hero.webp';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';
import Particles from '@/components/ui/particles';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative mx-auto mt-16 max-w-screen-xl px-6 text-center md:px-8 lg:mt-28">
      <div className="relative mx-auto flex flex-col items-center">
        <h1 className="text-balance bg-gradient-to-br from-white to-white/40 bg-clip-text pb-6 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Créez des interfaces
          <br className="hidden md:block" /> utilisateur exceptionnelles
        </h1>

        <p className="mb-12 text-balance text-lg tracking-tight text-gray-400 md:text-xl">
          Paste vous offre tous les outils nécessaires pour concevoir et
          développer
          <br className="hidden md:block" />
          des interfaces utilisateur modernes et réactives.
        </p>

        <Link
          href="/sign-up"
          className={buttonVariants({
            size: 'lg',
            variant: 'secondary',
            className: 'group',
          })}
        >
          <span>Tester Gratuitement</span>
          <ArrowRight className="transition-all group-hover:translate-x-1" />
        </Link>

        <div className="blur-orange-effect-outside relative mt-[7rem]">
          <div className="image-gradient-effect relative overflow-hidden rounded-xl">
            <Image
              src={HeroImage}
              alt="dashboard image"
              className="relative h-full w-full rounded-[inherit] border border-[#1D1D1D] object-cover"
            />
            <div className="absolute inset-0 z-50 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B]" />
            <BorderBeam duration={15} colorFrom="#FF2900" colorTo="#FF7A00" />
          </div>
        </div>
      </div>
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} />
    </section>
  );
};

export default Hero;
