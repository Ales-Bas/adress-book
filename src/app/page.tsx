import AuthComp from "@/components/auth/page/authcomp";
import DemoPage from "@/components/staff/table.server";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">

      <DemoPage />

    </main>
  );
}
