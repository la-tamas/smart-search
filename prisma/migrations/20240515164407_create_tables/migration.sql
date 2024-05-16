-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "pk_cities" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dishtypes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "pk_dishtypes" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "pk_brands" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diets" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "pk_diets" PRIMARY KEY ("id")
);
