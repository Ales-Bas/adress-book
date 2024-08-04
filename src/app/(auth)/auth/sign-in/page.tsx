import { SignInForm } from '@/components/auth/sign-in-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthPage() {
    return (
        <div className="container relative  flex-col items-center justify-center self-center pt-24">
            <Card className="max-w-[350px] mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <CardTitle>Пожалуйста авторизируйтесь</CardTitle>
                    <CardDescription >Ссылка для доступа будет отправлена на e-mail</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <SignInForm />
                </CardContent>
            </Card>
        </div>

    )
}
