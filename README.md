# Desmy Framework

Desmy is an open-source framework designed to accelerate web application development by seamlessly integrating Django, ReactJS, and Tailwind CSS. It empowers developers to scaffold a full-stack application quickly using some of the most popular technologies in the industry.

## Features

- **Django Backend**: A robust and scalable web server framework featuring a powerful ORM, migration support, and strong security practices.
- **ReactJS Frontend**: A modern JavaScript library for building dynamic user interfaces.
- **Tailwind CSS**: A utility-first CSS framework packed with flexible classes to compose and create any design, directly in your markup.
- **Vite**: A next-generation frontend tool that provides a fast and efficient development experience.
- **PostgreSQL**: An advanced, open-source relational database for handling application data.

## Prerequisites

Ensure you have the following prerequisites installed before starting:

- **Node.js**: Version 14.x or higher
- **Python**: Version 3.8 or higher
- **Django**: Version 3.1 or higher
- **PostgreSQL**: Version 12.0 or higher

## Quick Start

To create a new project using the Desmy framework, run the command below:

```bash
npx create-desmy-app <projectname>
```

After creating the project, update your PostgreSQL database connection settings in the configuration file as shown:

```json
{
    "DEBUG": true,
    "DB_NAME": "",
    "DB_USER": "",
    "DB_PASS": ""
}
```

This configuration will allow you to connect your Django backend to your PostgreSQL database, providing a fully functional development environment.

## Contributing

Contributions are welcome! If you'd like to contribute to the Desmy framework, please fork the repository and create a pull request with your changes.

## License

Desmy is released under the MIT License.
