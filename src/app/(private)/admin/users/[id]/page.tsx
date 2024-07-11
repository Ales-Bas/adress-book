import { StaffForm } from "@/components/admin/users/forms/create-user-form";
import { getUserId } from "@/lib/action.server";

export default async function AdminEditUserPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const user = await getUserId(id);

    if (!user) {
        <div>Ошибка получения пользователя</div>
    }

    return (
        <StaffForm user={user} />

    )
}