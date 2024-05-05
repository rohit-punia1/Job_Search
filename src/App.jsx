import { useEffect, useState } from "react";
import "./App.css";
import JobCard from "./components/card/JobCard";
import { getSearchJObApi } from "./lib/search-job-api";
import { Grid } from "@mui/material";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    getSearchJObApi(page).then((newItems) => {
      // eslint-disable-next-line no-unsafe-optional-chaining
      setItems((prevItems) => [...prevItems, ...newItems?.jdList]);
      setHasMore(items.length <= newItems?.totalCount); // Update hasMore based on whether there's more data
      setLoading(false);
    });
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <Grid
        container
        spacing={5}
        columns={{ xs: 4, sm: 8, md: 12 }}
        
        
      >
        {items.map((item) => (
          <Grid key={item?.id} item xs={4}>
            <JobCard item={item} />
          </Grid>
        ))}
      </Grid>
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more items</div>}
    </div>
  );
}

export default App;
