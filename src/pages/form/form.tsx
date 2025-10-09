import { useForm } from "react-hook-form";
import { Typography } from "../../components/typography";
import { Input } from "../../components/input";

export const FormPage = () => {
  const { register } = useForm();

  return (
    <div className="max-w-180 flex flex-col gap-6 p-6 rounded-lg border border-gray-200 shadow-lg">
      <Typography as="h2" size="h3">
        This is a form page. You can add your form components here.
      </Typography>

      <div className="grid-cols-12 grid gap-3">
        <Input className="col-span-4" placeholder="Enter name" />
      </div>
    </div>
  );
};
