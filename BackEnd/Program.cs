using System;
using BackEnd.models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder
            .WithOrigins("http://localhost:5173") // Add your React app's URL
            .AllowAnyMethod()
            .AllowAnyHeader());
});

// Add services to the container.
builder.Services.AddDbContext<BookContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Define API endpoints
app.MapGet("/books", async (BookContext db) =>
    await db.Books.ToListAsync());

app.MapGet("/books/{id}", async (int id, BookContext db) =>
    await db.Books.FindAsync(id)
        is Book book
            ? Results.Ok(book)
            : Results.NotFound());

// app.MapPost("/books", async (Book book, BookContext db) =>
// {
//     db.Books.Add(book);
//     await db.SaveChangesAsync();
//     return Results.Created($"/books/{book.Id}", book);
// });

app.MapPost("/books", async (Book book, BookContext db) =>
{
    try
    {
        if (string.IsNullOrEmpty(book.Title) || string.IsNullOrEmpty(book.Author))
        {
            return Results.BadRequest("Title and Author are required fields.");
        }

        db.Books.Add(book);
        await db.SaveChangesAsync();
        return Results.Created($"/books/{book.Id}", book);
    }
    catch (Exception ex)
    {
        // Log the exception
        Console.WriteLine($"Error creating book: {ex}");
        return Results.StatusCode(500);
    }
})
.WithName("CreateBook")
.WithOpenApi();

app.MapPut("/books/{id}", async (int id, Book inputBook, BookContext db) =>
{
    var book = await db.Books.FindAsync(id);
    if (book is null) return Results.NotFound();
    
    book.Title = inputBook.Title;
    book.Author = inputBook.Author;
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapDelete("/books/{id}", async (int id, BookContext db) =>
{
    if (await db.Books.FindAsync(id) is Book book)
    {
        db.Books.Remove(book);
        await db.SaveChangesAsync();
        return Results.Ok(book);
    }
    return Results.NotFound();
});

app.Run();