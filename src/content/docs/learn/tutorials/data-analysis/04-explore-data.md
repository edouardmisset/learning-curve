---
date: 2025-10-02
title: 'Explore Data'
description: 'Techniques for exploratory data analysis (EDA).'
tags: ['data-analysis', 'exploratory-data-analysis', 'guide']
prev:
  link: /learning-curve/learn/tutorials/data-analysis/03-data-cleaning
  label: Data Cleaning
next:
  link: /learning-curve/learn/tutorials/data-analysis/05-analyze-data
  label: Data Analysis
---

Exploring data, also known as Exploratory Data Analysis (**EDA**), is a step in the
data analysis process where you use statistical methods to understand your data.
The goal is to find relationships between variables, identify outliers, or
extract important variables.

Here are some common techniques for data exploration:

## 1. Descriptive Statistics

This includes calculating the mean, median, mode, minimum, maximum, range, and standard deviation of your data.

```ts
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let mean = data.reduce((sum, value) => sum + value, 0) / data.length
let min = Math.min(...data)
let max = Math.max(...data)
```

## 2. Distribution of Data

Understanding the distribution of your data can be very useful. This can be done by creating histograms or box plots. Use a library to create these visualizations.

## 3. Correlation Between Variables

If your data has multiple variables, you might want to find if there's a correlation between them. This can be done using the Pearson correlation coefficient.

```ts
const data = [
  { x: 1, y: 2 },
  { x: 2, y: 4 },
  { x: 3, y: 6 },
]

let meanX = data.reduce((sum, value) => sum + value.x, 0) / data.length;
let meanY = data.reduce((sum, value) => sum + value.y, 0) / data.length;

let correlation = data.reduce((sum, value) => sum + (value.x - meanX) _ (value.y - meanY), 0)
/ Math.sqrt(data.reduce((sum, value) => sum + Math.pow(value.x - meanX, 2), 0)
_ data.reduce((sum, value) => sum + Math.pow(value.y - meanY, 2), 0));
```
