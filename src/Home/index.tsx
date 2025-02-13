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

  console.log(JSON.stringify(days));

  return (
    <Container>
      <CalendarCustom />

      <Title>{new Date().toDateString()}</Title>

      <CalendarCustom
        minDate={new Date().toDateString()}
        onDayPress={value =>
          setDay(value.dateString === day?.dateString ? undefined : value)
        }
        markedDates={day && {[day.dateString]: {selected: true}}}
      />

      <Title>{day?.dateString}</Title>

      <CalendarCustom
        minDate={new Date().toDateString()}
        onDayPress={handleChangeDays}
        markedDates={days}
      />

      <Title>{Object.keys(days || {}).map(item => item + ', ')}</Title>
    </Container>
  );
}
