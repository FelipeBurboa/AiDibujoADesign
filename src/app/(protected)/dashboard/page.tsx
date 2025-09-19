import { SuscriptionEntitlementQuery } from "@/convex/query.config";
import { redirect } from "next/navigation";
import { combinedSlug } from "@/lib/utils";
import { Suspense } from "react";

export default async function DashboardPage() {
  const { entitlement, profileName } = await SuscriptionEntitlementQuery();

  if (!entitlement._valueJSON) {
    //redirect(`/billing/${combinedSlug(profileName!)}`);
    redirect(`/dashboard/${combinedSlug(profileName!)}`);
  }
  redirect(`/dashboard/${combinedSlug(profileName!)}`);
}
