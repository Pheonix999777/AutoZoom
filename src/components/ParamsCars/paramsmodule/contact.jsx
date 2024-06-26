import { Box } from "@mui/material"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <Box sx={{ display: "flex", gap: "15px",width:"100%",justifyContent:"center",padding:"45px 0" }}>
    <Link
      className="bg-icons"
      style={{ backgroundColor: "#5aec5a" }}
      to={""}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"></path>
      </svg>
    </Link>
    <Link
      className="bg-icons"
      style={{ backgroundColor: "#2374f8" }}
      to={""}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
      </svg>
    </Link>
    <Link
      className="bg-icons"
      style={{ backgroundColor: "#ffb630" }}
      to={""}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M262.2 37c37.4 51.6 82.002 118.197 133.602 199.598 13 22 11 48.4-5.8 79.4-6.4 13-22.6 42.6-48.4 89.2 28.4 40 71.6 89.2 129.8 147.2s106.602 101.4 145.2 129.8c46.401-27.2 76.201-43.8 89.201-50.399 16.8-9 33-13.6 48.4-13.6 11.6 0 22 2.6 31 7.8 59.4 36.2 126.601 80.8 201.4 133.6 14.2 10.4 22.2 24.601 24.2 42.601 2 18.2-3.599 37.4-16.399 58.2-6.4 9-16.8 22.2-31 39.8-14.201 17.4-35.601 39.4-64.002 65.8s-51.6 39.802-69.8 39.802h-2c-136.6-5.4-305-107.801-504.4-307.201-199.6-199.6-302-367.8-307.2-504.6 0-18 13.2-41.6 39.8-70.8 26.4-29 48.2-50 64.799-63 16.8-12.8 31-23.2 42.6-31 14.2-10.4 30.4-15.4 48.4-15.4 22.2 0 38.8 7.8 50.6 23.2zm-63.998 40.598c-27.2 19.4-52.603 41.198-76.603 64.998-23.8 24-37.8 41.6-41.6 53.2 5.2 120.2 101 273.2 287.6 459.2 186.6 186 340 282.2 460 288.6 10.4-3.8 27.4-18 51.4-42.6s45.6-50.399 64.8-77.399c3.8-5.2 5.2-9.6 3.8-13.6-77.4-54.2-142-97.4-193.8-129.801-5.2 0-11.6 2-19.4 5.8-11.6 6.4-40.6 22.6-87.2 48.4l-33 19.4-33-21.4c-42.6-29.6-94.199-75.6-154.999-137.6-60.6-60.6-105.8-112.4-135.6-155l-23.2-31 19.4-34.799c25.8-46.4 42-75.6 48.4-87.2 3.8-7.8 5.8-14.2 5.8-19.4-46-73.401-88.599-138-127.398-193.6h-2c-5 0-9.6 1.4-13.4 3.8z"></path>
      </svg>
    </Link>
  </Box>
  
  )
}

export default Contact