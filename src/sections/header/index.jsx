import React from 'react';

import styled from 'styled-components';
import {FaLinkedinSquare, FaGithub, FaStackOverflow, FaMapMarker, FaEnvelope, FaPhone} from 'react-icons/lib/fa'

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
      <span><FaPhone/> +989121551123</span>
      <span><FaEnvelope/> amiralisobhgol@gmail.com</span>
      <span><FaMapMarker/> Tehran, Niavaran</span>
    </Row>
    <Row className="flex m-t-10">
      <span><FaLinkedinSquare/><a> bit.ly/2IFuvWV</a></span>
      <span><FaGithub/><a> bit.ly/2GJfp6e</a></span>
      <span><FaStackOverflow/><a> bit.ly/2GKsPL6</a></span>
    </Row>
  </div>
)

export default Header;
