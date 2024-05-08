import Fieldset from "../Fieldset";
import Input from "../Input";
import { Personal } from "../../types/form";

type PersonalInfoProps = {
  personal: Personal;
  updateFields: (field: string, value: string) => void;
};

export default function PersonalInfo({ personal, updateFields }: PersonalInfoProps) {
  return (
    <Fieldset legend="Personal">
      <Input
        type="text"
        placeholder="First Name"
        required
        value={personal.first_name}
        onChange={(e) => updateFields("first_name", e.target.value)}
      />
      <Input
        type="text"
        placeholder="Last Name"
        required
        value={personal.last_name}
        onChange={(e) => updateFields("last_name", e.target.value)}
      />
      <Input
        type="text"
        placeholder="Address"
        required
        value={personal.current_address}
        onChange={(e) => updateFields("current_address", e.target.value)}
      />
    </Fieldset>
  );
}
