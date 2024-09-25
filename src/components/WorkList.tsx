'use client';

import Image from 'next/image';
import { useWorkStore } from '@/stores/WorkStore';
import { Work } from '@/schemas/Work';

function WorkStatus({ status }: Pick<Work, 'status'>) {
  const colors: Record<typeof status, string> = {
    todo: 'bg-black/40',
    doing: 'bg-yellow-500',
    done: 'bg-green-500',
  };

  return <div className={`h-5 w-5 rounded-full ${colors[status]}`}></div>;
}

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
    <div className="mt-10 flex w-full flex-col items-center gap-8">
      <header className="w-full">
        <h2 className="text-xl">Lista de trabalhos</h2>
      </header>

      <ul className="w-full space-y-2">
        {works.map((work) => (
          <li
            key={work.id}
            className="flex items-center justify-between rounded border border-black/80 px-6 py-4 shadow-lg"
          >
            <p className="w-2/3 truncate">{work.name}</p>
            <WorkStatus status={work.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}
