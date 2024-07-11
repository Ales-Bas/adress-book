/*
  Warnings:

  - Made the column `name` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `post` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `inphone` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mobile` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dept` on table `staff` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "staff" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "post" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "inphone" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "mobile" SET NOT NULL,
ALTER COLUMN "company" SET NOT NULL,
ALTER COLUMN "dept" SET NOT NULL;
