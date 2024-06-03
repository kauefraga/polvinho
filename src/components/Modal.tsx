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
    reset
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
        className='px-4 py-3 rounded shadow-lg transition-colors text-xl bg-[#81b894] text-[#292d32] hover:bg-[#76a988] active:bg-[#6b9a7b]'
      >
        Novo trabalho
      </button>

      { isOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#23262f] bg-opacity-70 backdrop-blur-sm'
        >
          <form onSubmit={onSubmit} className='px-8 py-6 space-y-4 bg-[#fcfcfc] rounded border-2'>
            <header className='flex items-center justify-between'>
              <h2>Novo trabalho</h2>

              <button onClick={() => setIsOpen(!isOpen)}>
                <Image src='/close.svg' alt='Close icon' width='32' height='32' />
              </button>
            </header>

            <div className='flex flex-col gap-1'>
              <label htmlFor='name'>Nome</label>
              <input
                id='name'
                type='text'
                placeholder='projeto inovador'
                {...register('name')}
              />
              <p>{errors.name?.message}</p>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='description'>Descrição</label>
              <input
                id='description'
                placeholder='uma descrição fabulosa'
                {...register('description')}
              />
              <p>{errors.description?.message}</p>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='client-contact'>Contato do cliente</label>
              <input
                id='client-contact'
                placeholder='o contato do chefe'
                {...register('clientContact')}
              />
              <p>{errors.clientContact?.message}</p>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='price'>Preço</label>
              <input
                id='price'
                type='number'
                defaultValue='0'
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
