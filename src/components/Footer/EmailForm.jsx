"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length == 0 || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/form-handler.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          posto: email,
          messago: "Interested in cooperation",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Success", {
          description: "Your email was sent successfully.",
        });
        setEmail("");
      } else {
        toast.error("Error", {
          description: data?.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast.error("Network error", {
        description: "Unable to send your message. Try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="justify-self-center text-center lg:text-start"
    >
      <h3 className="text-gray-100 text-2xl font-semibold">
        We invite you to cooperate!
      </h3>
      <p className="text-gray-100 text-xs mb-5">Leave your email</p>

      <div className="flex">
        <input
          type="email"
          name="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-gray-100 w-full lg:w-[200px] text-xs px-4 rounded-r-none rounded-l-[20px] border-[#515151] border-r-0 border p"
        />
        <Button
          className="rounded-l-none border border-primary rounded-r-[20px]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
};
