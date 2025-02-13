import {useCallback, useState} from 'react';
import {DateData} from 'react-native-calendars';
import {MarkedDates} from 'react-native-calendars/src/types';

import CalendarCustom from '../components/Calendar';

import {Container} from './styles';

export default function Home() {
  const [day, setDay] = useState<DateData>();

  const [days, setDays] = useState<MarkedDates>();

  const handleChangeDays = useCallback((value: DateData) => {
    setDays(oldValue => {
      if (oldValue && oldValue[value.dateString]) {
        const {[value.dateString]: _, ...newObj} = oldValue;

        return newObj;
      }

      return {
        ...oldValue,
        [value.dateString]: {selected: true},
      };
    });
  }, []);

  return (
    <Container>
      <CalendarCustom />

      <CalendarCustom
        minDate={new Date().toString()}
        onDayPress={value =>
          setDay(value.dateString === day?.dateString ? undefined : value)
        }
        markedDates={day && {[day.dateString]: {selected: true}}}
      />

      <CalendarCustom
        minDate={new Date().toString()}
        onDayPress={handleChangeDays}
        markedDates={days}
      />
    </Container>
  );
}
