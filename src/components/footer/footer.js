
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';


export default function Footer() {
  return (


    <div className="flex align-middle justify-between items-center mt-7 py-2 border-t border-neutral-100">
      <div className='flex flex-row gap-2'>
        <span className="font-sans flex items-center gap-2">

          <span className='text-slate-300'> made by max    </span>
          <Image className=' right-0 top-0' src='/eyes.webp' alt='hero' height='30' width='30' />

        </span>
        <Button asChild
          className=""
          variant={'ghost'}
        >
          <Link href="/todos">
            todos
          </Link>
        </Button>
      </div>

      <div className='flex items-center gap-4 transition-all'>



        <Button asChild
          className=""
          variant={'ghost'}
        >
          <Link href="/privacy">
            Privacy
          </Link>

        </Button>

        <Button asChild
          className=""
          variant={'ghost'}
        >
          <Link href="/imprint">
            Imprint
          </Link>
        </Button>
      </div>
    </div>

  );
};

