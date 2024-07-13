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
import { Button } from '@/components/ui/button';
import CurrencyInput from '@/components/CurrencyInput';
import { useWorkStore } from '@/stores/WorkStore';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const { createWork } = useWorkStore();

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
    createWork({
      ...values,
      id: nanoid(),
      createdAt: new Date(),
    });

    setIsOpen(!isOpen);
    form.reset();
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded bg-[#81b894] px-4 py-3 text-xl text-[#292d32] shadow-lg transition-colors hover:bg-[#76a988] active:bg-[#6b9a7b]"
      >
        Novo trabalho
      </button>

      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-[#23262f] bg-opacity-70 backdrop-blur-sm">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-72 flex-col space-y-4 rounded border-2 bg-[#fcfcfc] p-8 md:max-w-md"
            >
              <header className="flex items-center justify-between">
                <h2 className="text-lg">Novo trabalho</h2>

                <button onClick={() => setIsOpen(!isOpen)} title="Fechar">
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

              <Button disabled={!form.formState.isValid}>Salvar</Button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
}
