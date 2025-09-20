import { SuscriptionEntitlementQuery } from "@/convex/query.config";
import { combinedSlug } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";
import Navbar from "@/components/navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profileName, entitlement } = await SuscriptionEntitlementQuery();
  /*   if (!entitlement._valueJSON) {
    //TODO
    redirect(`/dashboard/${combinedSlug(profileName!)}`);
  } */
  return (
    <div className="grid grid-cols-1">
      <Navbar />
      {children}
    </div>
  );
}
