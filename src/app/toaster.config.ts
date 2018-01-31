import { ToasterConfig } from "angular2-toaster/src/toaster-config";

/** Global toaster config */
export const TOASTER_CONFIG: ToasterConfig = new ToasterConfig({
    positionClass: "toast-top-right",
    timeout: 5000,
    showCloseButton: true
});