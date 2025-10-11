import { faker } from "@faker-js/faker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/button";
import { Dialog } from "../../components/dialog";
import { Field } from "../../components/field";
import { Select } from "../../components/select";
import { Toggle } from "../../components/toggle";
import { useFiltered } from "../../hooks/use-filtered";

const options = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  label: faker.music.songName(),
}));

const schema = z.object({
  sendInvite: z.literal(true),
  name: z.string().min(2, "Name must be at least 2 characters"),
  song: z.array(z.string()).min(1, "Select at least one option"),
});

export const FormPage = () => {
  const [songOptions, runFilter] = useFiltered(options);
  const [isExpanded, setIsExpanded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      name: "",
      song: [],
    },
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Button onClick={() => setIsExpanded(true)} theme="primary">
        Open form
      </Button>
      <Dialog
        isVisible={isExpanded}
        title="Form example"
        ref={dialogRef}
        className="w-160"
      >
        <Dialog.Main className="flex flex-col gap-3 ">
          <div className="grid-cols-12 grid gap-3">
            <Field error={errors.sendInvite?.message} className="col-span-12">
              <Toggle label="Send invitation" {...register("sendInvite")} />
            </Field>
            <Field
              className="col-span-4"
              placeholder="Enter name"
              height="lg"
              label="Name"
              aria-invalid={!!errors.name}
              error={errors.name?.message}
              {...register("name")}
            />
            <Field
              className="col-span-8"
              label="Song"
              inputId="song"
              error={errors.song?.message}
            >
              <Select
                onQuery={runFilter}
                multiple
                options={songOptions}
                id="song"
                placeholder="Select your favorite songs"
                identifier={(option) => option.id}
                renderOption={(option) => option.label}
                value={watch("song")}
                {...register("song")}
              />
            </Field>
          </div>
        </Dialog.Main>
        <Dialog.Footer>
          <Button onClick={() => setIsExpanded(false)}>Close</Button>
          <Button
            isPending={isSubmitting}
            theme="primary"
            onClick={handleSubmit(console.log)}
          >
            Save
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
};
