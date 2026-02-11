'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useDiscount } from '@/contexts/DiscountProvider';
import { FormEvent, useState } from 'react';

export function AddtDiscount() {
  const { setDiscount } = useDiscount();
  const [date, setDate] = useState<Date | undefined>();
  const [error, setError] = useState<string | undefined>();
  // const [data, setData] = useState<string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const code = data.code;
    const amount = data.amount;
    // console.log('DATA: ', data.code, data.amount);

    if (!date || !code || !amount) {
      alert('Please select a date');
      return;
    }

    fetch('/api/discount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, date, amount }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          setError(data.message || 'Fehler beim Erstellen des Rabattcodes');
          return;
        }
        setDiscount((prev) => [...prev, data.discount]);
        setError(undefined);
      })
      .catch((error) => setError('An error occurred while creating discount'));
  };
  // console.log('DATE: ', date);

  return (
    <div className='flex flex-col items-center self-start mb-10'>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        {/* <p>{data}</p> */}
        <div className='mb-4 flex flex-col'>
          <label htmlFor='code' className='mb-2'>
            Rabattcode
          </label>
          <input
            type='text'
            name='code'
            placeholder='z.B: SOMMER30'
            className='rounded-md border shadow p-2 w-80 mb-1'
          />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='amount' className='mb-2'>
            Rabatt in Prozent
          </label>
          <input
            type='number'
            name='amount'
            placeholder='30 (%)'
            className='rounded-md border shadow p-2 w-80 mb-1'
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline' size='default' className='w-80 mb-2'>
              Datum auswählen
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              className='rounded-md border shadow '
            />
          </PopoverContent>
        </Popover>
        <Button type='submit' className='w-80 mb-2'>
          Einrichten
        </Button>
        {error && <p className='text-red-700'>{error}</p>}
      </form>
    </div>
  );
}
