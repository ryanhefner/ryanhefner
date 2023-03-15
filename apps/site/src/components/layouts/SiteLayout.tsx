import { Box, Flex } from '@chakra-ui/react';
import { SiteHeader, SiteFooter } from '../site';

export const SiteLayout = ({ children }) => (
  <>
    <Flex as="main" flexDir="column" minH="100vh" w="full">
      <SiteHeader />
      {children}
      <SiteFooter />
    </Flex>
    <Box h={100} bgColor="blue.500"></Box>
  </>
);
