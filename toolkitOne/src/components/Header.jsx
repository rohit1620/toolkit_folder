import React from "react";

export default function Header({ cartCount }) {
  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>MyShop</div>

      <div style={styles.middle}>
        <h3>Home</h3>
        <h3>Product</h3>
      </div>

      {/* Right Section */}
      <div style={styles.right}>
        {/* Cart */}
        <div style={styles.cartBox}>
          <span style={styles.cartIcon}>🛒</span>

          {/* Cart Badge */}
          {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
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
