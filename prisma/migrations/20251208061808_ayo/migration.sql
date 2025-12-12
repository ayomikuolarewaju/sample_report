-- CreateTable
CREATE TABLE `Student` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `admissionNo` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `term` VARCHAR(191) NOT NULL,
    `session` VARCHAR(191) NOT NULL DEFAULT '2023/2024',
    `attendance` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Student_admissionNo_key`(`admissionNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubjectResult` (
    `id` VARCHAR(191) NOT NULL,
    `subjectName` VARCHAR(191) NOT NULL,
    `examScore` DOUBLE NOT NULL DEFAULT 0,
    `firstCA` DOUBLE NOT NULL DEFAULT 0,
    `secondCA` DOUBLE NOT NULL DEFAULT 0,
    `total` DOUBLE NOT NULL DEFAULT 0,
    `grade` VARCHAR(191) NULL,
    `point` INTEGER NULL,
    `remark` VARCHAR(191) NULL,
    `action` VARCHAR(191) NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubjectResult` ADD CONSTRAINT `SubjectResult_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
