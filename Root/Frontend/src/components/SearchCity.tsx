import { FormEvent, useState } from "react";

export const SearchCity = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSearch("");

    const cityName = await fetch("/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(search),
    });
    console.log(cityName);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
    </>
  );
};
