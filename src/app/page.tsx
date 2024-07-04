import Image from 'next/image';
import Modal from '@/components/Modal';

export default function Home() {
  return (
    <>
      <header className="p-6">
        <Image src="icon.svg" alt="Logo do Polvinho" width="60" height="60" />
      </header>

      <main className="my-4 flex flex-col items-center">
        <section className="flex flex-col">
          <Modal />

          <div className="my-6 flex flex-col items-center">
            <p className="text-lg">Clique no botão acima para começar</p>
            <Image
              src="/bubbles.webp"
              alt="Pequenas bolhas"
              width="250"
              height="400"
              priority
            />
          </div>
        </section>
      </main>
    </>
  );
}
