using BackEnd.models;

namespace BackEnd.Controllers
{

    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
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
    }
}