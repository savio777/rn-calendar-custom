import {ScrollViewProps} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 24,
    gap: 24,
  },
} as ScrollViewProps)`
  background-color: #181818;
`;
