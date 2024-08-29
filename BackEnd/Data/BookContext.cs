using Microsoft.EntityFrameworkCore;
namespace BackEnd.models
{
    public class BookContext : DbContext{ // Inherit from DbContext

        // Constructor
         public BookContext(DbContextOptions<BookContext> options) : base(options) { }
         
          // Tables
        public DbSet<Book> Books{ get; set;}
        /// <summary>
        /// //
        /// </summary>
       
         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .HasIndex(b => b.Title)
                .IsUnique();
        }
        
    }
}