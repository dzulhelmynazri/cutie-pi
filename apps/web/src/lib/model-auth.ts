import { waitForModelOAuthCompletion } from "@cutie-pi/core";
import { rpc } from "./rpc";

export type { ModelCatalogEntry, ModelCredential, ModelOAuthBegin } from "@cutie-pi/contracts";
export { cancelModelOAuthAttempt, finishModelOAuthAttempt } from "@cutie-pi/core";

export async function waitForModelOAuth(loginId: string, signal?: AbortSignal) {
  return waitForModelOAuthCompletion(() => rpc.models.completeOAuth({ loginId }, { signal }), {
    signal,
  });
}
