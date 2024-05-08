import React from "react";

interface FieldSetProps {
  legend: string;
  children: React.ReactNode;
}

export default function Fieldset({ legend, children }: FieldSetProps) {
  return (
    <fieldset
      data-testid="fieldset"
      className="border rounded-md px-3 pb-4 space-y-4"
    >
      <legend className="bg-white px-2 text-slate-700">{legend}</legend>
      {children}
    </fieldset>
  );
}
