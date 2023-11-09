# Recipe Sharing App

This README provides comprehensive information for setting up and running the Recipe Sharing App, a full-stack application built with Ruby on Rails for the back-end and React for the front-end.

## Description

The Recipe Sharing App allows users to create, share, and explore recipes. It integrates a Ruby on Rails API to handle the back-end logic and React for the interactive front-end. The back end follows RESTful routing conventions and employs Active Record for database interactions. The React front end uses various features, such as state management, routing, and context to create a seamless user experience.

<!-- ![Alt Text]() -->

All information and images used in the app have been created by me, generated randomly or sourced from [image sites.](https://unsplash.com/)

## Prerequisites

Before you begin, make sure your development environment meets the following requirements:

- Ruby (version specified in the `Gemfile`)
- RubyGems
- Node.js
- Yarn
- PostgreSQL (for database support)
- Git

## Installation and Setup

Follow these steps to install and set up the Recipe Sharing App:

1. Clone the repository into your local computer:

```bash
git clone <repository_url>
cd <repository_directory>
```

2. Install the React app dependencies:

```sh
npm install --prefix client
```

3. Start the React app Development server:

```sh
npm start --prefix client
```

This will start the development server and open the app in your default web browser at [localhost:3000](http://localhost:3000). 4. Install the Ruby on Rails back-end dependencies:

```sh
bundle install
```

5. Create and seed the database:

```bash
rails db:create db:seed
```

Feel free to add your own seed data.

6. Start the Ruby on Rails server:

```bash
rails s
```

The application should now be up and running with the React front end and Ruby on Rails back end.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notable Dependencies

- Ruby (specified in the Gemfile)
- BCrypt (for user authentication)
- PostgreSQL (as the database)
- Active Model Serializers (for serializing data)
- Tailwind CSS
- React (for the front-end UI)
- React Router Dom (for client-side routing)

## Usage

The Recipe Sharing app allows user to:

- Create and manage recipes.
- Share their recipes with the community.
- Explore and search for recipes.
- Interact with other users' recipes.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started), In addition to the [Ruby on Rails documentation] (https://guides.rubyonrails.org/)

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Ruby on Rails, check out the [Rails documentation](https://rubyonrails.org/)

### `npm run build --prefix client` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

```

```
