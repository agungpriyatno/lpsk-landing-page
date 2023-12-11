"use client"

import { CarouselSection } from '@/components/features/carousel'
import { Footer } from '@/components/features/footer'
import { GallerySection } from '@/components/features/gallery'
import { Information } from '@/components/features/information'
import { CardLink } from '@/components/ui/card-link'
import { ContentCardA, ContentCardB } from '@/components/ui/content-card'
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
    <main className='h-full w-screen space-y-3'>
      <CarouselSection />
      <section className='px-5 xl:px-10 py-5 text-slate-100 w-full'>
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
          <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-3'>
            <div className='col-span-2 xl:col-span-3 grid grid-cols-2 xl:grid-cols-3 gap-3 '>
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
      <ContentCardA
        title='Tentang LPSK'
        description='LPSK yang diberikan mandat oleh undang-undang selaku focal point dalam pemberian perlindungan saksi dan korban harus mampu mewujudkan suatu kondisi dimana saksi dan korban benar-benar merasa terlindungi dan dapat mengungkap kasus dalam peradilan pidana.'
        image='https://picsum.photos/500/520'
        url='https://picsum.photos/500/520' />
      <section className='px-5 xl:px-10 py-5'>
        <div className='flex flex-col max-w-[1440px] mx-auto gap-3'>
          <h3 className=" text-2xl font-bold">Berita LPSK</h3>
          <ScrollArea >
            <div className='flex gap-3'>
              <div className='flex-col w-[300px] flex-shrink-0 bg-background rounded overflow-hidden'>
                <div className='h-[300px] w-full group relative overflow-hidden'>
                  <Image src={'https://picsum.photos/500/512'} alt='' fill className=' object-cover group-hover:scale-125 transition-all duration-300' />
                </div>
                <div className='flex flex-col p-5'>
                  <h4 className='font-bold text-base'>Penyandang Disabilitas Wajib Punya Hak yang Sama untuk Dilindungi</h4>
                  <small>10 Desember 2023</small>
                </div>
              </div>
              <div className='flex-col w-[300px] flex-shrink-0 bg-background rounded overflow-hidden'>
                <div className='h-[300px] w-full group relative overflow-hidden'>
                  <Image src={'https://picsum.photos/500/512'} alt='' fill className=' object-cover group-hover:scale-125 transition-all duration-300' />
                </div>
                <div className='flex flex-col p-5'>
                  <h4 className='font-bold text-base'>LPSK, Komnas HAM, dan Komnas Perempuan Tandatangani Komitmen Lindungi dan Penuhi Hak Pembela HAM</h4>
                  <small>7 Desember 2023</small>
                </div>
              </div>
              <div className='flex-col w-[300px] flex-shrink-0 bg-background rounded overflow-hidden'>
                <div className='h-[300px] w-full group relative overflow-hidden'>
                  <Image src={'https://picsum.photos/500/512'} alt='' fill className=' object-cover group-hover:scale-125 transition-all duration-300' />
                </div>
                <div className='flex flex-col p-5'>
                  <h4 className='font-bold text-base'>Putusan Permohonan Justice Collaborator MR Tersangka Pembunuhan di Subang</h4>
                  <small>30 November 2023</small>
                </div>
              </div>
              <div className='flex-col w-[300px] flex-shrink-0 bg-background rounded overflow-hidden'>
                <div className='h-[300px] w-full group relative overflow-hidden'>
                  <Image src={'https://picsum.photos/500/512'} alt='' fill className=' object-cover group-hover:scale-125 transition-all duration-300' />
                </div>
                <div className='flex flex-col p-5'>
                  <h4 className='font-bold text-base'>140 Pendaftar Lolos Seleksi Administrasi Calon Anggota LPSK 2024-2029</h4>
                  <small>25 September 2023</small>
                </div>
              </div>
              <div className='flex-col w-[300px] flex-shrink-0 bg-background rounded overflow-hidden'>
                <div className='h-[300px] w-full group relative overflow-hidden'>
                  <Image src={'https://picsum.photos/500/512'} alt='' fill className=' object-cover group-hover:scale-125 transition-all duration-300' />
                </div>
                <div className='flex flex-col p-5'>
                  <h4 className='font-bold text-base'>Judul Berita</h4>
                  <small>10 Desember 2023</small>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </section>
      <GallerySection />
      <Footer />
      <Information />
    </main>
  )
}
