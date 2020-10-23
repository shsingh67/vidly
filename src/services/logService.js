import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  //   Sentry.init({
  //     dsn:
  //       "https://4efa816164d14ef5998806cad086916f@o465842.ingest.sentry.io/5479236",
  //     integrations: [new Integrations.BrowserTracing()],
  //     // We recommend adjusting this value in production, or using tracesSampler
  //     // for finer control
  //     tracesSampleRate: 1.0,
  //   });
}

function log(error) {
  console.log(error);
  //Sentry.captureException(error);
}

export default {
  init,
  log,
};
