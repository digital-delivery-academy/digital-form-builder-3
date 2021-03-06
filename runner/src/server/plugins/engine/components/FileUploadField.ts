import { FormData, FormSubmissionErrors } from "../types";
import { FormComponent } from "./FormComponent";
import * as helpers from "./helpers";

import { DataType, ViewModel } from "./types";

export class FileUploadField extends FormComponent {
  dataType = "file" as DataType;
  getFormSchemaKeys() {
    return helpers.getFormSchemaKeys(this.name, "string", this);
  }

  getStateSchemaKeys() {
    return helpers.getStateSchemaKeys(this.name, "string", this);
  }

  get attributes() {
    return {
      accept: "image/jpeg,image/gif,image/png,application/pdf",
    };
  }

  getViewModel(formData: FormData, errors: FormSubmissionErrors) {
    const { options } = this;
    const viewModel: ViewModel = {
      ...super.getViewModel(formData, errors),
      attributes: this.attributes,
    };

    if ("multiple" in options && options.multiple) {
      viewModel.attributes.multiple = "multiple";
    }

    return viewModel;
  }
}
