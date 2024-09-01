<h1 align="center">
    LIBRARY MANAGEMENT APPLICATION
</h1>

<h4>

A streamlined and effective Library Management System that enables users to handle book records in a library. It features functionalities for creating, reading, updating, and deleting (CRUD) book entries. The project includes a backend API developed with C# .NET and an SQLite database, with a frontend built using React and TypeScript.


</h4>
<h2>Technologies</h2>
    <ul>
        <li><strong>server:</strong> C# .NET Core with Entity Framework, SQLite database.</li>
        <li><strong>client:</strong> React with TypeScript.</li>
        <li><strong>Version Control:</strong> Git</li>
    </ul>

## Features

<ul>
        <li><strong>Book CRUD Operations:</strong>
            <ul>
                <li><strong>Create:</strong> Add new book records with title, author, image, type and description.</li>
                <li><strong>Read:</strong> View a list of existing book records.</li>
                <li><strong>Update:</strong> Edit and update existing book records.</li>
                <li><strong>Delete:</strong> Remove book records from the library using id .</li>
            </ul>
        </li>
        
    </ul>




    <ul>
        <li><strong>Backend:</strong>
            <ul>
                <li>RESTful API endpoints for book management.</li>
                <li>Entity Framework for database integration.</li>
                <li>Error handling and validation for robust API operations.</li>
            </ul>
        </li>
        <li><strong>Frontend:</strong>
            <ul>
                <li>Responsive and user-friendly interface.</li>
                <li>CRUD operations fully integrated with the backend API.</li>
                <li>Input validation and error handling for form submissions.</li>
            </ul>
        </li>
    </ul>

<h2>Setup Instructions</h2>

  <h3>Prerequisites</h3>
    <ul>
        <li>.NET Core SDK</li>
        <li>Node.js and npm</li>
    </ul>

  

```sh
dotnet restore
dotnet build
dotnet run
```

<h3>Frontend Setup</h3>
    <ol>
        <li>Navigate to the <code>frontend</code> directory.</li>
        <li>Install dependencies:
            <pre>
<code>npm install</code>
            </pre>
        </li>
        <li>Run the frontend application:
            <pre>
<code>npm run dev</code>
            </pre>
        </li>
    </ol>

<h3>Running the Application</h3>
    <p> <code>http://localhost:5173</code> </p>



