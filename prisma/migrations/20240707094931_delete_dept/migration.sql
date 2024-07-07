/*
  Warnings:

  - You are about to drop the column `dept_id` on the `otdel` table. All the data in the column will be lost.
  - You are about to drop the `dept` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `company_id` to the `otdel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dept" DROP CONSTRAINT "dept_company_id_fkey";

-- DropForeignKey
ALTER TABLE "otdel" DROP CONSTRAINT "otdel_dept_id_fkey";

-- AlterTable
ALTER TABLE "otdel" DROP COLUMN "dept_id",
ADD COLUMN     "company_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "dept";

-- AddForeignKey
ALTER TABLE "otdel" ADD CONSTRAINT "otdel_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
