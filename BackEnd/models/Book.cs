// using System; //this class is inside system String
// namespace BackEnd.models
// {
//     public class Book
//     {
//         public int Id { get; set; }
//         public string Title { get; set; }
//         public string Description {get; set;}
//         public string Image {get; set;}
//         public string Author {get; set;}
//         public string Type {get; set;}
//     }
// }


using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema; // Add this namespace for DatabaseGeneratedOption

namespace BackEnd.models
{
    public class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Auto-generate Id
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; }
        [Required]
        [MaxLength(1000)]
        public string Description { get; set; }
        [Required]
        [MaxLength(500)]
        public string Image { get; set; }
       
        [Required]
        [MaxLength(100)]
        public string Author { get; set; }
        [Required]
        [MaxLength(50)]
        public string Type { get; set; }
    }
}