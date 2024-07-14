
import Link from 'next/link';
import { Button } from "@/components/ui/button";


export default function Footer() {
  return (


    <div className="flex align-middle justify-between items-center m-4 pt-2 border-t">

      <span className="font-sans flex gap-2">

        <span className='text-slate-300'> made by max</span>
      </span>

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

