/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Company";

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dept" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "dept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otdel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "dept_id" TEXT NOT NULL,

    CONSTRAINT "otdel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "inphone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "otdel_id" TEXT NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_name_key" ON "company"("name");

-- AddForeignKey
ALTER TABLE "dept" ADD CONSTRAINT "dept_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "otdel" ADD CONSTRAINT "otdel_dept_id_fkey" FOREIGN KEY ("dept_id") REFERENCES "dept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_otdel_id_fkey" FOREIGN KEY ("otdel_id") REFERENCES "otdel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
