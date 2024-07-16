import Particles from '@/components/dots/particles';




export default function Title({ titles, top, left }: { titles: string[]; top: string; left: string }) {
    const opacityClasses = [
        "opacity-100 font-bold",
        "opacity-5 dark:opacity-50 hidden sm:block",
        "opacity-5 dark:opacity-50 hidden sm:block",
        "opacity-5 dark:opacity-50 hidden md:block",
        "opacity-5 dark:opacity-50 hidden md:block",
        "opacity-5 dark:opacity-50 hidden lg:block",
    ];

    return (
        <>
            <div className="relative -z-10 w-0 h-0 dark:hidden" style={{ top, left }}>
                <Particles numberOfParticles={10} radius={70} opacity={0.3} color='black' left={0} />
                <Particles numberOfParticles={30} radius={300} opacity={0.2} color='black' left={0} />
                <Particles numberOfParticles={40} radius={380} opacity={0.15} color='black' left={0} />
                <Particles numberOfParticles={50} radius={460} opacity={0.1} color='black' left={0} />
                <Particles numberOfParticles={60} radius={540} opacity={0.05} color='black' left={0} />
            </div>

            <div className="relative -z-10 w-0 h-0 dark:blo" style={{ top, left }}>
                <Particles numberOfParticles={10} radius={70} opacity={0.8} color='white' left={0} />
                <Particles numberOfParticles={30} radius={300} opacity={0.4} color='white' left={0} />
                <Particles numberOfParticles={40} radius={380} opacity={0.3} color='white' left={0} />
                <Particles numberOfParticles={50} radius={460} opacity={0.2} color='white' left={0} />
                <Particles numberOfParticles={60} radius={540} opacity={0.1} color='white' left={0} />
            </div>


            <div className='flex justify-between items-center whitespace-nowrap w-full h-40 text-5xl py-4 my-6 overflow-hidden'>
                {titles.map((title, index) => (
                    <span key={title} className={opacityClasses[index % opacityClasses.length]}>{title}</span>
                ))}
            </div>
        </>
    );
}