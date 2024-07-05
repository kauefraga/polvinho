'use client';

import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';
import { useReducer } from 'react';

interface CurrencyInputProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function CurrencyInput({
  form,
  label,
  name,
  placeholder,
}: CurrencyInputProps) {
  const initialValue = form.getValues()[name]
    ? currencyFormatter.format(form.getValues()[name])
    : '';

  const [value, setValue] = useReducer((_: any, next: string) => {
    const digits = next.replace(/\D/g, '');
    return currencyFormatter.format(Number(digits) / 100);
  }, initialValue);

  function handleChange(changeFunction: Function, formattedValue: string) {
    const digits = formattedValue.replace(/\D/g, '');
    const realValue = Number(digits) / 100;
    changeFunction(realValue);
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        field.value = value;
        const change = field.onChange;

        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type="text"
                {...field}
                onChange={(e) => {
                  setValue(e.target.value);
                  handleChange(change, e.target.value);
                }}
                value={value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
