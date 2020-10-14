import React from 'react';

import DatePicker from '../../components/atom/datepicker/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker
};

export const Default = () => <DatePicker />;
export const Dark = () => <DatePicker dark />;
export const Small = () => <DatePicker small />;
