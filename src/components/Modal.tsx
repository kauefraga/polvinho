'use client';

import { WorkForm, WorkFormSchema, WorkSchema } from '@/schemas/Work';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { nanoid } from 'nanoid';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import CurrencyInput from './CurrencyInput';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<WorkForm>({
    resolver: zodResolver(WorkFormSchema),
    defaultValues: {
      name: '',
      description: '',
      clientContact: '',
      price: 0,
    },
  });

  function onSubmit(values: WorkForm) {
    const work = WorkSchema.parse({
      ...values,
      id: nanoid(),
      createdAt: new Date(),
    });
    localStorage.setItem(work.id, JSON.stringify(work));

    setIsOpen(!isOpen);
    form.reset();
  }

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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 rounded border-2 bg-[#fcfcfc] px-8 py-6"
            >
              <header className="flex items-center justify-between">
                <h2>Novo trabalho</h2>

                <button onClick={() => setIsOpen(!isOpen)}>
                  <X strokeWidth={1.5} size={32} />
                </button>
              </header>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Projeto inovador" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Este trabalho é sobre..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contato do cliente</FormLabel>
                    <FormControl>
                      <Input placeholder="fulano@exemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CurrencyInput
                form={form}
                name="price"
                label="Preço"
                placeholder="R$ 100,00"
              />

              <button>Salvar</button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
}
