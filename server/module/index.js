const { ApolloServer, gql } = require("apollo-server-fastify");

const typeDefs = gql`
  type Dessert {
    Id: ID!
    Name: String!
    Calories: Int!
    Fat: Int!
    Carbs: Int!
    Protein: Int!
  }

  type Query {
    Desserts: [Dessert]
  }

  type Mutation {
    AddDessert(
      Name: String!
      Calories: Int!
      Fat: Int!
      Carbs: Int!
      Protein: Int!
    ): Dessert
  }
`;

const desserts = [
  {
    Id: 0,
    Name: "Oreo",
    Calories: 437,
    Fat: 18,
    Carbs: 63,
    Protein: 4,
  },
  {
    Id: 1,
    Name: "Nougat",
    Calories: 308,
    Fat: 19,
    Carbs: 9,
    Protein: 37,
  },
  {
    Id: 2,
    Name: "Marshmellow",
    Calories: 318,
    Fat: 3,
    Carbs: 81,
    Protein: 2,
  },
  {
    Id: 3,
    Name: "Lollipop",
    Calories: 398,
    Fat: 2,
    Carbs: 98,
    Protein: 0,
  },
  {
    Id: 4,
    Name: "KitKat",
    Calories: 518,
    Fat: 26,
    Carbs: 65,
    Protein: 60,
  },
];

const resolvers = {
  Query: {
    Desserts: () => desserts,
  },
  Mutation: {
    AddDessert: async (_, { Name, Calories, Fat, Carbs, Protein }) => {
      const newDessert = {
        Id: desserts.length++,
        Name,
        Calories,
        Fat,
        Carbs,
        Protein,
      };
      desserts.push(newDessert);
      return newDessert;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
