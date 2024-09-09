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

export const updateStaffAdressbook = async (staffid: any, {
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

        const data = await prisma.staff.update({
            where: {
                id: staffid,
            },
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
        });

    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath('/admin/adressbook');
    redirect('/admin/adressbook');
};

export const createStaffExcelFile = async (data: any, jsonData: any) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }
        const json = JSON.parse(jsonData)
        const jsonBulk = json.map((i: any) => ({

            name: i.hasOwnProperty("ФИО") ? i["ФИО"] : "",
            company: data.company,
            dept: data.dept,
            post: i.hasOwnProperty("Должность") ? String(i["Должность"]) : "",
            email: i.hasOwnProperty("Почта") ? String(i["Почта"]) : "",
            phone: i.hasOwnProperty("Рабочий телефон") ? String(i["Рабочий телефон"]) : "",
            inphone: i.hasOwnProperty("Внутренний телефон") ? String(i["Внутренний телефон"]) : "",
            mobile: i.hasOwnProperty("Личный телефон") ? String(i["Личный телефон"]) : "",
            otdelId: data.otdelId,
        }))

        await prisma.staff.createMany({
            data: jsonBulk
        });
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

export const trueViemStaffAdressbook = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const idTrue = await prisma.staff.update({
            where: {
                id: id,
            },
            data: {
                viem: true,
            }
        })
        revalidatePath('/admin/adressbook');
        redirect('/admin/adressbook');
        return { message: 'Запись обновлена' };

    } catch (error) {
        return { message: "Ошибка базы данных: не удалось удалить запись" }
    }
}

export const falseViemStaffAdressbook = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        const idTrue = await prisma.staff.update({
            where: {
                id: id,
            },
            data: {
                viem: false,
            }
        })
        revalidatePath('/admin/adressbook');
        redirect('/admin/adressbook');
        return { message: 'Запись обновлена' };

    } catch (error) {
        return { message: "Ошибка базы данных: не удалось удалить запись" }
    }
}

export const getAllStaff = async () => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }
        const data = await prisma.staff.findMany({
            orderBy: {
                name: 'asc'
            },

        });

        return data;
    } catch (error) {
        return { message: ` Ошибка базы данных: ${error}` }
    }
};

export const getViemAllStaff = async () => {
    try {
        const session = await getAppSessionServer();

        if (!session) {
            throw new Error("Доступ запрещен!")
        }
        const data = await prisma.staff.findMany({
            where: {
                viem: true,
            },
            orderBy: {
                name: 'asc'
            },

        });

        return data;
    } catch (error) {
        return { message: ` Ошибка базы данных: ${error}` }
    }
};

export const getStaffId = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        let getUser = await prisma.staff.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
                company: true,
                dept: true,
                post: true,
                email: true,
                phone: true,
                inphone: true,
                mobile: true,
                otdelId: true
            },
        })
        return getUser;

    } catch (error) {
        return undefined
    }
}

export const getSelectOtdelStaff = async (id: any) => {
    try {
        const session = await getAppSessionServer();

        if (!session) {
            throw new Error("Доступ запрещен!")
        }
        const data = await prisma.staff.findMany({
            where: {
                otdelId: id,
                viem: true,
            },
            orderBy: {
                name: 'asc'
            },
        });

        return data;
    } catch (error) {
        return { message: ` Ошибка базы данных: ${error}` }
    }
};

export const getSelectList = async () => {
    try {
        const session = await getAppSessionServer();

        if (!session) {
            throw new Error("Доступ запрещен!")
        }
        const dataSelect = await prisma.company.findMany({
            include: {
                otdels: true,
            },
            orderBy: {
                name: 'asc'
            },
        });

        return dataSelect;
    } catch (error) {
        return { message: ` Ошибка базы данных: ${error}` }
    }
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
                staffs: {
                    where: {
                        viem: true,
                    },
                    orderBy: {
                        name: 'asc',
                    },
                }

            },
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

export const getCompanyById = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        let getCompany = await prisma.company.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
            },
        })
        return getCompany;

    } catch (error) {
        return undefined
    }
}

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
    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath('/admin');
    redirect('/admin');
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
    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath('/admin');
    redirect('/admin');
};

export const getOtdelById = async (id: string) => {
    try {
        const session = await getAppSessionServer();

        if (!session || session.user.role !== "ADMIN") {
            throw new Error("Доступ запрещен!")
        }

        let getOtdel = await prisma.otdel.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
            },
        })
        return getOtdel;

    } catch (error) {
        return undefined
    }
}

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
    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath(`/admin/otdels/${companyId}`);
    redirect(`/admin/otdels/${companyId}`);
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
    } catch (error) {
        console.error(error);
        return { message: error };
    }
    revalidatePath(`/admin/otdels/${companyId}`);
    redirect(`/admin/otdels/${companyId}`);
};