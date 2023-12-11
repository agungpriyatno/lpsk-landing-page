"use client"

import { CarouselSection } from '@/components/features/carousel'
import { Footer } from '@/components/features/footer'
import { GallerySection } from '@/components/features/gallery'
import { Information } from '@/components/features/information'
import { CardLink } from '@/components/ui/card-link'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

export default function Home() {
  return (
    <main className='h-full w-full space-y-3'>
      <CarouselSection />
      <section className='px-5 xl:px-10 py-5 text-slate-100'>
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 max-w-[1440px] mx-auto'>
          <div className='h-[250px] w-full bg-background bg-slate-900 rounded overflow-hidden relative group '>
            <div className='absolute bottom-0 left-0 right-0 z-10 p-2 text-center'>
              <h3 className='font-bold'>SUBJEK PERLINDUNGAN</h3>
              <a href="" className=' underline hover:text-orange-500'>Selengkapnya</a>
            </div>
            <div className='h-full w-full relative'>
              <Image src={'https://picsum.photos/500/509'} alt='' fill className=' opacity-50 object-cover group-hover:scale-125 transition-all duration-300' />
            </div>
          </div>
          <div className='h-[250px] w-full bg-background bg-slate-900 rounded overflow-hidden relative group'>
            <div className='absolute bottom-0 left-0 right-0 z-10 p-2 text-center'>
              <h3 className='font-bold'>SUBJEK PERLINDUNGAN</h3>
              <a href="" className=' underline hover:text-orange-500'>Selengkapnya</a>
            </div>
            <div className='h-full w-full relative'>
              <Image src={'https://picsum.photos/500/510'} alt='' fill className=' opacity-50 object-cover group-hover:scale-125 transition-all duration-300' />
            </div>
          </div>
          <div className='h-[250px] w-full bg-background bg-slate-900 rounded overflow-hidden relative group'>
            <div className='absolute bottom-0 left-0 right-0 z-10 p-2 text-center'>
              <h3 className='font-bold'>SUBJEK PERLINDUNGAN</h3>
              <a href="" className=' underline hover:text-orange-500'>Selengkapnya</a>
            </div>
            <div className='h-full w-full relative'>
              <Image src={'https://picsum.photos/500/511'} alt='' fill className=' opacity-50 object-cover group-hover:scale-125 transition-all duration-300' />
            </div>
          </div>
          <div className='h-[250px] w-full bg-background bg-slate-900 rounded overflow-hidden relative group'>
            <div className='absolute bottom-0 left-0 right-0 z-10 p-2 text-center'>
              <h3 className='font-bold'>SUBJEK PERLINDUNGAN</h3>
              <a href="" className=' underline hover:text-orange-500'>Selengkapnya</a>
            </div>
            <div className='h-full w-full relative'>
              <Image src={'https://picsum.photos/500/512'} alt='' fill className=' opacity-50 object-cover group-hover:scale-125 transition-all duration-300' />
            </div>
          </div>
        </div>
      </section>
      <section className='px-5 py-5'>
        <div className=' max-w-[1440px] mx-auto space-y-3'>
          <h3 className=" text-2xl font-bold">Aplikasi LPSK</h3>
          <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-3 grid grid-cols-3 gap-3 '>
              <CardLink title='SIMPUSAKO' description='Sistem Informasi Pelindungan Saksi dan Korban' redirectUrl='http://103.84.206.141/layanan' imageUrl='https://picsum.photos/500/500' />
              <CardLink title='FONDASI' description='Tindak Lanjut Keputusan Rekomendasi' redirectUrl='https://layanan.lpsk.go.id/monev' imageUrl='https://picsum.photos/500/505' />
              <CardLink title='SSK' description='Sahabat Saksi & Korban' redirectUrl='https://ssk.lpsk.go.id/' imageUrl='https://picsum.photos/500/504' />
              <CardLink title='SIMPELKAN' description='Sistem Informasi Pelayanan Kantor' redirectUrl='/' imageUrl='https://picsum.photos/500/501' />
              <CardLink title='LEMON' description='Deskripsi singkat mengenai fungsi Aplikasi ' redirectUrl='/' imageUrl='https://picsum.photos/500/502' />
              <CardLink title='SP4N LAPOR' description='Layanan Aspirasi dan Pengaduan Online Rakyat' redirectUrl='/' imageUrl='https://picsum.photos/500/503' />
            </div>
            <div className='flex flex-col h-full gap-3'>
              <h3 className=" text-xl font-bold">Kegiatan LPSK</h3>
              <ScrollArea className='h-full'>
                <div className='flex-1 flex flex-col gap-3'>
                  <div className='bg-background rounded flex flex-row px-3 py-2 gap-3 place-items-center'>
                    <div className='flex flex-col text-center'>
                      <h5 className='text-lg font-bold leading-none'>18</h5>
                      <small className='text-xs'>Februari</small>
                      <small className='text-xs'>2022</small>
                    </div>
                    <div className='flex flex-col flex-1'>
                      <h6 className='font-bold'>Penyerahan Kompensasi</h6>
                      <p className='text-xs'>Kantor Pemerintah Provinsi Bali</p>
                    </div>
                  </div>
                  <div className='bg-background rounded flex flex-row px-3 py-2 gap-3 place-items-center'>
                    <div className='flex flex-col text-center'>
                      <h5 className='text-lg font-bold leading-none'>17</h5>
                      <small className='text-xs'>Maret</small>
                      <small className='text-xs'>2023</small>
                    </div>
                    <div className='flex flex-col flex-1'>
                      <h6 className='font-bold'>Lorem ipsum dolor sit</h6>
                      <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, sequi!</p>
                    </div>
                  </div>
                  <div className='bg-background rounded flex flex-row px-3 py-2 gap-3 place-items-center'>
                    <div className='flex flex-col text-center'>
                      <h5 className='text-lg font-bold leading-none'>17</h5>
                      <small className='text-xs'>Maret</small>
                      <small className='text-xs'>2023</small>
                    </div>
                    <div className='flex flex-col flex-1'>
                      <h6 className='font-bold'>Lorem ipsum dolor sit</h6>
                      <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, sequi!</p>
                    </div>
                  </div>
                  <div className='bg-background rounded flex flex-row px-3 py-2 gap-3 place-items-center'>
                    <div className='flex flex-col text-center'>
                      <h5 className='text-lg font-bold leading-none'>17</h5>
                      <small className='text-xs'>Maret</small>
                      <small className='text-xs'>2023</small>
                    </div>
                    <div className='flex flex-col flex-1'>
                      <h6 className='font-bold'>Lorem ipsum dolor sit</h6>
                      <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, sequi!</p>
                    </div>
                  </div>
                  <div className='bg-background rounded flex flex-row px-3 py-2 gap-3 place-items-center'>
                    <div className='flex flex-col text-center'>
                      <h5 className='text-lg font-bold leading-none'>17</h5>
                      <small className='text-xs'>Maret</small>
                      <small className='text-xs'>2023</small>
                    </div>
                    <div className='flex flex-col flex-1'>
                      <h6 className='font-bold'>Lorem ipsum dolor sit</h6>
                      <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, sequi!</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
      <GallerySection />
      <Footer />
      <Information/>
      {/* <div className='fixed bottom-0 left-0 right-0 bg-background z-50'>
        <div className='flex'>
          <div className='px-3 py-2 bg-secondary'>INFORMASI</div>
          <div className='flex-1 px-3 py-2'>

          </div>
        </div>
      </div> */}
    </main>
  )
}
