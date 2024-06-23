import { SignInForm } from '@/components/auth/sign-in-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthPage() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Card>
                <CardHeader>
                    <CardTitle>Пожалуйста авторизируйтесь</CardTitle>
                    <CardDescription >Ссылка для доступа будет отправлена на e-mail</CardDescription>
                </CardHeader>
                <CardContent>
                    <SignInForm />
                </CardContent>
            </Card>
        </div>
    )
}
