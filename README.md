# Referencing Form Technical Assessment

## Requirements

Use any framework and libraries you like, but we are the most comfortable in React as it is what we
use at Goodlord. Make sure the project includes some instructions on how to run it as we might not
be familiar with the setup. If there are any questions, do not hesitate to send the question our
way. This should take you about an hour of your time, but feel free to spend a bit more or less time
as you deem necessary.

## Exercise

Before tenants can move into a new property we usually need to do a reference check. This involves
gathering information about their employment, income, credit history, previous tenancies, etc and
running it through our referencing checks.

We want you to build a form that captures this information and submits it to our (fictional)
reference api endpoint:
[https://ref-api.goodlord.co/reference/new](https://ref-api.goodlord.co/reference/new).

### API Definition

**Endpoint:** POST
[https://ref-api.goodlord.co/reference/new](https://ref-api.goodlord.co/reference/new) HTTP/1.1

**Body**

```json
{
  "personal": {
    "first_name": "First name",
    "last_name": "Last name",
    "current_address": "Address 1, Address 2, ..."
  },
  "employer": [
    {
      "name": "Employer",
      "start_date": "20180301",
      "end_date": "20190815"
    },
    {
      "name": "Employer",
      "start_date": "20180901",
      "end_date": "20190131"
    }
  ],
  "guarantor": {
    "name": "Guarantor",
    "address": "Address1, Address2, ...",
    "relation": "Parent"
  }
}
```

### Part 1

Create a form that collects the following information and submits it to the api:

**Personal**

- First name
- Last name
- Current address

**Employer**

- Employer name
- Employment start date
- Employment end date _(no end date if current employment)_

### Part 2

This will happen in a face to face interview format, where we will go over what you’ve built and ask
for some extra functionality.
