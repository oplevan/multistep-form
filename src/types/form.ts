export type Personal = {
  first_name: string;
  last_name: string;
  current_address: string;
};
export type Employer = {
  name: string;
  start_date: string;
  end_date: string;
};
export type Guarantor = {
  name: string;
  address: string;
  relation: string;
};

export type FormData = {
  personal: Personal;
  employer: Employer[];
  guarantor: Guarantor;
};

export type HandleChangeParams = {
  key: "personal" | "employer" | "guarantor";
  field: string;
  value: string;
  index?: number;
};
