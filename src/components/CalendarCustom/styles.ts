import {CalendarProps, Calendar as RNCalendar} from 'react-native-calendars';

import styled from 'styled-components/native';

export const Calendar = styled(RNCalendar).attrs({
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E8E8E8',
    paddingBottom: 10,
    marginBottom: 10,
  },
  theme: {
    textMonthFontSize: 18,
    monthTextColor: '#E8E8E8',
    todayTextColor: '#F06543',
    selectedDayBackgroundColor: '#F06543',
    selectedDayTextColor: '#E8E8E8',
    arrowColor: '#E8E8E8',
    calendarBackground: 'transparent',
    textDayStyle: {
      color: '#ffff',
    },
    textDisabledColor: '#a1a1a1',
  },
} as CalendarProps)`
  background-color: transparent;
`;
