---
date: 2025-10-02
title: 'Data Gathering'
description: 'Methods and examples for collecting data for analysis.'
tags: ['data-analysis', 'data-gathering', 'guide']
prev:
  link: /learning-curve/learn/tutorials/data-analysis/01-definition
  label: Define Your Question
next:
  link: /learning-curve/learn/tutorials/data-analysis/03-data-cleaning
  label: Data Cleaning
---

This is the step where you collect the data you need for your analysis. This can
involve several different methods, depending on what kind of data you're looking
for. Here are a few examples:

## 1. Downloading Existing Datasets

There are many sources online where you can download existing datasets for free.
These can be great resources if you're just starting out or if you're looking
for data on a specific topic. For example, websites like Kaggle, UCI Machine
Learning Repository, and government websites provide datasets on a wide range of
topics.

## 2. Web Scraping

If the data you need isn't available in an existing dataset, you might need to
collect it yourself. One common method for this is web scraping, which involves
writing a program to extract data from websites. In JavaScript, you can use
libraries like axios for making HTTP requests and cheerio for parsing HTML.

Here's an example of how you might scrape data from a website with axios and
cheerio:

```ts
import axios from 'axios'
import cheerio from 'cheerio'

// Make a request to the website
const res = await axios.get('https://example.com')

// Parse the HTML response with cheerio
const $ = cheerio.load(res.data)

// Extract the data you need
const data = []
$('your_selector').each((index, element) => {
  data.push($(element).text())
})
```

## 3. APIs

Many websites and services provide APIs (Application Programming Interfaces) that you can use to access their data. This is often a more reliable and efficient way to gather data than web scraping. In JavaScript, you can use the fetch API or libraries like axios to make API requests.

Here's an example of how you might gather data from an API with axios:

```ts
import axios from 'axios'

// Make a request to the API
let res = await axios.get('https://api.example.com/your_endpoint')

// The data is usually in the response's data property
let data = res.data
```

Remember, when gathering data, it's important to respect the terms of service of
the website or API you're using, and to collect and handle the data in a way
that respects user privacy.
