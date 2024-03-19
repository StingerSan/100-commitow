import { FormEvent, useState } from "react";

export const SearchCity = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const cityName = await fetch("/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(search),
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
    </>
  );
};
