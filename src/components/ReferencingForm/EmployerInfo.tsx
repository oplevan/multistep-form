import Fieldset from "../Fieldset";
import Input from "../Input";
import Label from "../Label";
import { Employer } from "../../types/form";

type EmployerInfoProps = {
  employer: Employer[];
  updateFields: (field: string, value: string, index: number) => void;
  onBlur: (index: number) => void;
  hasSufficientYearsOfEmployment: boolean;
};

export default function EmployerInfo({
  employer,
  updateFields,
  onBlur,
  hasSufficientYearsOfEmployment,
}: EmployerInfoProps) {
  return (
    <>
      {employer.map((item, index) => (
        <Fieldset
          key={index}
          legend="Employer"
        >
          <Input
            type="text"
            placeholder="Employer name"
            required
            value={employer[index].name}
            onChange={(e) => updateFields("name", e.target.value, index)}
          />
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Label htmlFor={`employer-${index + 1}-start-date`}>Employment start date</Label>
              <Input
                id={`employer-${index + 1}-start-date`}
                type="date"
                required
                value={employer[index].start_date}
                onChange={(e) => updateFields("start_date", e.target.value, index)}
                onBlur={() => onBlur(index)}
              />
            </div>
            <div>
              <Label htmlFor={`employer-${index + 1}-end-date`}>Employment end date</Label>
              <Input
                id={`employer-${index + 1}-end-date`}
                type="date"
                value={employer[index].end_date}
                onChange={(e) => updateFields("end_date", e.target.value, index)}
                onBlur={() => onBlur(index)}
              />
            </div>
          </div>
          {!hasSufficientYearsOfEmployment && (
            <p className="text-red-500 text-xs">
              Minimum 3 years of employment history is required. Click Next to provide a guarantor.
            </p>
          )}
        </Fieldset>
      ))}
    </>
  );
}
