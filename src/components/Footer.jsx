import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  gap: 10px;
`;

const Text = styled.p`
  font-family: "Rany";
  font-weight: 300;
  font-size: 17px;
  line-height: 15px;
  color: #ffffff;
  opacity: 0.2;
  margin-bottom: 0;
`;

const Contact = styled(Text)`
  font-size: 20px;
  line-height: 18px;
  color: #00a3ff;
  opacity: 1;
`;

const Link = styled.a`
  font-size: 20px;
  line-height: 18px;
  font-family: "Rany";
  font-weight: normal;
`;

export default function Footer() {
  return (
    <Container>
      <Text>CryptoRanks all rights reserved 2021.</Text>
      <Contact>
        Contact:{" "}
        <Link href="https://support.cryptoranks.io">
          support.cryptoranks.io
        </Link>
      </Contact>
    </Container>
  );
}
