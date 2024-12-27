"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Loading } from "~/components/ui/loading";
import { createCategory } from "../../server/queries";

const productCategorySchema = z.object({
  name: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  iconName: z.string(),
});
export default function AddCategoryPage() {
  const form = useForm({
    resolver: zodResolver(productCategorySchema),
    defaultValues: {
      name: "",
      description: "",
      iconName: "",
    },
  });
  const onSubmit = async (data: FieldValues) => {
    toast(
      <div>
        <Loading /> Kreiramo novi proizvod
      </div>,
      {
        duration: 100000,
        id: "creating-begin",
      },
    );
    try {
      await createCategory({
        name: data.name,
        description: data.description,
        iconName: data.iconName,
      });
      toast.dismiss("creating-begin");
      toast("Kreiranje zavrseno!");
    } catch (error) {
      if (error instanceof Error) {
        toast.dismiss("creating-begin");
        toast.error(error.message);
      } else {
        toast.dismiss("creating-begin");
        toast.error("An unexpected error occurred.");
      }
    }
  };
  return (
    <div className="h-full w-full p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col justify-between gap-4"
        >
          <div className="flex h-full flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Naziv:</FormLabel>
                  <FormControl>
                    <Input {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Opis:</FormLabel>
                  <FormControl>
                    <Input {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="iconName"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>IconName</FormLabel>
                  <FormControl>
                    <Input {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            onClick={() => console.log("test: ", form.formState.errors)}
            type="submit"
          >
            Kreiraj
          </Button>
        </form>
      </Form>
    </div>
  );
}
