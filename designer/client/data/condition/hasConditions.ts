import { FormDefinition } from "@xgovformbuilder/model";

export function hasConditions(data: FormDefinition): boolean {
  data.conditions;
  return data.conditions.length > 0;
}
