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
        return (
            revalidatePath('/admin/users')
        );

    } catch (error) {
        console.error(error);
        return { message: error };
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

export const getAllStaff = async () => {
    const data = await prisma.staff.findMany({
        orderBy: {
            name: 'asc'
        },

    });

    return data;
};

export const getSelectStaff = async (id: any) => {
    const data = await prisma.staff.findMany({
        where: {
            otdelId: id,
        },
    });

    return data;
};

