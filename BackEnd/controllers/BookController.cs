using BackEnd.models;

namespace BackEnd.Controllers
{

    using Microsoft.AspNetCore.Mvc;

    [Route("[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private BookContext _bookContext;
        public  BooksController(BookContext bookContext){
            _bookContext = bookContext;
        }
        [HttpGet]
        
        
        // GET: api/books/
        [HttpGet("")]
        public ActionResult<List<Book>> GetAllBooks(){
            return _bookContext.Books.ToList();
        }


       // GET: api/books/5
        [HttpGet("{id}")]
        public ActionResult<Book> GetBook(int id)
        {
            var book = _bookContext.Books.FirstOrDefault(b => b.Id == id);

            if (book == null)
            {
                return NotFound(); // Return 404 if book is not found
            }

            return Ok(book); // Return the book with status 200
        }

          // POST: api/books/create
        [HttpPost("create")]
        public Book createBook(Book book){
            _bookContext.Books.Add(book);
            _bookContext.SaveChanges();
            return book;
        }


         // PUT: api/books/update/{id}
        [HttpPut("update/{id}")]
        public ActionResult<Book> updateBook(int id , Book book){
           var oldUser =  _bookContext.Books.FirstOrDefault(b => b.Id == id);
           oldUser.Author = book.Author;
           oldUser.Description = book.Description;
           oldUser.Title = book.Title;
           _bookContext.SaveChanges();
           return oldUser;
        }


           // DELETE: api/books/delete/{id}
        [HttpDelete("delete/{id}")]
        public ActionResult<int> deleteBook(int id){
            _bookContext.Books.Remove(_bookContext.Books.FirstOrDefault(b => b.Id == id));
            _bookContext.SaveChanges();
                return id;
        }

    }
}