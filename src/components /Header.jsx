import { NavLink } from "react-router-dom";

const Header = ({ setSearchQuery }) => (
  <nav className="navbar navbar-expand-lg bg-light text-secondary">
    <div className="container">
      <NavLink to="/">
        <img
          src="data:image/png;base64,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"
          alt="Company Logo"
          style={{
            height: "80px",
            width: "auto",
          }}
        />
      </NavLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <form className="d-flex ms-auto">
          <input
            className="form-control"
            type="search"
            placeholder="Search by titles and t..."
            aria-label="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
           />
        </form>
      </div>
   
    </div>
    
  </nav>
);
export default Header;
