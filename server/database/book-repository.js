class BookRepository{

    constructor(connectionPool){
        this.connectionPool = connectionPool;  
    }

 
    get pool(){
        return this.connectionPool.getPool();
    }

    save(book, callback){

        this.pool.query('insert into books set ?', book, callback)
    }

    get(id, callback){
        this.pool.query('select * from books where id = ?', id,callback)

    }

    getAll(callback){
        this.pool.query('select * from books', callback)

    }

        // from put method
    update(id, book, callback){
        console.log(book);
        console.log('ID is',id);
        this.pool.query('update books set ? where id = ?', [book, id], callback)

    }

    delete(id, callback){

        console.log('Delete ID is',id);
        this.pool.query('delete from books where id = ?', id, callback);
    }

} // end class

module.exports = BookRepository;