const pgs = [
  "home", "projects", "blog", "about"
]

export function Header() {
  return (
    <header class="h-15 w-full flex justify-around font-(family-name:--font-luxrom)">
      {pgs.map((s) => {
        return <button class="text-xl font-bold text-(--light) text-shadow-[_0_4px_10px] text-shadow-(color:--med)">
          {s/*.toLocaleUpperCase()} */}
        </button>
      })}
    </header>
  );
}
