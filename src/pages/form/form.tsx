import { faker } from "@faker-js/faker";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/button";
import { Dialog } from "../../components/dialog";
import { Dropzone } from "../../components/dropzone";
import { Field } from "../../components/field";
import { Select } from "../../components/select";
import { TextArea } from "../../components/textarea";
import { useToastController } from "../../components/toaster/controller";
import { Toaster } from "../../components/toaster/toaster";
import { Toggle } from "../../components/toggle";
import { useFiltered } from "../../hooks/use-filtered";

const songs = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  label: faker.music.songName(),
}));

const animals = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  label: faker.animal.type(),
}));

const fruits = Array.from({ length: 40 }).map(() => faker.food.fruit());

const schema = z.object({
  sendInvite: z.boolean(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  song: z.array(z.string()).min(1, "Select at least one option"),
  about: z.string().max(20, "Can not be more than 20 characters").optional(),
  animal: z.string(),
  fruit: z.string().optional(),
  files: z.array(z.file()).min(1, "Please upload at least one file"),
});

const searchFruits = async (query: string) => {
  return await new Promise<string[]>((res) => {
    setTimeout(() => {
      res(
        fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 1000);
  });
};

const savePayload = async <T,>(payload: T) => {
  return await new Promise((res) => {
    setTimeout(() => {
      res(payload);
    }, 1000);
  });
};

export const FormPage = () => {
  const { emit } = useToastController();
  const [songOptions, runFilter] = useFiltered(songs);
  const [fruitOptions, runFruitFilter, { isPending }] = useFiltered(
    [] as string[],
    {
      filterFn: searchFruits,
    }
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    values: {
      name: "",
      song: [],
      about: "",
      sendInvite: false,
      animal: "",
      fruit: "",
      files: [],
    },
    resolver: zodResolver(schema),
  });

  const handleClose = useCallback(() => {
    reset();
    setIsExpanded(false);
  }, [reset]);

  const handleValidationError = useCallback(() => {
    emit({ message: "Validation error" });
  }, [emit]);

  const onSubmit = useCallback(
    async (data: z.infer<typeof schema>) => {
      await savePayload(data);
      emit({ message: "Saved succesfully", title: "Success" });
      handleClose();
    },
    [handleClose, emit]
  );

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
            <div className="col-span-full row-span-2 flex">
              <Field.Error>{errors.files?.message}</Field.Error>
              <Dropzone
                variant="avatar"
                accept={{ "image/*": [] }}
                className="mr-auto"
                value={watch("files")}
                onChange={(value) => setValue("files", value)}
                aria-invalid={!!errors.files}
              />
            </div>
            <Toggle
              aria-invalid={!!errors.sendInvite}
              label={
                <>
                  Send invitation{" "}
                  <Field.Error>{errors.sendInvite?.message}</Field.Error>
                </>
              }
              {...register("sendInvite")}
              className="col-span-12"
            />
            <Field
              className="col-span-4"
              placeholder="Enter name"
              label="Name"
              error={errors.name?.message}
              {...register("name")}
            />
            <Field
              className="col-span-8"
              label="Favorite songs"
              inputId="song"
              error={errors.song?.message}
            >
              <Select
                onQuery={runFilter}
                multiple
                options={songOptions}
                id="song"
                aria-invalid={!!errors.song}
                placeholder="Select your favorite songs"
                renderValue={(values) => (
                  <div className="flex gap-2">
                    {values.map((value) => (
                      <Button
                        tabIndex={-1}
                        className="!outline-0"
                        variant="border"
                        theme="primary"
                        height="xs"
                        key={value.id}
                        onClick={() =>
                          setValue(
                            "song",
                            watch("song").filter((v) => v !== value.id)
                          )
                        }
                      >
                        {value.label}
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                    ))}
                  </div>
                )}
                identifier={(option) => option.id}
                renderOption={(option) => option.label}
                value={watch("song")}
                {...register("song")}
              />
            </Field>

            <Field
              className="col-span-6"
              label="Favorite fruit"
              inputId="song"
              error={errors.song?.message}
            >
              <Select
                isPending={isPending}
                onQuery={runFruitFilter}
                options={fruitOptions}
                aria-invalid={!!errors.fruit}
                placeholder="Search your favorite fruit"
                value={watch("fruit")}
                {...register("fruit")}
              />
            </Field>

            <Field
              className="col-span-6"
              label="Favorite animal"
              error={errors.animal?.message}
            >
              <Select
                options={animals}
                aria-invalid={!!errors.animal}
                placeholder="Select your favorite animal"
                identifier={(option) => option.id}
                renderOption={(option) => option.label}
                value={watch("animal")}
                {...register("animal")}
              />
            </Field>

            <Field
              className="col-span-12"
              label="About you"
              error={errors.about?.message}
            >
              <TextArea {...register("about")} aria-invalid={!!errors.about} />
            </Field>
          </div>
        </Dialog.Main>
        <Dialog.Footer>
          <Button theme="accent" variant="border" onClick={() => reset()}>
            Clear form <FontAwesomeIcon icon={faTimes} />
          </Button>
          <Button onClick={handleClose}>Close</Button>
          <Button
            isPending={isSubmitting}
            theme="primary"
            onClick={handleSubmit(onSubmit, handleValidationError)}
          >
            Save
          </Button>
        </Dialog.Footer>
      </Dialog>
      <Toaster />
    </>
  );
};
