import styled from '@emotion/styled';

import { COLORS } from '../../constants/color';

const UserCardStyled = styled.div`
  background-color: ${COLORS.BG_GRAY};
  padding: 15px;
  border-bottom: 2px solid ${COLORS.GRAY};
  width: 250px;
  margin: 10px;
  border-radius: 5px;
`;

export const SectionContent = styled.section`
  margin-bottom: 1rem;
`;

export const SpanTitle = styled.section`
  font-weight: 600;
  font-size: 18px;
`;

export const SpanValue = styled.section`
  font-weight: 500;
  font-size: 16px;
`;

export default UserCardStyled;
