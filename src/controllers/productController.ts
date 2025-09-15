import { Product } from 'src/models/product';
import { ProductService } from 'src/services/productService';
import { Request, Response, NextFunction } from 'express';

// Handle both standard get call, as well as optional category query param
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryParam = req.query.category;
        if(!categoryParam){
            const products = await ProductService.getProducts();
            res.send(JSON.stringify(products));
        }
        else{
            const products = await ProductService.getProductsByCategory(categoryParam.toString());
            res.status(200).send(products);
        }
    } catch (error) {
        next(error);
    }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number.parseInt(req.params.id!);
        const product = await ProductService.getProductWithId(id);
        res.status(200).send(product);
    }
    catch(error) {
        next(error);
    }
}

export const postProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
        const product: Product = req.body;
        console.log('New product: ');
        console.log(product.name);
        console.log(product.quantity);
        const validation = validateProduct(product);
        if (!validation.success) {
            console.log('Could not validate product!');
            res.status(422).send(validation.message);
        } else {
            console.log('Product validation succesful');
            res.status(201);
        }
        res.end();
    } catch (error) {
        next(error);
    }
};

interface ValidationError {
    success: boolean;
    message: string;
}

function validateProduct(product: Product): ValidationError {
    const result: ValidationError = { success: true, message: '' };

    if (!product.name || !product.price || !product.quantity) {
        result.success = false;
        result.message = 'Missing required field';
        return result;
    }
    if (product.price < 0 || product.quantity < 0) {
        result.success = false;
        result.message = 'price and quantity may not be a negative value';
    }
    return result;
}
