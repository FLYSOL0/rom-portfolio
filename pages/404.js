import Link from "next/link";
import { NextSeo } from "next-seo";
import { Center, Heading, VStack, Text } from "@chakra-ui/react";
import Container from "@/components/container";

export default function NotFound() {
  return (
    <Container>
      <Center>
        <NextSeo
          title="404 – Rommelie Larin"
          canonical="https://rommelielarin.com/404"
          openGraph={{
            url: "https://rommelielarin.com/404",
            title: "404 – Rommelie Larin",
          }}
        />
        <VStack>
          <Heading size="3xl">404</Heading>
          <Text mb={8}>Page not found</Text>
          <Link href="/">Return home</Link>
        </VStack>
      </Center>
    </Container>
  );
}
