import styled from 'styled-components'

export const StyledBackground = styled.div`
  max-width: 100%;
  overflow: hidden;
  position: relative;
  height: 100vh;

  img {
    position: relative;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    top: 5%;
  }

  span {
    width: 400px;
    height: 400px;
    background-color: var(--Second-Blue);
    position: absolute;
    border-radius: 50%;
    z-index: 0;
  }

  .first {
    top: -120px;
    left: -115px;
  }

  .second {
    top: 100px;
    left: 55px;
  }

  .third {
    bottom: 100px;
    left: -110px;
  }

  .fourth {
    bottom: -145px;
    left: 55px;
  }
`