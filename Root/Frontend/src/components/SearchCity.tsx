import React, { FormEvent, useState } from "react";

export const SearchCity = () => {
  const [search, setSearch] = useState("");

  const handleCity = async (event: FormEvent) => {
    event.preventDefault();

    const cityName = await fetch("/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
    });
  };
};
