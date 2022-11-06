import docsearch from "@docsearch/js";

var searchPlaceholder = document.getElementById("search-placeholder");

if (searchPlaceholder !== null) {
  searchPlaceholder.className = "d-none";
}

docsearch({
  container: "#docsearch",
  appId: "5NFMVAD9EV",
  indexName: "keebSupply",
  apiKey: "6f17589d4e0b1ed4518501c4a037239b",
  debug: false,
});
