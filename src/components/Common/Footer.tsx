import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      블로그를 방문해주셔서 감사합니다. 좋은 하루 되세요
      <br />© 2022 Developer JJ, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
