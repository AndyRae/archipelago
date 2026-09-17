import qrCodeUrl from "../assets/qr-code.svg";
import { el } from "./dom.ts";

/**
 * The presenter's QR code: sits bottom-left, above the live-activity panel
 * (`#fsa-stats-panel`), so someone watching this on a screen can scan it and
 * open the app themselves. Desktop-only chrome — hidden at the same
 * `max-width: 640px` breakpoint styles.css already uses for phone layouts,
 * since a visitor on their own phone has no use for a code to scan. Purely
 * decorative: it carries no simulation state, so it's DOM-only like
 * helpOverlay.ts and statsPanel.ts, not unit tested.
 */
export interface QrPanelHandle {
  dispose(): void;
}

export function mountQrPanel(root: HTMLElement): QrPanelHandle {
  const panel = el(
    "div",
    { id: "fsa-qr-panel", class: "fsa-qr-panel" },
    el("img", {
      class: "fsa-qr-panel__image",
      src: qrCodeUrl,
      alt: "QR code — scan to open Five Safes Archipelago on your own device",
    }),
  );
  root.append(panel);

  return {
    dispose() {
      panel.remove();
    },
  };
}
