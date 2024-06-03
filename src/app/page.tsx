import Image from 'next/image';
import Modal from '@/components/Modal';

export default function Home() {
  return (
    <>
      <header className='p-6'>
        <Image
          src='icon.svg'
          alt='Logo do Polvinho'
          width='60'
          height='60'
        />
      </header>

      <main className='flex flex-col items-center my-4'>
        <section className='flex flex-col'>
          <Modal />

          <div className='flex flex-col items-center my-6'>
            <p className='text-lg'>Clique no botão acima para começar</p>
            <Image
              src='/bubbles.webp'
              alt='Pequenas bolhas'
              width='250'
              height='400'
            />
          </div>
        </section>
      </main>
    </>
  );
}
