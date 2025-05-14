-- CreateTable
CREATE TABLE `Profile` (
    `id` VARCHAR(191) NOT NULL,
    `favorite` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `weight` VARCHAR(191) NOT NULL,
    `goalWeight` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NOT NULL,
    `fitnessLevel` VARCHAR(191) NOT NULL,
    `goal` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `logs` JSON NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
