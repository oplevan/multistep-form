import { FormEvent, useState } from "react";
import { FormData } from "./types/form";
import { getEmploymentDuration, postData } from "./utils/referenceForm";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import Button from "./components/Button";
import PersonalInfo from "./components/ReferencingForm/PersonalInfo";
import EmployerInfo from "./components/ReferencingForm/EmployerInfo";
import GuarantorInfo from "./components/ReferencingForm/GuarantorInfo";

const MINIMUM_YEARS_OF_EMPLOYMENT = 3;

const initialFormData: FormData = {
  personal: {
    first_name: "",
    last_name: "",
    current_address: "",
  },
  employer: [
    {
      name: "",
      start_date: "",
      end_date: "",
    },
  ],
  guarantor: {
    name: "",
    address: "",
    relation: "",
  },
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [hasSufficientYearsOfEmployment, setHasSufficientYearsOfEmployment] = useState(true);

  const {
    steps,
    currentStepIndex,
    setCurrentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultiStepForm(
    [
      <PersonalInfo
        {...formData}
        updateFields={updatePersonalInfo}
      />,
      <EmployerInfo
        {...formData}
        updateFields={updateEmployerInfo}
        hasSufficientYearsOfEmployment={hasSufficientYearsOfEmployment}
        onBlur={handleOnBlur}
      />,
      !hasSufficientYearsOfEmployment && (
        <GuarantorInfo
          {...formData}
          updateFields={updateGuarantorInfo}
        />
      ),
    ].filter(Boolean)
  );

  function handleOnBlur(index: number) {
    const yearsOfEmployment = getEmploymentDuration(
      formData.employer[index].start_date,
      formData.employer[index].end_date
    );
    if (yearsOfEmployment < MINIMUM_YEARS_OF_EMPLOYMENT) {
      setHasSufficientYearsOfEmployment(false);
    } else {
      setHasSufficientYearsOfEmployment(true);
      const guarantorDefaultFields = initialFormData.guarantor;
      setFormData((prev) => ({ ...prev, guarantor: guarantorDefaultFields }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    postData(formData);
    setFormData(initialFormData);
    setCurrentStepIndex(0);
  }

  function updatePersonalInfo(field: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  }

  function updateEmployerInfo(field: string, value: string, index: number) {
    setFormData((prev) => ({
      ...prev,
      employer: prev.employer.map((employer, i) =>
        i === index ? { ...employer, [field]: value } : employer
      ),
    }));
  }

  function updateGuarantorInfo(field: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      guarantor: {
        ...prev.guarantor,
        [field]: value,
      },
    }));
  }

  return (
    <div className="container max-w-lg py-10 mx-auto ">
      <h1 className="text-xl text-center uppercase">Multistep form</h1>
      <form
        className="mt-10 bg-white rounded-md shadow-xl p-5 space-y-8 relative"
        onSubmit={handleSubmit}
      >
        <div className="absolute top-2 right-4">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {/* render current form step below */}
        {step}
        <div className="flex justify-end gap-4">
          {!isFirstStep && (
            <Button
              type="button"
              onClick={back}
            >
              Back
            </Button>
          )}
          <Button type="submit">{isLastStep ? "Submit" : "Next"}</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
