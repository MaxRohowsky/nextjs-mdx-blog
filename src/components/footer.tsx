
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';


export default function Footer() {
  return (


    <footer className="flex align-middle justify-between items-center  py-2 border-t border-neutral-100">
      <div className='flex flex-row gap-2'>
        <span className="font-sans flex items-center gap-2">

         

        </span>
        <Button asChild
          className=""
          variant={'ghost'}
        >
          <Link href="/todos">
            ToDos
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
    </footer>

  );
};

