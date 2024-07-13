import Image from 'next/image';
import Modal from '@/components/Modal';
import WorkList from '@/components/WorkList';

export default function Home() {
  return (
    <>
      <header className="p-6">
        <Image
          src="icon.svg"
          alt="Logo do Polvinho"
          width="60"
          height="60"
          priority
        />
      </header>

      <main className="mx-auto my-4 max-w-64 md:max-w-xs">
        <Modal />
        <WorkList />
      </main>
    </>
  );
}
