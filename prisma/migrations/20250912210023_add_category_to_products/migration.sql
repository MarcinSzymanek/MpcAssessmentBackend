-- AlterTable
ALTER TABLE "public"."products" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Over ear',
ALTER COLUMN "img_url" DROP NOT NULL;
