'use client';
import { useCart } from '@/hooks/use-cart-hook';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AddToCartButton({ product }: { product: any }) {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
      size='lg'
      className='w-full bg-orange-400'>
      {isSuccess ? 'Hinzugefügt!' : 'In den Warenkorb'}
    </Button>
  );
}
