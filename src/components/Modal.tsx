'use client';

import { WorkData, WorkSchema } from '@/schemas/Work';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WorkData>({
    resolver: zodResolver(WorkSchema),
  });
  const onSubmit = handleSubmit((data) => {
    setIsOpen(!isOpen);
    reset();
  });

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded bg-[#81b894] px-4 py-3 text-xl text-[#292d32] shadow-lg transition-colors hover:bg-[#76a988] active:bg-[#6b9a7b]"
      >
        Novo trabalho
      </button>

      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-[#23262f] bg-opacity-70 backdrop-blur-sm">
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded border-2 bg-[#fcfcfc] px-8 py-6"
          >
            <header className="flex items-center justify-between">
              <h2>Novo trabalho</h2>

              <button onClick={() => setIsOpen(!isOpen)}>
                <Image
                  src="/close.svg"
                  alt="Close icon"
                  width="32"
                  height="32"
                />
              </button>
            </header>

            <div className="flex flex-col gap-1">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="projeto inovador"
                {...register('name')}
              />
              <p>{errors.name?.message}</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="description">Descrição</label>
              <input
                id="description"
                placeholder="uma descrição fabulosa"
                {...register('description')}
              />
              <p>{errors.description?.message}</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="client-contact">Contato do cliente</label>
              <input
                id="client-contact"
                placeholder="o contato do chefe"
                {...register('clientContact')}
              />
              <p>{errors.clientContact?.message}</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="price">Preço</label>
              <input
                id="price"
                type="number"
                defaultValue="0"
                {...register('price')}
              />
              <p>{errors.price?.message}</p>
            </div>

            <button>Salvar</button>
          </form>
        </div>
      )}
    </>
  );
}
