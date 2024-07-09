/*
  Warnings:

  - You are about to drop the column `otdel` on the `staff` table. All the data in the column will be lost.
  - Added the required column `dept` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otdel_id` to the `staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "staff" DROP COLUMN "otdel",
ADD COLUMN     "dept" TEXT NOT NULL,
ADD COLUMN     "otdel_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_otdel_id_fkey" FOREIGN KEY ("otdel_id") REFERENCES "otdel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
