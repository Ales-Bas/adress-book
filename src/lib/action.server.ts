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




export default async function getDataTable() {
    const dataTable = await prisma.staff.findMany({
    });
    return dataTable
}