-- CreateTable
CREATE TABLE "JobSheet" (
    "id" SERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requiredSkills" TEXT[],

    CONSTRAINT "JobSheet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobSheet_reference_key" ON "JobSheet"("reference");
