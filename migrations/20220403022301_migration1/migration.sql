-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "seed" TEXT NOT NULL DEFAULT '',
    "rooms_cleared" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Player_seed_key" ON "Player"("seed");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
