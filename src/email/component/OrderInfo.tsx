import { formatCurrency } from '@/lib/formatters';
import { Column, Row, Text, Section, Img } from '@react-email/components';
import React from 'react';

type OrderInfoProps = {
  order: {
    id: string;
    createdAt: Date;
    customerName?: string;
    address: string;
    email: string;
    pricePaidInCents: number;
    shippingCost: number;
  };
  products: {
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
};
const dateFormatter = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' });

export function OrderInfo({ order, products }: OrderInfoProps) {
  return (
    <Section className='border border-solid border-gray-500 rounded-lg p-4 md:p-6'>
      <Section>
        <Row>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Bestellungseingang:
            </Text>
            <Text className='mt-0'>
              {dateFormatter.format(order.createdAt)}
            </Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-28 self-start'>
              Bestellcode:
            </Text>
            <Text className='mt-0 text-right'>{order.id}</Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Kunde:
            </Text>
            <Text className='mt-0'>
              {order.customerName || order.email.split('@')[0]}
            </Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Kunden Email:
            </Text>
            <Text className='mt-0'>{order.email}</Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-28 self-start'>
              Lieferadresse:
            </Text>
            <Text className='mt-0 text-right'>{order.address}</Text>
          </Column>
        </Row>
      </Section>
      <Section className=' p-4'>
        <Text className='mt-0 mb-4 font text-gray-500 whitespace-nowrap text-nowrap'>
          Bestellte Produkte:
        </Text>
        {products.map((product) => {
          return (
            <Row key={product.name}>
              <Column>
                <Text className='mt-0'>
                  {product.name} - {product.quantity}x
                </Text>
              </Column>
              <Column>
                {/* <Text className='mt-0 text-right'>
                  {formatCurrency(product.price / 100)}
                </Text> */}
                <Text className='mt-0 text-right'>
                  {formatCurrency(product.price * product.quantity)}
                </Text>
              </Column>
              <Img
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.image}`}
                alt={product.name}
                className='w-16 h-16 object-cover rounded-lg'
              />
            </Row>
          );
        })}
        <Row>
          <Column>
            <Text>Versandkosten</Text>
          </Column>
          <Column>
            <Text className='text-right'>
              {formatCurrency(order.shippingCost)}
            </Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text className='font-bold'>Bezahlter Gesamtbetrag:</Text>
            <Column>
              <Text className='font-bold text-right '>
                {formatCurrency(order.pricePaidInCents / 100)}
              </Text>
            </Column>
          </Column>
        </Row>
      </Section>
    </Section>
  );
}
