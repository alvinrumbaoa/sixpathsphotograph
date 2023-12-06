// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  headers: {
    apiKey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
