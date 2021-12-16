import scanDirEachSync from "@iyowei/scan-dir-each-sync";
import lsDirSync from "@iyowei/ls-dir-sync";

export default function scanDirSync(path, worker, raw = false) {
  if (Object.prototype.toString.call(worker) === "[object Function]") {
    return scanDirEachSync(path, worker, raw);
  }

  return lsDirSync(path);
}
