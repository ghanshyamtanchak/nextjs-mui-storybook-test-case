import React, { CSSProperties, FC } from 'react';

import { CircularProgress } from '@mui/material';

interface Props {
  style?: CSSProperties;
}

const Loader: FC<Props> = ({ style }) => <CircularProgress style={style} />;

export default Loader;
