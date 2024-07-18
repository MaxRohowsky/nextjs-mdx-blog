import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Overlay from '@/components/overlay/overlay';
import Space from '@/components/space';

export default function Template({ children }: { children: React.ReactNode }) {
    return (


        <body className='mx-1 sm:mx-2 md:mx-4 flex justify-center'>
        <div className='max-w-screen-lg w-full flex flex-col '>

          <Navbar />
          <Space className='h-8'/>
          {children}
          <Space className='h-8'/>
          <Footer />

        </div>
      </body>

    )
    
    
    
  }