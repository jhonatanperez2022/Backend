import gamesSchema from "../models/gamesSchema.js";

class gamesMongooseDao {
    async paginate(criteria)
    {
        const { name, limit, page } = criteria;
        const gamesDocuments = await gamesSchema.paginate({ name }, { limit, page });

        gamesDocuments.docs = gamesDocuments.docs.map(document => ({
            id: document._id,
            title: document.title,
            price: document.price,
            quantity: document.quantity
        }));

        return gamesDocuments;
    }
}

export default gamesMongooseDao;