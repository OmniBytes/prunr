import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "Prunr, software to execute your scripts.";
const defaultOGURL = "https://prunr.io";
const defaultTwitter = "@Omnibytes";
const defaultOGImage = "";

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>{props.title || ""}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="icon"
      sizes="192x192"
      href={`${process.env.ASSET_PREFIX}/static/touch-icon.png`}
    />
    <link
      rel="apple-touch-icon"
      href={`${process.env.ASSET_PREFIX}/static/touch-icon.png`}
    />
    <link
      rel="mask-icon"
      href={`${process.env.ASSET_PREFIX}/static/favicon-mask.svg`}
      color="#49B882"
    />
    <link rel="icon" href={`${process.env.ASSET_PREFIX}/static/favicon.ico`} />
    <link
      rel="stylesheet"
      type="text/css"
      href={`${process.env.ASSET_PREFIX}/static/style.css`}
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
      integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h"
      crossOrigin="anonymous"
    />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={props.url || defaultOGURL} />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:site" content={defaultTwitter} />
    <link href="https://twitter.com/omnibytes" rel="publisher" />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <script src={`${process.env.ASSET_PREFIX}/static/app.js`} />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
