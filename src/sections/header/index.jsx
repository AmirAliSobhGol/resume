import React from 'react';

import styled from 'styled-components';
import { FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/lib/fa';

const Fullname = styled.h1`
  margin-top 0;
`;

const Row = styled.div`
  justify-content: space-between;
  align-content: space-between;
  margin-right: 10%;
  * {
    flex: 1;
  }
`;

const Header = () => (
  <div>
    <Fullname>Amirali Sobhgol</Fullname>
    <Row className="flex">
      <span>
        <FaPhone /> +989021551123
      </span>
      <span>
        <FaMapMarker /> Tehran
      </span>
    </Row>
    <Row className="flex m-t-10">
      <span>
        <FaEnvelope /> amiralisobhgol@gmail.com
      </span>
    </Row>
  </div>
);

export default Header;
