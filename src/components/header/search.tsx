import { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "../../utils/debounce";
import useTaskStore from "../../store/task";

const LiveSearch: React.FC = () => {
  const { searchTask } = useTaskStore();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    if (debouncedQuery) {
      searchTask(debouncedQuery);
    }
  }, [debouncedQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setQuery(event.target.value);

  const handleClear = (): void => {
    setQuery("");
    searchTask("");
  };

  return (
    <Input
      placeholder="search"
      className="search-input"
      prefix={<SearchOutlined />}
      value={query}
      allowClear
      onClear={handleClear}
      onChange={handleSearch}
    />
  );
};

export default LiveSearch;
