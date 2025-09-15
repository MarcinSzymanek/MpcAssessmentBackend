import { PrismaClient } from '@prismaclient/index';
import { Product } from 'src/models/product';

export class ProductService {
    static client: PrismaClient = new PrismaClient();

    static async getProducts(): Promise<Product[]> {
        const products = await this.client.product.findMany();
        return products;
    }

    static async getProductWithId(id: number): Promise<Product | null> {
        const product = await this.client.product.findFirst({ where: { id: id } });
        return product;
    }

    static async getProductsByCategory(category: string): Promise<Product[] | null> {
        const products = await this.client.product.findMany({where: {category: category}});
        return products
    }
}
