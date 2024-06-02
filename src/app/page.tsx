import Image from 'next/image';

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
          <button
            className='
              px-4 py-3 rounded shadow-lg transition-colors
              text-xl bg-[#81b894] text-[#292d32]
              hover:bg-[#76a988] active:bg-[#6b9a7b]'
          >
            Novo trabalho
          </button>
          <div className='flex flex-col items-center my-6'>
            <p className='text-lg'>Clique no botão acima para começar</p>
            <Image
              src='/bubbles.png'
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
