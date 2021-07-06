import { useState, useEffect } from "react";

const LoadingTitle = () => {
  const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerHTML = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("DH Web"), 3000);
  return null;
};

export default LoadingTitle;
