-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `updatedBy` VARCHAR(191) NOT NULL,
    `state` ENUM('IN_PROGRESS', 'ARCHIVED', 'INVITATION', 'ALL') NOT NULL,
    `deletedBy` VARCHAR(191) NULL,
    `deletedAt` DATETIME(3) NULL,
    `equipId` VARCHAR(191) NULL,
    `logs` JSON NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `imgProfilURL` VARCHAR(191) NULL,
    `imgProfilPATH` VARCHAR(191) NULL,
    `address` JSON NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
