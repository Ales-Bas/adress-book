"use server";

import { prisma } from "./db";

export const getSelectList = async () => {
    const dataSelect = await prisma.company.findMany({
        include: {
            depts: {
                include: {
                    otdels: true,
                }
            }

        },
    });

    return dataSelect;
};

export const getAllTableData = async () => {
    const data = await prisma.staff.findMany({

    });

    return data;
};

