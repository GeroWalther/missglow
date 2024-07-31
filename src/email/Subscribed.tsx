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
};

export default function Subscribed({ name }: WelcomeEmailProps) {
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
              eingeschrieben hast. Als Dankeschön bekommst du einen Rabattcode
              für deinen nächsten Einkauf:
            </Text>
            <Text className='mt-5 font-bold'>GLOW15</Text>
            <Section className='p-4'>
              <Text>
                Wenn Sie Fragen haben, können Sie uns gerne unter{' '}
                {process.env.ADMINEMAIL} kontaktieren.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}