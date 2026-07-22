---
date: 2025-10-02
title: 'Data Analysis Techniques'
description: 'Overview of statistical and machine learning techniques for data analysis.'
tags: ['data-analysis', 'statistical-analysis', 'machine-learning', 'guide']
prev:
  link: /learning-curve/learn/tutorials/data-analysis/04-explore-data
  label: Explore Data
next:
  link: /learning-curve/learn/tutorials/data-analysis/06-interpretation
  label: Interpretation
---

## Statistical Analysis

Statistical analysis could involve running a t-test to compare the means of two
groups, or running a regression to predict a continuous variable. Here's a
simple example of a t-test:

```ts
const group1 = [1, 2, 3, 4, 5]
const group2 = [6, 7, 8, 9, 10]

const mean1 = group1.reduce((sum, value) => sum + value, 0) / group1.length
const mean2 = group2.reduce((sum, value) => sum + value, 0) / group2.length

const var1 =
  group1.reduce((sum, value) => sum + Math.pow(value - mean1, 2), 0) /
  (group1.length - 1)
const var2 =
  group2.reduce((sum, value) => sum + Math.pow(value - mean2, 2), 0) /
  (group2.length - 1)

const t =
  (mean1 - mean2) / Math.sqrt(var1 / group1.length + var2 / group2.length)
```

### Statistical measures

- **Mean (Average)**: The sum of all the data divided by the number of data
  points. It gives the central tendency of the data.

- **Median**: The middle value in the dataset when it's sorted in ascending or
  descending order. If there's an even number of observations, the median is the
  average of the two middle numbers.

- **Mode**: The most frequently occurring value in the dataset.

- **Range**: The difference between the maximum and minimum values in the dataset.
  It gives an idea of the spread of the data.

- **Variance**: The average of the squared differences from the mean. It measures
  how far each number in the set is from the mean and thus from every other number
  in the set.

- **Standard Deviation**: The square root of the variance. It measures the amount
  of variation or dispersion in the dataset.

- **Percentiles**: Percentiles divide the dataset into 100 equal parts. They can
  give a better understanding of the distribution of the data.

- **Quartiles**: Quartiles divide the dataset into four equal parts. The first
  quartile (Q1) is the 25th percentile, the second quartile (Q2) is the median or
  50th percentile, and the third quartile (Q3) is the 75th percentile.

- **Correlation Coefficient**: A measure that determines the degree to which two
  variables' movements are associated.

- **Regression Analysis**: A set of statistical processes for estimating the
  relationships among variables.

These measures provide a comprehensive understanding of the dataset and are
fundamental to many statistical analyses.

## Machine Learning

Machine learning could involve training a machine learning model to make
predictions. This is more complex and typically requires a machine learning
library, but here's a simple example of a linear regression:

```ts
const data = [
  { x: 1, y: 2 },
  { x: 2, y: 4 },
  { x: 3, y: 6 },
]

const meanX = data.reduce((sum, value) => sum + value.x, 0) / data.length
const meanY = data.reduce((sum, value) => sum + value.y, 0) / data.length

const slope =
  data.reduce((sum, value) => sum + (value.x - meanX) * (value.y - meanY), 0) /
  data.reduce((sum, value) => sum + Math.pow(value.x - meanX, 2), 0)

const intercept = meanY - slope * meanX

// Now you can make predictions
const prediction = slope * 4 + intercept // x = 4
```
