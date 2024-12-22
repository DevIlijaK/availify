"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { type FieldValues, useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "~/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProduct } from "~/server/queries";
import { ImageList } from "../image-list";
import { DaysOfWeek } from "~/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { Loading } from "../ui/loading";
import { Calendar, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

const productSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  picture: z.string().min(3, {
    message: "Picture URL must be at least 3 characters.",
  }),
  dayOfWeek: z
    .nativeEnum(DaysOfWeek)
    .refine((val) => Object.values(DaysOfWeek).includes(val), {
      message: "Please select a valid day of the week.",
    }),
});

const CreateNewProduct = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      picture: "",
      dayOfWeek: DaysOfWeek.MONDAY,
    },
  });
  const onSubmit = async (data: FieldValues) => {
    console.log("Ulazi ovde");
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
      await createProduct({
        title: data.title,
        description: data.description,
        price: data.price,
        imageUrl: data.picture,
        dayOfWeek: data.dayOfWeek,
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
    <div className="flex h-full flex-col gap-2 p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-base">Kreirajte novi proizvod:</h1>
        <div className="flex">
          <div
            onClick={() => router.push("/")}
            className="cursor-pointer rounded-full p-2 hover:bg-gray-200"
          >
            <Calendar />
          </div>

          <div
            onClick={() => router.push("/edit")}
            className="cursor-pointer rounded-full p-2 hover:bg-gray-200"
          >
            <Pencil />
          </div>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col justify-between gap-4"
        >
          <div className="flex h-full flex-col gap-3">
            <FormField
              control={form.control}
              name="title"
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
              name="price"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Cena:</FormLabel>
                  <FormControl>
                    <Input {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dayOfWeek"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Dan:</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value: string) => {
                        console.log(value);
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(DaysOfWeek).map((day) => (
                          <SelectItem key={day} value={day}>
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="picture"
              render={({ field }) => (
                <FormItem className="h-full">
                  <FormControl>
                    {/* <Input placeholder="Upišite cenu proizvoda" {...field} /> */}
                    <ImageList
                      onSelectionChange={(url: string) => field.onChange(url)}
                      selectedImageUrl={field.value}
                    />
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
};

export default CreateNewProduct;
