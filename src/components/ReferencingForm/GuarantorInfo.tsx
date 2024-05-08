import { Guarantor } from "../../types/form";
import Fieldset from "../Fieldset";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";

type GuarantorInfoProps = {
  guarantor: Guarantor;
  updateFields: (field: string, value: string) => void;
};

export default function GuarantorInfo({ guarantor, updateFields }: GuarantorInfoProps) {
  return (
    <Fieldset legend="Guarantor">
      <Input
        type="text"
        placeholder="Name"
        required
        value={guarantor.name}
        onChange={(e) => updateFields("name", e.target.value)}
      />
      <Input
        type="text"
        placeholder="Address"
        required
        value={guarantor.address}
        onChange={(e) => updateFields("address", e.target.value)}
      />
      <div>
        <Label htmlFor="relationship-to-guarantor">Relationship to guarantor</Label>
        <Select
          id="relationship-to-guarantor"
          required
          value={guarantor.relation}
          onChange={(e) => updateFields("relation", e.target.value)}
        >
          <option
            value=""
            defaultValue=""
          >
            --Select one--
          </option>
          <option value="parent">Parent</option>
          <option value="sibling">Sibling</option>
          <option value="employer">Employer</option>
          <option value="other">Other</option>
        </Select>
      </div>
    </Fieldset>
  );
}
