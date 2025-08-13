import { Product } from "../models/Product.js"

export class productController {
    static async showProducts(req, res) {
        const products = await Product.getProducts()

        res.render('products/all', { products })
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static async createProductPost(req, res) {
        const { name, image, price, description } = req.body

        const product = new Product(name, image, price, description)

        await product.save()

        res.redirect('/products')
    }

    static async getProduct(req, res) {
        const id = req.params.id

        const product = await Product.getProductById(id)

        res.render('products/product', { product })
    }

    static async removeProduct(req, res) {
        const id = req.params.id

        await Product.removeProductById(id)

        res.redirect('/')
    }

    static async editProduct(req, res) {
        const id = req.params.id

        const product = await Product.getProductById(id)

        res.render('products/edit', { product })
    }

    static async editProductPost(req, res) {
        const { _id, name, image, price, description } = req.body

        const product = new Product(name, image, price, description)
        console.log(_id)
        await product.updateProduct(_id)

        res.redirect('/products')
    }
}