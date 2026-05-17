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

type WelcomeEmailProps = {
  name: string;
  code: string;
  discountPercent?: number;
  expiresAt?: Date;
};

export default function Subscribed({
  name,
  code,
  discountPercent = 15,
  expiresAt,
}: WelcomeEmailProps) {
  const expiresLabel = expiresAt
    ? new Date(expiresAt).toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : null;

  return (
    <Html>
      <Preview>Willkommen bei Miss Glow Beauty!</Preview>
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
                <Text className='-mt-20'>Willkommen, {name}!</Text>
              </Container>
            </Heading>
            <Text className='-mt-10'>
              Vielen Dank, dass du dich bei Miss Glow Beauty Newsletter
              eingeschrieben hast. Als Dankeschön bekommst du{' '}
              <strong>{discountPercent}%</strong> Rabatt auf deine erste
              Bestellung mit folgendem persönlichen Code:
            </Text>
            <Text className='mt-5 text-2xl font-bold tracking-widest'>
              {code}
            </Text>
            <Text className='text-sm text-gray-600'>
              Dieser Code ist <strong>nur einmal gültig</strong> und auf dich
              persönlich ausgestellt.
              {expiresLabel ? ` Gültig bis ${expiresLabel}.` : ''}
            </Text>
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
