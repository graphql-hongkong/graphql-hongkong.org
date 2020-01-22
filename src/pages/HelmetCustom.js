import React from "react";
import { Helmet } from "react-helmet";

export default function HelmetCustom() {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@GraphQLHongKong" />
      <meta name="twitter:title" content="GraphQL Hong Kong Meetup" />
      <meta
        name="twitter:description"
        content="A meetup & conference by-for the GraphQL community"
      />
      <meta
        name="twitter:image"
        content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site" content="@GraphQLHongKong" />
      <meta property="og:title" content="GraphQL Hong Kong Meetup" />
      <meta
        property="og:description"
        content="A meetup & conference by-for the GraphQL community"
      />
      <meta
        property="og:image"
        content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"
      />
      <meta
        property="og:image:url"
        content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"
      />
      <meta
        name="description"
        content="A meetup & conference by-for the GraphQL community"
      />
      <meta
        name="keywords"
        content="GraphQL,meetup,Asia,HongKong,GraphQLHongKong"
      />
      <meta property="og:url" content="https://graphql-hongkong.org/" />
    </Helmet>
  );
}
