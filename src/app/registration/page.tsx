"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  ageGroup: z
    .string()
    .min(2, { message: "Age group must be at least 2 characters." }),
  club: z.string().min(2, { message: "Club must be at least 2 characters." }),
  parentName: z.string().min(2, { message: "Parent name is required." }),
  childName: z.string().min(2, { message: "Child name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
});

export default function RegistrationPage() {
  const searchParams = useSearchParams();
  const ageGroup = searchParams.get("ageGroup") || "";
  const club = searchParams.get("club") || "";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ageGroup,
      club,
      parentName: "",
      childName: "",
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="registration-page bg-white min-h-screen flex flex-col relative">
      {/* Navbar */}
      <Navbar className="relative z-100" />

      {/* Background Image */}
      <Image
        src="/programs.png"
        alt="Programs Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          Registration
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white p-8 rounded-lg shadow-md"
          >
            <FormField
              control={form.control}
              name="ageGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age Group</FormLabel>
                  <FormControl>
                    <Input placeholder="U4-5" {...field} disabled />
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
                  <FormLabel>Club</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Alta Vista/Canterbury SC"
                      {...field}
                      disabled
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
                  <FormLabel>Parent Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Child Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>

      {/* Footer */}
      <Footer className="relative z-20" />
    </div>
  );
}
