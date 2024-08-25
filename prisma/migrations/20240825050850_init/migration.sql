-- CreateEnum
CREATE TYPE "Status" AS ENUM ('HAPPY', 'SAD', 'DEPRESSED', 'NEEDLOVE');

-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "nftImage" TEXT DEFAULT '',
    "contractAddress" TEXT,
    "name" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "age" INTEGER NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "Location" TEXT NOT NULL,
    "lastHealthCheckOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Diseases" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'HAPPY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "contractAddress" TEXT,
    "image" TEXT NOT NULL,
    "nftImage" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "age" INTEGER NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "Location" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "lastHealthCheckOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Diseases" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'HAPPY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);
