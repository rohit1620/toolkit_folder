import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  const value = useSelector((state) => state.cart.items);
  console.log(value.length);

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>MyShop</div>

      <div style={styles.middle}>
        <Link to="/" style={{ color: "yellow", listStyle: "none" }}>
          <h3>Home</h3>
        </Link>
        <Link to="/product" style={{ color: "yellow", listStyle: "none" }}>
          <h3>Product</h3>
        </Link>
      </div>

      {/* Right Section */}
      <div style={styles.right}>
        {/* Cart */}
        <div style={styles.cartBox}>
          <Link to="/cart" style={{ color: "yellow", listStyle: "none" }}>
            <span style={styles.cartIcon}>
              🛒{value.length > 0 ? value.length : 0}
            </span>
          </Link>

          {/* Cart Badge */}
          {cartCount >= 0 && <span style={styles.badge}>{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}

/* Inline CSS Styles (simple & clean) */
const styles = {
  header: {
    width: "100%",

    height: "60px",
    background: "#111",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // padding: "0px 90px",
    position: "fixed",
    top: "0px",
  },
  middle: {
    display: "flex",
    gap: "30px",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  cartBox: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    fontSize: "28px",
    // backgroundColor: "yellow",
    color: "yellow",
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "red",
    color: "white",
    padding: "2px 6px",
    borderRadius: "50%",
    fontSize: "12px",
  },
};
