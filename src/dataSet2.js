import casual from "casual-browserify";

const getHeadings = () => ["Jun", "Jul", "Aug", "Sep"]

const getLabels = () => ["2015", "2016", "2017", "2018", "2019"]

const getValues = () => [
  [7, 5, 6, 8],   // the years and rainy days by month
  [7, 5, 5, 7],
  [7, 4, 5, 9],
  [6, 5, 7, 8],
  [8, 6, 6, 8],
]

export { getHeadings, getLabels, getValues }