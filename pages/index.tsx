import { Button, Container, Input, Link, Spacer, Switch, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

export default function Home() {
  const { setTheme } = useNextTheme();
  const { type, isDark } = useTheme();
  return (
    <Container
      as='main'
      display='flex'
      direction='column'
      justify='center'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Spacer />
      <Text h1>
        Welcome to&nbsp;
        <Link
          href='https://nextjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Next.js
        </Link>
        &nbsp;&&nbsp;
        <Link
          href='https://nextui.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          NextUI
        </Link>
      </Text>
      <Spacer />
      <Input clearable labelPlaceholder='Type something' />
      <Spacer />
      <a
        href='https://github.com/nextui-org/nextui'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button color='gradient'>Show on Github</Button>
      </a>
      <Spacer />
      <Text h5>{'Theme'}</Text>
      <Switch
        initialChecked={isDark}
        checked={isDark}
        onChange={(e) => setTheme(isDark ? 'light' : 'dark')}
        size='xl'
        iconOn={<RiMoonClearFill />}
        iconOff={<RiSunFill />}
      />
    </Container>
  );
}
