import { trackingDB, Package } from "../data/tracking-db"

export function getPackageByTrackingCode(code: string): Package | null {
    const found = trackingDB.find((pkg) => pkg.trackingNumber === code);
    return found ?? null;
  }