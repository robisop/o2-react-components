"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useRef } from "react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const onSubmit = (data: z.infer<typeof FormSchema>) => {
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  });
};

export const FormTextInput = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusOnClick = () => {
    inputRef.current?.focus();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-2 items-center">
                <FormLabel>Username</FormLabel>
                <FormDescription>Optional</FormDescription>
              </div>
              <FormControl>
                <Input placeholder="Placeholder" {...field} ref={inputRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onClick={handleFocusOnClick}>Focus</Button>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
