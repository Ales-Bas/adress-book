"use server";

import { prisma } from "./db";
import { getAppSessionServer } from "@/app/utils/get-app-session.server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getAllUsers = async () => {
    const session = await getAppSessionServer();

    if (!session || session.user.role !== "ADMIN") {
        return [];
    }

    const data = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            role: true,
            name: true,
        },
        orderBy: {
            name: 'asc'
        },
    });

    return data;
};

export const getUserId = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        let getUser = await prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                email: true,
                role: true,
                name: true,
            },
        })
        return getUser;

    } catch (error) {
        return undefined
    }
}

export const createUser = async ({
    email,
    role,
    name,
}: any): Promise<any> => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.user.create({
            data: {
                email,
                role,
                name,
            }
        });

    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath('/admin/users');
    redirect('/admin/users');
};

export const updateUser = async (userid: any, {
    email,
    role,
    name,
}: any): Promise<any> => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.user.update({
            where: {
                id: userid,
            },
            data: {
                email,
                role,
                name,
            }
        });

    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath('/admin/users');
    redirect('/admin/users');
};

export const deleteUser = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const idDelete = await prisma.user.delete({
            where: {
                id: id,
            }
        })
        revalidatePath('/admin/users');
        return { message: 'Пользователь удален' };

    } catch (error) {
        return { message: "Ошибка базы данных: не удалось удалить объект" }
    }
}

export const getDataCompanyList = async () => {
    const session = await getAppSessionServer();

    if (!session || session.user.role !== "ADMIN") {
        return [];
    }

    const data = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
        },
        orderBy: {
            name: 'asc'
        },
    });

    return data;
};

export const getDataOtdelsList = async (id: string) => {

    const session = await getAppSessionServer();

    if (!session || session.user.role !== "ADMIN") {
        throw new Error("Доступ запрещен!")
    }

    const data = await prisma.otdel.findMany({
        where: {
            companyId: id,
        },
        select: {
            id: true,
            name: true,
        },
        orderBy: {
            name: 'asc'
        },
    })

    return data;


}

export const createStaffAdressbook = async ({
    name,
    company,
    dept,
    post,
    email,
    phone,
    inphone,
    mobile,
    otdelId,
}: any): Promise<any> => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.staff.create({
            data: {
                name,
                company,
                dept,
                post,
                email,
                phone,
                inphone,
                mobile,
                otdelId,
            }
        })
    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath('/admin/adressbook');
    redirect('/admin/adressbook');
};

export const deleteStaffAdressbook = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const idDelete = await prisma.staff.delete({
            where: {
                id: id,
            }
        })
        revalidatePath('/admin/adressbook');
        return { message: 'Запись удалена' };

    } catch (error) {
        return { message: "Ошибка базы данных: не удалось удалить запись" }
    }
}

export const getAllStaff = async () => {
    const data = await prisma.staff.findMany({
        orderBy: {
            name: 'asc'
        },

    });

    return data;
};

export const getSelectOtdelStaff = async (id: any) => {
    try {
        const session = await getAppSessionServer();

        if (!session) {
            throw new Error("Доступ запрещен!")
        }
        const data = await prisma.staff.findMany({
            where: {
                otdelId: id,
            },
        });

        return data;
    } catch (error) {
        return { message: ` Ошибка базы данных: ${error}` }
    }
};

export const getSelectList = async () => {
    const dataSelect = await prisma.company.findMany({
        include: {
            otdels: true,
        },
        orderBy: {
            name: 'asc'
        },
    });

    return dataSelect;
};

export const getSelectCompanyStaff = async (id: any) => {
    try {
        const session = await getAppSessionServer();

        if (!session) {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.otdel.findMany({
            where: {
                companyId: id,

            },
            include: {
                staffs: true,
            }

        });
        return data;

    } catch (error) {
        return { message: ` Ошибка базы данных: ${error}` }
    }
};

export const getAllCompany = async () => {
    try {
        const session = await getAppSessionServer();

        if (!session) {
            throw new Error("Доступ запрещен!")
        }
        const data = await prisma.company.findMany({
            orderBy: {
                name: 'asc'
            },
        });

        return data;
    } catch (error) {
        return { message: ` Ошибка базы данных: ${error}` }
    }
};

export const createCompany = async ({
    name,
}: any): Promise<any> => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.company.create({
            data: {
                name,
            }
        });
        revalidatePath('/admin/adressbook/new');
    } catch (error) {
        console.error(error);
        return { message: error };
    }
};

export const updateCompany = async (companyid: any, {
    name,
}: any): Promise<any> => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.company.update({
            where: {
                id: companyid,
            },
            data: {
                name,
            }
        });
        revalidatePath('/admin/adressbook/new');
    } catch (error) {
        console.error(error);
        return { message: error };
    }
};

export const createOtdel = async ({
    name,
    companyId
}: any): Promise<any> => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.otdel.create({
            data: {
                name,
                companyId
            }
        });
        revalidatePath('/admin/adressbook/new');
    } catch (error) {
        console.error(error);
        return { message: error };
    }
};

export const updateOtdel = async (otdelid: any, {
    name,
    companyId
}: any): Promise<any> => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const data = await prisma.otdel.update({
            where: {
                id: otdelid,
            },
            data: {
                name,
                companyId
            }
        });
        revalidatePath('/admin/adressbook/new');
    } catch (error) {
        console.error(error);
        return { message: error };
    }
};