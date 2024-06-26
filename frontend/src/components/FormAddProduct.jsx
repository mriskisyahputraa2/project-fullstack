import React from "react";

const FormAddProduct = () => {
  return (
    <div>
      <h1 className="title  has-text-dark">Products</h1>
      <h2 className="subtitle  has-text-dark">Add New Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <div className="field">
                <label className="label">Product Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Price" />
                </div>
              </div>
              <div className="field mt-5">
                <div className="control">
                  <button className="button is-success is-fullwidth">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
