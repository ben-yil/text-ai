"use client";
import React, { useState } from "react";
import { Key } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import LargeHeading from "@/components/ui/LargeHeading";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { createApiKey } from "@/helpers/create-api-key";
import { toast } from "@/components/ui/toast";

const RequestApiKey = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  async function createNewApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          message: error.message,
          type: "error",
        });
      }
      toast({
        title: "Error",
        message: "Something went wrong",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container md:max-w-2xl ">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <LargeHeading className="text-center my-4" size={"md"}>
          Request your API key
        </LargeHeading>
      </div>
      <form
        onSubmit={createNewApiKey}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {apiKey ? (
            <CopyButton
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              valueToCopy={apiKey}
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apiKey} isLoading={isLoading}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
