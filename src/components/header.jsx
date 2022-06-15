import React from "react";
import CartLink from "./sub-components/cart-link";
import Countries from "./sub-components/countries-dropdown";
import Currency from "./sub-components/currency-dropdown";
import ProfileLink from "./sub-components/profile-link";
import SearchLink from "./sub-components/search-link";
const Header = () => {
  return (
    <>
      <header className="py-3 border-b-2 md:flex">
        <section className="bg-red-00 md:w-1/3 flex justify-center md:justify-end ">
          <Countries />
          <Currency />
        </section>
        <section className="bg-yellow-00 md:w-2/3 md:flex justify-center">
          <ProfileLink />
          <CartLink totalItems={0} totalPrice={0} />
          <SearchLink />
        </section>
      </header>
      <section className="bg-yellow-00 text-red-500 text-4xl h-20 flex items-center justify-center tracking-widest">
        SOLD
      </section>
    </>
  );
};

export default Header;
