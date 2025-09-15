import { PrismaClient } from '@prismaclient/index';

const prisma = new PrismaClient();

export default async function main() {
    await prisma.product.create({
        data: {
            img_url: "https://i.ibb.co/TxqtCRbQ/c-d-x-PDX-a-82obo-unsplash.jpg",
            name: "Headphones CDX Over-Ear",
            price: 499.95,
            quantity: 2,
            category: "Over-Ear"
        }
    });

    await prisma.product.create({
        data: {
            img_url: "https://i.ibb.co/fz153DmY/Headphones-SONYOver-Ear.jpg",
            name: "Headphones SONY Over-Ear.jpg",
            price: 259.99,
            quantity: 3,
            category: "Over-Ear"
        }
    });

    await prisma.product.create({
        data: {
            img_url: "https://i.ibb.co/wFnjb0WW/kiran-ck-RZmi-DOpv1l-M-unsplash.jpg",
            name: "Headphones Kiran On-Ear",
            price: 325.99,
            quantity: 5,
            category: "On-Ear"
        }
    });

    await prisma.product.create({
        data: {
            img_url: "https://i.ibb.co/dspb8LQv/theregisti-TUBEp7-DPL9o-unsplash.jpg",
            name: "Headphones Areabi In-Ear",
            price: 135.99,
            quantity: 3,
            category: "In-Ear"
        }
    });

    await prisma.product.create({
        data: {
            img_url: "https://i.ibb.co/pvSq5N5X/theregisti-Yw-JGDLKOE48-unsplash.jpg",
            name: "Headphones Regi In-Ear",
            price: 150.99,
            quantity: 0,
            category: "In-Ear"
        }
    })

    console.log("Database has been seeded!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });