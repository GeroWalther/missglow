'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageProvider';
import { useCart } from '@/hooks/use-cart-hook';
import React, { useEffect, useState } from 'react';

export default function DiscountCodeInput() {
  const { language } = useLanguage();
  const { setDiscount } = useCart();
  const [message, setMessage] = useState();
  const [code, setCode] = useState();

  useEffect(() => {
    setDiscount(0);
  }, []);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputValue = e.currentTarget.elements[0] as HTMLInputElement;
    console.log(inputValue);

    try {
      const inputVal = inputValue.value; // Extract the value of the input element
      const response = await fetch('/api/discountcode', {
        method: 'POST',
        body: JSON.stringify({ inputVal }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const discountInPercent = data.discountInPercent;
      setDiscount(Number(discountInPercent));
      setMessage(data.message);
      setCode(data.code);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <>
      <form
        onSubmit={submitHandler}
        className='space-y-1-5 text-sm m-5 flex gap-4'>
        <Input
          type='text'
          placeholder={
            language == 'de' ? 'Gutscheincode eingeben' : 'Enter discount code'
          }
          className='border border-pink-300 rounded-md px-3 py-2 w-'
        />
        <Button variant='outline'>
          {language == 'en' ? 'Apply' : 'Anwenden'}
        </Button>
      </form>
      {code == '0' && message && (
        <p className='text-red-500'>
          {language == 'en'
            ? message
            : 'Ungültiger Rabattcode oder Rabatt nicht gefunden.'}
        </p>
      )}
      {code == '1' && message && (
        <p className='text-pink-600'>
          {language == 'en' ? message : 'Rabattcode ist abgelaufen.'}
        </p>
      )}
      {code == '2' && message && (
        <p className='text-green-500'>
          {language == 'en' ? message : 'Rabattcode wurde angewendet!'}
        </p>
      )}
    </>
  );
}
