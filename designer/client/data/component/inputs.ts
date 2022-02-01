import { Input, isNotContentType } from "../types";
import { allPathsLeadingTo } from "../page";
import { Path } from "../types";
import { FormDefinition } from "@xgovformbuilder/model";

// This will get all input regardless of the page unless the pages are passed in
export function allInputs(data: FormDefinition): Input[] {
  const { pages = [] } = data;
  const test = pages.flatMap((page) => {
    const inputs = (page.components ?? []).filter(isNotContentType);
    return inputs.map((input) => {
      return {
        name: input.name,
        page: { path: page.path, section: page.section },
        propertyPath: !!page.section
          ? `${page.section}.${input.name}`
          : input.name,
        title: input.title,
        list: "list" in input ? input.list : undefined,
        type: input.type,
      };
    });
  });
  return test;
}

// This method here seems to get inputs for every page other than the page it is coming from
export function inputsAccessibleAt(data: FormDefinition, path: Path) {
  const pages = allPathsLeadingTo(data, path);
  if (pages.length === 0) {
    return allInputs(data);
  }

  const testing = data.pages.filter((page) => pages.includes(page.path));
  console.log(testing);

  return allInputs({
    ...data,
    pages: data.pages.filter((page) => pages.includes(page.path)),
  });
}

// Ive created this to get the inputs for the current path
export function allInputsForCurrentPage(data: FormDefinition, path: Path) {
  const { pages = [] } = data;
  const page = pages.filter((page) => page.path === path);
  return allInputs({ ...data, pages: page });
}
