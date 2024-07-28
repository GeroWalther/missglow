'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { CartItem, Product, useCart } from '@/hooks/use-cart-hook';
import React, { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import useCartTotals from '@/hooks/use-to-pay';
import { formatCurrency } from '@/lib/formatters';
import {
  AddressElement,
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Loader2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageProvider';
import { saveOrder } from '@/app/actions/orders';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export default function CheckoutStripe() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clientSecret, setClientSecret] = useState<string>('');
  const { items } = useCart();
  const { toPay } = useCartTotals(items);
  const itemsToCheckout = items.map((item) => item.product);
  useEffect(() => {
    async function checkout(products: Product[]) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            totalAmountinCents: toPay * 100,
            products,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Payment intent created:', data);
          setClientSecret(data.client_secret);
          toast.success('Erfolgreich bezahlt!');
        } else {
          const errorData = await response.json();
          console.error('Error creating payment intent:', errorData.error);
          toast.message('Ein Fehler bei der Bezahlung ist aufgetreten.');
        }
      } catch (error) {
        console.error('Failed to fetch:', error);
        toast.message('Ein Fehler ist aufgetreten.');
      } finally {
        setIsLoading(false);
      }
    }
    checkout(itemsToCheckout);
  }, []);

  return (
    <div>
      {isLoading && (
        <Loader2 size={50} color='#f23cce' className=' animate-spin ' />
      )}
      {clientSecret && (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <Form toPay={toPay} items={items} />
        </Elements>
      )}
    </div>
  );
}
type Address = {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
};
function Form({ toPay, items }: { toPay: number; items: CartItem[] }) {
  const { language } = useLanguage();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [address, setAddress] = useState<Address>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (
      stripe == null ||
      elements == null ||
      email == null ||
      address == null
    ) {
      return;
    }

    setIsLoading(true);
    // console.log('EMAIL from Checkkout: ', email);
    // const pricePaidInCents = toPay * 100;
    // const shippingAddress = `${address.line1}, ${
    //   address.line2 ? address.line2 + ', ' : ''
    // }${address.city}, ${address.state}, ${address.postal_code}, ${
    //   address.country
    // }`;

    // await saveOrder(shippingAddress, email, items, pricePaidInCents);

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          setErrorMessage(error.message);
          console.error('Payment failed:', error.message);
          if (language === 'de') {
            toast.error('Ein Fehler bei der Bezahlung ist aufgetreten.');
          } else if (language === 'en') {
            toast.error('An error occurred during payment.');
          }
        } else {
          console.error('An uknown error occured:', error.message);
          setErrorMessage('An unknown error occured.');
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <span className=' font-semibold text-md text-primary'>Zahlung</span>
          {errorMessage && (
            <CardDescription className='text-destructive-foreground text-red-500 font-semibold text-base'>
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <LinkAuthenticationElement
            onChange={(e) => setEmail(e.value.email)}
          />
          <div className='my-5'>
            <AddressElement
              onChange={(e) => setAddress(e.value.address)}
              options={{
                mode: 'shipping',
                autocomplete: {
                  mode: 'automatic',
                },
                fields: {
                  phone: 'auto',
                },
              }}
            />
          </div>
          <PaymentElement />
        </CardContent>
        <CardFooter>
          <Button
            disabled={stripe === null || elements === null || isLoading}
            className={buttonVariants({
              className: 'w-full bg-pink-500 mt-4 font-semibold text-lg',
            })}>
            {isLoading
              ? 'Ladevorgang...'
              : `${formatCurrency(toPay)} Jetzt Zahlen`}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

{
  /* <Card>
        <CardHeader>
          <span className=' font-semibold text-md text-primary -mb-4'>
            Persönliche Informationen
          </span>
        </CardHeader>
        <CardContent>
          <Label htmlFor='name'>Name</Label>
          <Input type='text' id='name' name='name' required />
          <Label htmlFor='email'>Email</Label>
          <Input type='text' id='email' name='email' required />
          <Label htmlFor='address'>Versandadresse</Label>
          <Input type='text' id='address' name='address' required />
        </CardContent>
      </Card> */
}
