import {useCallback, useState} from 'react';
import {DateData, LocaleConfig} from 'react-native-calendars';
import {MarkedDates} from 'react-native-calendars/src/types';

import CalendarCustom from '../components/CalendarCustom';
import {languageCalendar} from '../components/CalendarCustom/locales';

import {Container, Title} from './styles';

LocaleConfig.locales['pt'] = languageCalendar.pt;
LocaleConfig.locales['en'] = languageCalendar.en;
LocaleConfig.locales['esp'] = languageCalendar.esp;

LocaleConfig.defaultLocale = 'pt';

export default function Home() {
  const [day, setDay] = useState<DateData>();

  const [days, setDays] = useState<MarkedDates>();

  const [daysMarked, setDaysMarked] = useState<MarkedDates>({
    '2025-02-20': {marked: true},
    '2025-02-22': {marked: true},
    '2025-02-25': {marked: true},
    '2025-02-21': {marked: true},
  });

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

  const handleChangeDaysMarked = useCallback((value: DateData) => {
    setDaysMarked(oldValue => {
      if (oldValue && oldValue[value.dateString]?.marked) {
        return {
          ...oldValue,
          [value.dateString]: {
            selected: !oldValue[value.dateString].selected,
            marked: true,
          },
        };
      }

      if (oldValue && oldValue[value.dateString]) {
        return {
          ...oldValue,
          [value.dateString]: {
            selected: !oldValue[value.dateString].selected,
          },
        };
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

      <Title>{new Date().toDateString()}</Title>

      <CalendarCustom
        minDate={new Date().toDateString()}
        onDayPress={value =>
          setDay(value.dateString === day?.dateString ? undefined : value)
        }
        markedDates={
          day && {
            [day.dateString]: {
              selected: true,
            },
          }
        }
      />

      <Title>{day?.dateString}</Title>

      <CalendarCustom
        minDate={new Date().toDateString()}
        onDayPress={handleChangeDays}
        markedDates={days}
      />

      <Title>{Object.keys(days || {}).map(item => item + ', ')}</Title>

      <CalendarCustom
        markedDates={daysMarked}
        onDayPress={handleChangeDaysMarked}
      />

      {/* criar calendário que seleciona só um e com vários marked */}
    </Container>
  );
}
