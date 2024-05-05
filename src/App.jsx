import { useEffect, useState } from "react";
import "./App.css";
import JobCard from "./components/card/JobCard";
import { getSearchJObApi } from "./lib/search-job-api";
import { CircularProgress, Container, Grid } from "@mui/material";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  console.log(hasMore, loading);
  useEffect(() => {
    setLoading(true);
    getSearchJObApi(page).then((newItems) => {
      // eslint-disable-next-line no-unsafe-optional-chaining
      setItems((prevItems) => [...prevItems, ...newItems?.jdList]);
      setHasMore(items.length <= newItems?.totalCount); // Update hasMore based on whether there's more data
      setLoading(false);
    });
  }, [page]);

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.scrollY;

    // Calculate the threshold for triggering the page change (70%)
    const threshold = docHeight * 0.9;

    if (windowBottom >= threshold && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={5}
        gridTemplateColumns="repeat(8, 1fr)"
        gap={5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{margin:"10px 0px"}}
      >
        {items.map((item) => (
          <Grid key={item?.jdUid} gridColumn="span 4">
            <JobCard item={item} />
          </Grid>
        ))}
      </Grid>
      {loading && (
        <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
          <CircularProgress />
        </div>
      )}
      {!hasMore && <div>No more items</div>}
    </Container>
  );
}

export default App;
