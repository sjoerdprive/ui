export const comboboxFilterDefault =
  <T>(options: T[]) =>
  (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    return options.filter((option) =>
      JSON.stringify(option)
        .replaceAll('"', "")
        .toLowerCase()
        .includes(lowerCaseQuery)
    );
  };
