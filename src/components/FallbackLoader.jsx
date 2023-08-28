import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';

const loadingStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


function FallBackLoader() {
  return(
    <div className="loading" css={loadingStyles}>
      <SyncLoader color="#36D7B7" size={10} />
    </div>
  )
}
export default FallBackLoader;