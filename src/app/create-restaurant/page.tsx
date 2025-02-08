"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SimpleUploadButton } from "~/components/simple-upload-button";
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
import { createProduct } from "~/server/queries";

export const restaurantSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  logoUrl: z.string().url({
    message: "Logo URL must be a valid URL.",
  }),
});

export default function CreateRestaurant() {
  const form = useForm({
    resolver: zodResolver(restaurantSchema),
    defaultValues: {
      name: "",
      address: "",
      LogoUrl: "",
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
            name="address"
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
            name="LogoUrl"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel>Dodajte logo</FormLabel>
                <FormControl>
                  <Input {...field} className="rounded-xl" type="file" />
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
        <SimpleUploadButton onUploadEnd={() => console.log()} />
      </form>
    </Form>
  );
}

// const AddressFieldWithMap = ({ field, onChange }) => {
//   const [mapCenter, setMapCenter] = useState({ lat: 44.8167, lng: 20.4667 });
//   const [markerPosition, setMarkerPosition] = useState(mapCenter);

//   const handleMapClick = (event: google.maps.MapMouseEvent) => {
//     const newLat = event?.latLng?.lat();
//     const newLng = event?.latLng?.lng();
//     setMarkerPosition({ lat: newLat, lng: newLng });

//     // Update field value with new lat/lng
//     onChange(`Lat: ${newLat}, Lng: ${newLng}`);
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <Input {...field} className="rounded-xl" />
//       <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//         <GoogleMap
//           mapContainerStyle={{ width: "100%", height: "400px" }}
//           center={mapCenter}
//           zoom={15}
//           onClick={handleMapClick}
//         >
//           <Marker position={markerPosition} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };
