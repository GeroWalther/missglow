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

type DiscountCampaignProps = {
  name: string;
  code: string;
  discountPercent: number;
  expiresAt: Date;
  intro?: string;
};

export default function DiscountCampaign({
  name,
  code,
  discountPercent,
  expiresAt,
  intro,
}: DiscountCampaignProps) {
  const expiresLabel = new Date(expiresAt).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <Html>
      <Preview>
        Dein persönlicher Miss Glow Beauty Rabattcode: {discountPercent}% off
      </Preview>
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
                <Text className='-mt-20'>
                  Hallo {name}, ein Geschenk für dich.
                </Text>
              </Container>
            </Heading>
            <Text className='-mt-10'>
              {intro ??
                `Als Dankeschön für deine Treue schenken wir dir ${discountPercent}% Rabatt auf deinen nächsten Einkauf bei Miss Glow Beauty.`}
            </Text>
            <Section className='mt-6'>
              <Text className='text-sm text-gray-700 mb-1'>
                Dein persönlicher Code:
              </Text>
              <Text className='text-2xl font-bold tracking-widest'>
                {code}
              </Text>
              <Text className='text-sm text-gray-600'>
                Dieser Code ist <strong>nur einmal gültig</strong> und auf dich
                persönlich ausgestellt. Gültig bis {expiresLabel}.
              </Text>
            </Section>
            <Section className='p-4'>
              <Text>
                Wenn du Fragen haben solltest, kannst du uns gerne unter{' '}
                {process.env.NEXT_PUBLIC_ADMINEMAIL} kontaktieren.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
