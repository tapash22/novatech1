import Api from '../apis/Api';

export default{

    getProduct(){
        return Api().get('/product');
    },

    addProduct(product){
        return Api().post('/product/add',product);
    },

    deleteProduct(id){
        return Api().delete(`/product/delete/${id}`);
    },

    getAntibiotic(){
        return Api().get('/product/antibiotic');
    },

    getNutritional(){
        return Api().get('/product/nutritional');
    },

    getProductid(id){
        return Api().get(`/product/products/${id}`);
    }

}