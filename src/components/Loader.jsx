import React from "react";
import Image from "next/image";

function Loader() {
  return (
    <main>
      <Image src="/loader.gif" alt="loading..." className="loader" />
    </main>
  );
}

export default Loader;
