import {ScrollViewProps} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 24,
  },
} as ScrollViewProps)`
  background-color: #181818;
`;

export const Title = styled.Text`
  text-align: center;
  color: #e8e8e8;
  font-weight: bold;
  margin: 24px;
`;
