import { nextAuthConfig } from "./utils/next-auth-config";
import { getServerSession } from "next-auth";
import AuthComp from "@/components/auth/page/authcomp";
import DemoPage from "@/components/staff/table.server";

export default async function Home() {
  const session = await getServerSession(nextAuthConfig);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <div>
          <DemoPage />
        </div>
      ) : (
        <div className="w-screen h-13 flex items-center justify-center">
          <AuthComp />
        </div>
      )}
    </main>
  );
}
