import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { OrderInfo } from './component/OrderInfo';

type PurchaseReceiptEmailProps = {
  isAdmin?: boolean;
  products: {
    id?: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  order: {
    id: string;
    createdAt: Date;
    customerName?: string;
    address: string;
    email: string;
    pricePaidInCents: number;
    shippingCost: number;
  };
};

PurchaseReceiptEmail.PreviewProps = {
  isAdmin: false,
  products: [
    {
      name: 'Miss Glow',
      image: '/512-1.jpg',
      price: 89,
      quantity: 2,
    },
    {
      name: 'Miss Glow2',
      image: '/512-2.jpg',
      price: 40,
      quantity: 1,
    },
  ],
  order: {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    customerName: 'Sabine Kratz',
    address: '1234 Street, City, State, 12345, Country',
    email: 'sabine@kratz.com',
    pricePaidInCents: 22300,
    shippingCost: 5,
  },
} satisfies PurchaseReceiptEmailProps;

export default function PurchaseReceiptEmail({
  products,
  order,
  isAdmin = true,
}: PurchaseReceiptEmailProps) {
  return (
    <Html>
      <Preview>Bestellung - Miss Glow Beauty</Preview>
      <Tailwind>
        <Head />
        <Body className='font-sans bg-pink-200'>
          <Container className='max-w-lg'>
            <Heading>
              <Container>
                <Img
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}/missglowlogo.png`}
                  alt='Miss Glow Beauty Logo'
                  className='w-56 h-56 object-cover'
                />
                {isAdmin ? (
                  <Text className='-mt-20 -mb-4'>
                    Neue Bestellung eingegangen.
                  </Text>
                ) : (
                  <Text className='-mt-20'>
                    Vielen Dank für deine Bestellung
                  </Text>
                )}
              </Container>
            </Heading>
            {!isAdmin && (
              <Text className='-mt-10'>
                Hier eine zusammenfassung deiner Bestellung.
              </Text>
            )}
            <OrderInfo order={order} products={products} />
            {!isAdmin && (
              <Section className='p-4'>
                <Text>
                  Bei fragen schreibe bitte eine E-Mail an:{' '}
                  {process.env.ADMINEMAIL}{' '}
                </Text>
              </Section>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
