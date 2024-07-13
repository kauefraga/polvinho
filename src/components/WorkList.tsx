'use client';

import Image from 'next/image';
import { useWorkStore } from '@/stores/WorkStore';

export default function WorkList() {
  const { works } = useWorkStore();

  if (works.length === 0) {
    return (
      <div className="mt-5 flex w-full flex-col items-center">
        <p className="text-lg">Clique no botão acima para começar</p>
        <Image
          src="/bubbles.webp"
          alt="Pequenas bolhas"
          width="250"
          height="400"
          priority
        />
      </div>
    );
  }

  return (
    <div className="mt-10 flex w-full flex-col items-center space-y-5">
      <header className="flex w-full justify-start text-xl">
        <h2>Lista de trabalhos</h2>
      </header>

      <ul className="space-y-2">
        {works.map((work) => (
          <li key={work.id}>
            <p>{work.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
