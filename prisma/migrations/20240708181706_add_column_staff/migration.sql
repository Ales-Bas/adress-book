/*
  Warnings:

  - You are about to drop the column `otdel_id` on the `staff` table. All the data in the column will be lost.
  - Added the required column `company` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otdel` to the `staff` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_otdel_id_fkey";

-- AlterTable
ALTER TABLE "staff" DROP COLUMN "otdel_id",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "otdel" TEXT NOT NULL;
