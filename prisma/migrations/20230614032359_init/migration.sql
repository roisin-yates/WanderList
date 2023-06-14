-- CreateTable
CREATE TABLE "Countries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "visited" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "country_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "firstDay" DATETIME NOT NULL,
    "lastDay" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
