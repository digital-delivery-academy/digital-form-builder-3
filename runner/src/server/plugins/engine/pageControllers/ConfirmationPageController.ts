import { PageController } from "./PageController";
import { feedbackReturnInfoKey, redirectTo, redirectUrl } from "../helpers";
import { HapiRequest, HapiResponseToolkit } from "server/types";
import { formSchema } from "server/schemas/formSchema";
import config from "server/config";

export class ConfirmationPageController extends PageController {
  /**
   * The controller which is used when Page["controller"] is defined as "./pages/confirmation.js"
   */

  /**
   * Returns an async function. This is called in plugin.ts when there is a GET request at `/{id}/{path*}`,
   */
  makeGetRouteHandler() {
    console.log("makeGetRouteHandler hit");
    return async (request: HapiRequest, h: HapiResponseToolkit) => {
      console.log("In in the get async");
      return redirectTo(request, h, `/${request.params.id}/status`);
    };
  }

  /**
   * Returns an async function. This is called in plugin.ts when there is a POST request at `/{id}/{path*}`.
   * If a form is incomplete, a user will be redirected to the start page.
   */
  makePostRouteHandler() {
    console.log("makePostRouteHandler hit");
    return async (request: HapiRequest, h: HapiResponseToolkit) => {
      return redirectTo(request, h, `/${request.params.id}/status`);
    };
  }

  get postRouteOptions() {
    return {
      ext: {
        onPostHandler: {
          method: (_request: HapiRequest, h: HapiResponseToolkit) => {
            return h.continue;
          },
        },
      },
    };
  }
}
