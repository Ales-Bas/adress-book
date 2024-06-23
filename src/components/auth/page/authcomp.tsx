import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SignInButton } from "../sign-in-button";

export default function AuthComp() {
    return (
        <div className="container relative  flex-col items-center justify-center self-center pt-24">
            <Card className="max-w-[400px] mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Для доступа к адресной книге необходимо авторизоваться
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <SignInButton />
                </CardContent>
            </Card>
        </div>
    );
}