import React from 'react';
import { action } from '@storybook/addon-actions';

import { Grid } from 'react-flexbox-grid';
import Filter from '../../components/organism/filter/Filter';
import FilterHeader from '../../components/molecule/filter-header/FilterHeader';
import FilterContent from '../../components/molecule/filter-content/FilterContent';
import FilterFooter from '../../components/molecule/filter-footer/FilterFooter';
import FilterSearchForm from '../../helpers/forms/FilterSearchForm';
import FormActions from '../../components/molecule/form-actions/FormActions';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';
import Button from '../../components/atom/button/Button';
import DatePicker from '../../components/atom/datepicker/DatePicker';
import Select from '../../components/atom/select/Select';

export default {
  title: 'Filter',
  component: Filter
};

export const ClosedFilter = () => {
  const toggle = false;
  return (
    <Filter showFilters={toggle} onClick={action('clicked')}>
      <FilterHeader totalItems={0} onClick={action('ShowFilter')}/>
      <FilterContent showFilters={toggle}>
        <FilterSearchForm />
      </FilterContent>
      <FilterFooter showFilters={toggle}>
        <FormActions alignEnd>
          <Button onClick={action('Clean')}>Limpar filtros</Button>
          <Button type="success" onClick={action('Filter')}>
            Filtrar
          </Button>
        </FormActions>
      </FilterFooter>
    </Filter>
  );
};

export const OpenedFilter = () => {
  const toggle = true;

  return (
    <Filter>
      <FilterHeader totalItems={3} onClick={action('ShowFilter')}/>
      <FilterContent showFilters={toggle}>
        <FilterSearchForm />
      </FilterContent>
      <FilterFooter showFilters={toggle}>
        <FormActions alignEnd>
          <Button onClick={action('Clean')}>Limpar filtros</Button>
          <Button type="success" onClick={action('Filter')}>
            Filtrar
          </Button>
        </FormActions>
      </FilterFooter>
    </Filter>
  );
};
