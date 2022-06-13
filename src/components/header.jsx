import React from "react";
import CartLink from "./sub-components/cart-link";
import Countries from "./sub-components/countries-dropdown";
import Currency from "./sub-components/currency-dropdown";
import ProfileLink from "./sub-components/profile-link";
import SearchLink from "./sub-components/search-link";
const Header = () => {
  return (
    <header className="py-3 border-b-2 flex">
      <section className="bg-red-00 w-1/3 flex justify-end ">
        <Countries />
        <Currency />
      </section>
      <section className="bg-yellow-00 w-2/3 flex justify-center">
        <ProfileLink />
        <CartLink totalItems={0} totalPrice={0} />
        <SearchLink />
      </section>
    </header>
  );
};

export default Header;
