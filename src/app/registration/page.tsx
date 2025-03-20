"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormspree } from "@formspree/react";
import { z } from "zod";

const formSchema = z.object({
  ageGroup: z
    .string()
    .min(2, { message: "Age group must be at least 2 characters." }),
  club: z.string().min(2, { message: "Club must be at least 2 characters." }),
  season: z.string().min(2, { message: "Season is required." }),
  parentName: z.string().min(2, { message: "Parent name is required." }),
  childName: z.string().min(2, { message: "Child name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
});

const RegistrationForm = () => {
  const searchParams = useSearchParams();
  if (!searchParams) {
    return <div>Error: Search params not available</div>;
  }

  const ageGroup = searchParams.get("ageGroup") || "";
  const club = searchParams.get("club") || "";
  const season = searchParams.get("season") || "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ageGroup,
      club,
      season,
      parentName: "",
      childName: "",
      email: "",
    },
  });

  const [state, handleSubmit] = useFormspree("xnnpjwvy");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    handleSubmit(formData as any);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
      >
        <FormField
          control={form.control}
          name="ageGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Age Group</FormLabel>
              <FormControl>
                <Input
                  placeholder="U4-5"
                  {...field}
                  disabled
                  className="text-black disabled:text-black disabled:opacity-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="club"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Club</FormLabel>
              <FormControl>
                <Input
                  placeholder="Alta Vista/Canterbury SC"
                  {...field}
                  disabled
                  className="text-black disabled:text-black disabled:opacity-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="season"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Season</FormLabel>
              <FormControl>
                <Input
                  placeholder="Spring 2025"
                  {...field}
                  disabled
                  className="text-black disabled:text-black disabled:opacity-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Parent Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="text-black placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="childName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Child Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jane Doe"
                  {...field}
                  className="text-black placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...field}
                  className="text-black placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={state.submitting}>
          {state.submitting ? "Submitting..." : "Submit"}
        </Button>
        {state.succeeded && (
          <p className="text-green-600 text-center">
            Thank you! Your registration has been submitted.
          </p>
        )}
      </form>
    </Form>
  );
};

export default function RegistrationPage() {
  return (
    <div className="registration-page bg-white min-h-screen flex flex-col relative">
      <Navbar />

      <Image
        src="/programs.png"
        alt="Programs Background"
        fill
        className="absolute inset-0 z-0 object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>

      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          Registration
        </h1>

        <Suspense
          fallback={
            <div className="text-white text-center">
              Loading registration form...
            </div>
          }
        >
          <RegistrationForm />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}
