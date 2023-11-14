import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="flex justify-between mt-5">
        <img
          src="/images/logo-primary.svg"
          width="127px"
          height="35px"
          alt="logo"
        />

        <div className="flex gap-[10px]">
          <button
            className="btn-outline-primary rounded"
            onClick={() => router.push("/login")}
          >
            Masuk
          </button>
          <button
            className="btn-primary rounded"
            onClick={() => router.push("/register")}
          >
            Daftar
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
