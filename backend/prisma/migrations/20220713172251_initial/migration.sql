-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measure" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temperatureInDegree" DECIMAL(65,30) NOT NULL,
    "currentInAmpere" DECIMAL(65,30) NOT NULL,
    "voltageInVolt" DECIMAL(65,30) NOT NULL,
    "powerInWatts" DECIMAL(65,30) NOT NULL,
    "powerFactor" DECIMAL(65,30) NOT NULL,
    "frequencyInHertz" DECIMAL(65,30) NOT NULL,
    "deviceId" TEXT,

    CONSTRAINT "Measure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Device_name_key" ON "Device"("name");

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;
