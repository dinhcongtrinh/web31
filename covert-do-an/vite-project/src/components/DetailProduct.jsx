import React from 'react'
import './DetailProduct.css'
import './Header.css'
import './Main.css'
import './Footer.css'

export default function DetailProduct() {
  return (
    <div><>
    <div id="hideContent" className="" />
    <section className="navbar-left-box">
      <div id="hideContent" className="" />
      <div id="navbar-active" className="navbar-left">
        <div className="visual">
          <a
            id="btn-login"
            type="button"
            href="#"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="avatar-box">
              <div className="avatar-icon">
                <span>
                  <i className="fas fa-user-circle" />
                </span>
              </div>
              <div className="avatar-content">
                <div>Đăng nhập</div>
                <div className="avatar-content-adver">Nhận thêm ưu đãi</div>
              </div>
            </div>
          </a>
        </div>
        <div className="navbar-left-content">
          <div className="navbar-left-item">
            <a href="index.html" className="active-nav">
              <span>
                <i className="fas fa-home" />
              </span>
              Trang chủ
            </a>
          </div>
          <div>
            <div className="navbar-left-item">
              <a type="button" className="" href="#" id="btnDropdownMenuProduct">
                <span>
                  <i className="fas fa-list" />
                </span>
                Sản Phẩm
                <span className="btn-dropdown">
                  <i className="fas fa-angle-down" />
                </span>
              </a>
            </div>
            <div id="dropdownMenuProduct" className="dropdown-menu-product">
              <a href="caphe.html">Cà Phê</a>img/detailProduct/pl139__2_.jpg
              <a href="douong.html">Đồ Uống</a>
              <a href="Theeat.html">Đồ Ăn</a>
              <a href="Express.html">Xuất khẩu</a>
            </div>
            <div className="navbar-left-item">
              <a href="blog.html">
                <span>
                  <i className="far fa-newspaper" />
                </span>
                Tin Tức
              </a>
            </div>
            <div className="navbar-left-item">
              <span>
                <i className="fas fa-map" />
              </span>
              <a href="contact.html">Liên Hệ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="login">
      <div
        className="modal fade modal-login"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-login-header">
              <ul
                className="nav-select-action nav nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item nav-modal-custom" role="presentation">
                  <a
                    className="nav-link active "
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Đăng Nhập
                  </a>
                </li>
                <li className="nav-item nav-modal-custom" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Tạo Tài Khoản
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <form className="form-login">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Email / SĐT
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmailLogin"
                          placeholder="Nhập Email hoặc Số điện thoại"
                        />
                        <span
                          id="errorInputEmailLogin"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Mật Khẩu
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordLogin"
                          placeholder="Mật khẩu từ 9 đến 32 ký tự"
                        />
                        <span
                          id="errorInputPassLogin"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      />
                      <div className="col-sm-9">
                        <button
                          type="submit"
                          id="btnSubmitLogin"
                          className="my-2 btn-login btn w-100"
                        >
                          Đăng nhập
                        </button>
                        <div>
                          Quên mật khẩu? Nhấn tại <a href="#"> đây</a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row my-4">
                      <div className="col-sm-3" />
                      <div className="col-sm-9">
                        <button
                          type="button"
                          className="my-2 btn-login-google btn w-100"
                        >
                          Đăng nhập bằng Google++
                        </button>
                        <button
                          type="button"
                          className="my-2 btn-login-facebook btn w-100"
                        >
                          Đăng nhập bằng Facebook
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <form className="form-login">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Họ Tên
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required=""
                          className="form-control"
                          id="inputEmail3"
                          placeholder="Nhập họ tên"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        SĐT
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          required=""
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          required=""
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Nhập email"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Mật Khẩu
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          required=""
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Mật khẩu từ 9 đến 32 ký tự"
                        />
                      </div>
                    </div>
                    <fieldset className="form-group row">
                      <legend className="col-form-label col-sm-3 float-sm-left pt-0">
                        Giới Tính
                      </legend>
                      <div className="col-sm-9">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            name="sex"
                            type="radio"
                            id="inlineCheckbox1"
                            defaultValue="option1"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                          >
                            Nam
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            name="sex"
                            type="radio"
                            id="inlineCheckbox2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            Nữ
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Ngày Sinh
                      </label>
                      <div className="col-sm-3 my-1">
                        <label
                          className="mr-sm-2 sr-only"
                          htmlFor="formSigninSlectDay"
                        >
                          Ngày
                        </label>
                        <select
                          className="custom-select mr-sm-2"
                          id="formSigninSlectDay"
                          required=""
                        >
                          <option selected="">Ngày</option>
                        </select>
                      </div>
                      <div className="col-sm-3 my-1">
                        <label
                          className="mr-sm-2 sr-only"
                          htmlFor="formSigninSlectMonth"
                        >
                          Tháng
                        </label>
                        <select
                          className="custom-select mr-sm-2"
                          id="formSigninSlectMonth"
                          required=""
                        >
                          <option selected="">Tháng</option>
                        </select>
                      </div>
                      <div className="col-sm-3 my-1">
                        <label
                          className="mr-sm-2 sr-only"
                          htmlFor="formSigninSlectYear"
                        >
                          Năm
                        </label>
                        <select
                          className="custom-select mr-sm-2"
                          id="formSigninSlectYear"
                          required=""
                        >
                          <option selected="">Năm</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row my-4">
                      <div className="col-sm-3" />
                      <div className="col-sm-9">
                        <button
                          type="submit"
                          className="my-2 btn-login btn w-100"
                        >
                          Tạo tài khoản
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="" className="search">
      <div id="hideContentSearch" className="" />
      <div className="search-box" id="searchBox">
        <form action="" className="form-seach" id="form-search">
          <input type="text" name="" className="form-input-search" id="" />
          <button type="submit" className="btn-submit-search">
            <span>
              <i className="fas fa-search" />
            </span>
          </button>
          <button type="button" className="btnCancel">
            X
          </button>
        </form>
        <div className="resSearch"></div>
      </div>
    </section>
    <header>
      {/* <div class="header-wellcome">
  
        <div class="text-header">
            <p>Wellcome to Men's Shop !</p>
        </div>
  
    </div> */}
      <div className="" id="navbarFixed">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <button
            id="btn-active-nav"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=""
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="img/logoannhien.jpg" alt="" />
          </a>
          <div className="header-nav-card">
            <button
              className="btn-search"
              id="btnSearchNav"
              type="button"
              style={{ outline: "none" }}
            >
              <span>
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </button>
            <a href="">
              <span>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className="nav-search-box" id="navSearchBox">
            <div className="nav-icon-search">
              <span>
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </div>
            <input
              type="text"
              className="w-100 form-control"
              placeholder="Bạn muốn tìm gì ?"
            />
          </div>
          <div className="collapse navbar-collapse main-menu" id="navbarNav">
            <div className="navbar-nav navbar-menu">
              <div className="nav-item">
                <a href="index.html">Trang chủ</a>
              </div>
              <div className="nav-item dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a href="caphe.html">Cà Phê</a>
                  <a href="douong.html">Đồ Uống</a>
                  <a href="Theeat.html">Đồ Ăn</a>
                  <a href="Express.html">Xuất khẩu</a>
                </div>
              </div>
              <div className="nav-item">
                <a href="blog.html">Tin Tức</a>
              </div>
              <div className="nav-item">
                <a href="contact.html">Liên Hệ</a>
              </div>
            </div>
            <ul className="navbar-nav navbar-icon ml-auto">
              <li className="nav-item">
                <a className="nav-link" type="button" id="btnSearch">
                  <span>
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  type="button"
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <span>
                    <i className="fa fa-user" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="cart.html">
                  <span className="">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">
        <div className="banner-current-page box-element">
          <img src="img/banerhatcf.jpg" alt="" />
          <div className="current-page-box">
            <h3 className="title-banner-page">Sản Phẩm</h3>
            <div className="current-page-box-link">
              <a href="index.html" className="link-previous-page">
                Trang chủ &gt;
              </a>
              <a href="shirt.html" className="link-previous-page">
                Áo &gt;
              </a>
              <span className="current-page"> Áo Sweatshirt S.W.D</span>
            </div>
          </div>
        </div>
        <div className="row detail-product-box box-element">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="detail-product-img">
              <img
                src="img/Robusta-thuong-hang.jpg"
                className="card-img-top"
                alt="..."
                id="mainImage"
              />
            </div>
            <div className="list-img-product">
              <button>
                <img src="img/detailProduct/pl139__2_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__1_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__10_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__9_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__3_.jpg" alt="" />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 detail-product-content">
            <h2 className="detail-product-title">Áo Sweatshirt S.W.D</h2>
            <div className="price">350.000 ₫</div>
            <div className="status-product">
              <span>
                <i className="fas fa-check" /> Còn hàng
              </span>
            </div>
            <form action="">
              <div className="form-cate">
                <label htmlFor="">Kích Cỡ</label>
                <select className="custom-select select-size ">
                  <option value={1}>S</option>
                  <option value={2}>M</option>
                  <option value={3}>L</option>
                  <option value={3}>XL</option>
                </select>
              </div>
              <div className="form-cate">
                <label htmlFor="">Màu Sắc</label>
                <select className="custom-select select-size ">
                  <option value={1}>Đỏ</option>
                  <option value={2}>Trắng</option>
                  <option value={3}>Đen</option>
                  <option value={3}>Hồng</option>
                </select>
              </div>
              <div className="form-cate">
                <label htmlFor="">Số Lượng</label>
                <div className="input-amount-box">
                  <button className="btn-minus" type="button" id="btnMinus">
                    -
                  </button>
                  <input
                    type="text"
                    min={1}
                    defaultValue={1}
                    id="quantityProduct"
                  />
                  <button className="btn-plus" type="button" id="btnPlus">
                    +
                  </button>
                </div>
              </div>
              <button className="btn-add-cart">
                <span>
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                </span>
                THÊM VÀO GIỎ HÀNG
              </button>
            </form>
            <div className="infor-about-product">
              <span>Mô Tả</span>
              <p>
                Một lựa chọn khá chill và ấm áp đến từ áo thun nỉ dày dặn S.W.D
                Higher Quality Garment. Chất liệu vải nỉ da cá mềm mịn, đặc biệt
                không lo bai rão hay xù lông. Logo thuê nổi tinh tế. Form slimfit
                phối bo chun tôn dáng. 8 màu thời thượng, trendy.
              </p>
            </div>
          </div>
        </div>
        <div className="box-element">
          <div className="title-box mb-4">
            <h1>SẢN PHẨM LIÊN QUAN</h1>
          </div>
          <div className="row mb-4 products">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/shirt7.jpg"
                        className="card-img-top img-product"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="sale">
                    <span>Sale !</span>
                  </div>
                  <div className="new">
                    <span>New !</span>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo Jeans MIIX Collective co</h5>
                    </a>
                    <p className="card-text-sale">
                      <strike>700.000 ₫</strike>
                    </p>
                    <p className="card-text">350.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/shirt15.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo polo Dry</h5>
                    </a>
                    <p className="card-text">500.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/shirt6.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo Len Collective co</h5>
                    </a>
                    <p className="card-text">350.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/owen-so-mi.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo sơ mi Owen</h5>
                    </a>
                    <p className="card-text">500.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-btn font-text-2 mb-3">
            <a href="" className=" btn-viewmore">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div className="footer-service">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-6 col-sm-12 footer-service-box">
              <div className="footer-icon-service">
                <span>
                  <i className="fas fa-paper-plane" />
                </span>
              </div>
              <div className="footer-content-serivce">
                <span>FREE SHIPPING</span>
                <span>ĐƠN HÀNG TRÊN 500.000</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-service-box">
              <div className="footer-icon-service">
                <span>
                  <i className="fas fa-sync" />
                </span>
              </div>
              <div className="footer-content-serivce">
                <span>ĐỔI TRẢ</span>
                <span>5 NGÀY ĐỔI TRẢ MIỄN PHÍ</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 footer-service-box">
              <div className="footer-icon-service">
                <span>
                  <i className="far fa-credit-card" />
                </span>
              </div>
              <div className="footer-content-serivce">
                <span>THANH TOÁN</span>
                <span>CHẤP NHẬN TẤT CẢ LOẠI THẺ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-infor">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Men's Shop</h5>
                <p>Cửa hàng thời trang nam mang phong cách mới lạ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Hỗ Trợ Mua Hàng</h5>
                <div className="footer-list-service">
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Hướng dẫn mua hàng
                  </a>
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Hướng dẫn tranh toán
                  </a>
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Phương thức vẫn chuyển
                  </a>
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Tra cứu đơn hàng
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Theo Dõi Chúng Tôi</h5>
                <div className="follow-icon">
                  <a href="">
                    <span style={{ color: "#3B5A9A" }}>
                      <i className="fab fa-facebook-square" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#42C8F4" }}>
                      <i className="fab fa-twitter-square" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#F8BC2E" }}>
                      <i className="fab fa-skype" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#CE3633" }}>
                      <i className="fab fa-google-plus-square" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#040707" }}>
                      <i className="fab fa-behance-square" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Thanh Toán</h5>
                <p>Chúng tôi chấp nhận thanh toán với tất cả loại thẻ</p>
                <div className="atm-icon">
                  <span style={{ color: "#3B5A9A" }}>
                    <i className="fab fa-cc-visa" />
                  </span>
                  <span style={{ color: "#CE3633" }}>
                    <i className="fab fa-cc-mastercard" />
                  </span>
                  <span style={{ color: "#42C8F4" }}>
                    <i className="fab fa-cc-paypal" />
                  </span>
                  <span style={{ color: "#F8BC2E" }}>
                    <i className="fab fa-cc-jcb" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div id="hideContent" className="" />
    <section className="navbar-left-box">
      <div id="hideContent" className="" />
      <div id="navbar-active" className="navbar-left">
        <div className="visual">
          <a
            id="btn-login"
            type="button"
            href="#"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="avatar-box">
              <div className="avatar-icon">
                <span>
                  <i className="fas fa-user-circle" />
                </span>
              </div>
              <div className="avatar-content">
                <div>Đăng nhập</div>
                <div className="avatar-content-adver">Nhận thêm ưu đãi</div>
              </div>
            </div>
          </a>
        </div>
        <div className="navbar-left-content">
          <div className="navbar-left-item">
            <a href="index.html" className="active-nav">
              <span>
                <i className="fas fa-home" />
              </span>
              Trang chủ
            </a>
          </div>
          <div>
            <div className="navbar-left-item">
              <a type="button" className="" href="#" id="btnDropdownMenuProduct">
                <span>
                  <i className="fas fa-list" />
                </span>
                Sản Phẩm
                <span className="btn-dropdown">
                  <i className="fas fa-angle-down" />
                </span>
              </a>
            </div>
            <div id="dropdownMenuProduct" className="dropdown-menu-product">
              <a href="caphe.html">Cà Phê</a>img/detailProduct/pl139__2_.jpg
              <a href="douong.html">Đồ Uống</a>
              <a href="Theeat.html">Đồ Ăn</a>
              <a href="Express.html">Xuất khẩu</a>
            </div>
            <div className="navbar-left-item">
              <a href="blog.html">
                <span>
                  <i className="far fa-newspaper" />
                </span>
                Tin Tức
              </a>
            </div>
            <div className="navbar-left-item">
              <span>
                <i className="fas fa-map" />
              </span>
              <a href="contact.html">Liên Hệ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="login">
      <div
        className="modal fade modal-login"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-login-header">
              <ul
                className="nav-select-action nav nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item nav-modal-custom" role="presentation">
                  <a
                    className="nav-link active "
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Đăng Nhập
                  </a>
                </li>
                <li className="nav-item nav-modal-custom" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Tạo Tài Khoản
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <form className="form-login">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Email / SĐT
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmailLogin"
                          placeholder="Nhập Email hoặc Số điện thoại"
                        />
                        <span
                          id="errorInputEmailLogin"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Mật Khẩu
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordLogin"
                          placeholder="Mật khẩu từ 9 đến 32 ký tự"
                        />
                        <span
                          id="errorInputPassLogin"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      />
                      <div className="col-sm-9">
                        <button
                          type="submit"
                          id="btnSubmitLogin"
                          className="my-2 btn-login btn w-100"
                        >
                          Đăng nhập
                        </button>
                        <div>
                          Quên mật khẩu? Nhấn tại <a href="#"> đây</a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row my-4">
                      <div className="col-sm-3" />
                      <div className="col-sm-9">
                        <button
                          type="button"
                          className="my-2 btn-login-google btn w-100"
                        >
                          Đăng nhập bằng Google++
                        </button>
                        <button
                          type="button"
                          className="my-2 btn-login-facebook btn w-100"
                        >
                          Đăng nhập bằng Facebook
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <form className="form-login">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Họ Tên
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required=""
                          className="form-control"
                          id="inputEmail3"
                          placeholder="Nhập họ tên"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        SĐT
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          required=""
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          required=""
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Nhập email"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Mật Khẩu
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          required=""
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Mật khẩu từ 9 đến 32 ký tự"
                        />
                      </div>
                    </div>
                    <fieldset className="form-group row">
                      <legend className="col-form-label col-sm-3 float-sm-left pt-0">
                        Giới Tính
                      </legend>
                      <div className="col-sm-9">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            name="sex"
                            type="radio"
                            id="inlineCheckbox1"
                            defaultValue="option1"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                          >
                            Nam
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            name="sex"
                            type="radio"
                            id="inlineCheckbox2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            Nữ
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Ngày Sinh
                      </label>
                      <div className="col-sm-3 my-1">
                        <label
                          className="mr-sm-2 sr-only"
                          htmlFor="formSigninSlectDay"
                        >
                          Ngày
                        </label>
                        <select
                          className="custom-select mr-sm-2"
                          id="formSigninSlectDay"
                          required=""
                        >
                          <option selected="">Ngày</option>
                        </select>
                      </div>
                      <div className="col-sm-3 my-1">
                        <label
                          className="mr-sm-2 sr-only"
                          htmlFor="formSigninSlectMonth"
                        >
                          Tháng
                        </label>
                        <select
                          className="custom-select mr-sm-2"
                          id="formSigninSlectMonth"
                          required=""
                        >
                          <option selected="">Tháng</option>
                        </select>
                      </div>
                      <div className="col-sm-3 my-1">
                        <label
                          className="mr-sm-2 sr-only"
                          htmlFor="formSigninSlectYear"
                        >
                          Năm
                        </label>
                        <select
                          className="custom-select mr-sm-2"
                          id="formSigninSlectYear"
                          required=""
                        >
                          <option selected="">Năm</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row my-4">
                      <div className="col-sm-3" />
                      <div className="col-sm-9">
                        <button
                          type="submit"
                          className="my-2 btn-login btn w-100"
                        >
                          Tạo tài khoản
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="" className="search">
      <div id="hideContentSearch" className="" />
      <div className="search-box" id="searchBox">
        <form action="" className="form-seach" id="form-search">
          <input type="text" name="" className="form-input-search" id="" />
          <button type="submit" className="btn-submit-search">
            <span>
              <i className="fas fa-search" />
            </span>
          </button>
          <button type="button" className="btnCancel">
            X
          </button>
        </form>
        <div className="resSearch"></div>
      </div>
    </section>
    <header>
      {/* <div class="header-wellcome">
  
        <div class="text-header">
            <p>Wellcome to Men's Shop !</p>
        </div>
  
    </div> */}
      <div className="" id="navbarFixed">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <button
            id="btn-active-nav"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=""
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="img/logoannhien.jpg" alt="" />
          </a>
          <div className="header-nav-card">
            <button
              className="btn-search"
              id="btnSearchNav"
              type="button"
              style={{ outline: "none" }}
            >
              <span>
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </button>
            <a href="">
              <span>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className="nav-search-box" id="navSearchBox">
            <div className="nav-icon-search">
              <span>
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </div>
            <input
              type="text"
              className="w-100 form-control"
              placeholder="Bạn muốn tìm gì ?"
            />
          </div>
          <div className="collapse navbar-collapse main-menu" id="navbarNav">
            <div className="navbar-nav navbar-menu">
              <div className="nav-item">
                <a href="index.html">Trang chủ</a>
              </div>
              <div className="nav-item dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a href="caphe.html">Cà Phê</a>
                  <a href="douong.html">Đồ Uống</a>
                  <a href="Theeat.html">Đồ Ăn</a>
                  <a href="Express.html">Xuất khẩu</a>
                </div>
              </div>
              <div className="nav-item">
                <a href="blog.html">Tin Tức</a>
              </div>
              <div className="nav-item">
                <a href="contact.html">Liên Hệ</a>
              </div>
            </div>
            <ul className="navbar-nav navbar-icon ml-auto">
              <li className="nav-item">
                <a className="nav-link" type="button" id="btnSearch">
                  <span>
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  type="button"
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <span>
                    <i className="fa fa-user" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="cart.html">
                  <span className="">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">
        <div className="banner-current-page box-element">
          <img src="img/banerhatcf.jpg" alt="" />
          <div className="current-page-box">
            <h3 className="title-banner-page">Sản Phẩm</h3>
            <div className="current-page-box-link">
              <a href="index.html" className="link-previous-page">
                Trang chủ &gt;
              </a>
              <a href="shirt.html" className="link-previous-page">
                Áo &gt;
              </a>
              <span className="current-page"> Áo Sweatshirt S.W.D</span>
            </div>
          </div>
        </div>
        <div className="row detail-product-box box-element">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="detail-product-img">
              <img
                src="img/Robusta-thuong-hang.jpg"
                className="card-img-top"
                alt="..."
                id="mainImage"
              />
            </div>
            <div className="list-img-product">
              <button>
                <img src="img/detailProduct/pl139__2_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__1_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__10_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__9_.jpg" alt="" />
              </button>
              <button>
                <img src="img/detailProduct/pl139__3_.jpg" alt="" />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 detail-product-content">
            <h2 className="detail-product-title">Áo Sweatshirt S.W.D</h2>
            <div className="price">350.000 ₫</div>
            <div className="status-product">
              <span>
                <i className="fas fa-check" /> Còn hàng
              </span>
            </div>
            <form action="">
              <div className="form-cate">
                <label htmlFor="">Kích Cỡ</label>
                <select className="custom-select select-size ">
                  <option value={1}>S</option>
                  <option value={2}>M</option>
                  <option value={3}>L</option>
                  <option value={3}>XL</option>
                </select>
              </div>
              <div className="form-cate">
                <label htmlFor="">Màu Sắc</label>
                <select className="custom-select select-size ">
                  <option value={1}>Đỏ</option>
                  <option value={2}>Trắng</option>
                  <option value={3}>Đen</option>
                  <option value={3}>Hồng</option>
                </select>
              </div>
              <div className="form-cate">
                <label htmlFor="">Số Lượng</label>
                <div className="input-amount-box">
                  <button className="btn-minus" type="button" id="btnMinus">
                    -
                  </button>
                  <input
                    type="text"
                    min={1}
                    defaultValue={1}
                    id="quantityProduct"
                  />
                  <button className="btn-plus" type="button" id="btnPlus">
                    +
                  </button>
                </div>
              </div>
              <button className="btn-add-cart">
                <span>
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                </span>
                THÊM VÀO GIỎ HÀNG
              </button>
            </form>
            <div className="infor-about-product">
              <span>Mô Tả</span>
              <p>
                Một lựa chọn khá chill và ấm áp đến từ áo thun nỉ dày dặn S.W.D
                Higher Quality Garment. Chất liệu vải nỉ da cá mềm mịn, đặc biệt
                không lo bai rão hay xù lông. Logo thuê nổi tinh tế. Form slimfit
                phối bo chun tôn dáng. 8 màu thời thượng, trendy.
              </p>
            </div>
          </div>
        </div>
        <div className="box-element">
          <div className="title-box mb-4">
            <h1>SẢN PHẨM LIÊN QUAN</h1>
          </div>
          <div className="row mb-4 products">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/shirt7.jpg"
                        className="card-img-top img-product"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="sale">
                    <span>Sale !</span>
                  </div>
                  <div className="new">
                    <span>New !</span>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo Jeans MIIX Collective co</h5>
                    </a>
                    <p className="card-text-sale">
                      <strike>700.000 ₫</strike>
                    </p>
                    <p className="card-text">350.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/shirt15.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo polo Dry</h5>
                    </a>
                    <p className="card-text">500.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/shirt6.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo Len Collective co</h5>
                    </a>
                    <p className="card-text">350.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/shirt/owen-so-mi.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="">
                      <h5 className="card-title">Áo sơ mi Owen</h5>
                    </a>
                    <p className="card-text">500.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-btn font-text-2 mb-3">
            <a href="" className=" btn-viewmore">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div className="footer-service">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-6 col-sm-12 footer-service-box">
              <div className="footer-icon-service">
                <span>
                  <i className="fas fa-paper-plane" />
                </span>
              </div>
              <div className="footer-content-serivce">
                <span>FREE SHIPPING</span>
                <span>ĐƠN HÀNG TRÊN 500.000</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-service-box">
              <div className="footer-icon-service">
                <span>
                  <i className="fas fa-sync" />
                </span>
              </div>
              <div className="footer-content-serivce">
                <span>ĐỔI TRẢ</span>
                <span>5 NGÀY ĐỔI TRẢ MIỄN PHÍ</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 footer-service-box">
              <div className="footer-icon-service">
                <span>
                  <i className="far fa-credit-card" />
                </span>
              </div>
              <div className="footer-content-serivce">
                <span>THANH TOÁN</span>
                <span>CHẤP NHẬN TẤT CẢ LOẠI THẺ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-infor">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Men's Shop</h5>
                <p>Cửa hàng thời trang nam mang phong cách mới lạ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Hỗ Trợ Mua Hàng</h5>
                <div className="footer-list-service">
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Hướng dẫn mua hàng
                  </a>
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Hướng dẫn tranh toán
                  </a>
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Phương thức vẫn chuyển
                  </a>
                  <a href="">
                    <span>
                      <i className="fas fa-angle-right" />
                    </span>{" "}
                    Tra cứu đơn hàng
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Theo Dõi Chúng Tôi</h5>
                <div className="follow-icon">
                  <a href="">
                    <span style={{ color: "#3B5A9A" }}>
                      <i className="fab fa-facebook-square" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#42C8F4" }}>
                      <i className="fab fa-twitter-square" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#F8BC2E" }}>
                      <i className="fab fa-skype" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#CE3633" }}>
                      <i className="fab fa-google-plus-square" />
                    </span>
                  </a>
                  <a href="">
                    <span style={{ color: "#040707" }}>
                      <i className="fab fa-behance-square" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
              <div className="footer-infor-title">
                <h5>Thanh Toán</h5>
                <p>Chúng tôi chấp nhận thanh toán với tất cả loại thẻ</p>
                <div className="atm-icon">
                  <span style={{ color: "#3B5A9A" }}>
                    <i className="fab fa-cc-visa" />
                  </span>
                  <span style={{ color: "#CE3633" }}>
                    <i className="fab fa-cc-mastercard" />
                  </span>
                  <span style={{ color: "#42C8F4" }}>
                    <i className="fab fa-cc-paypal" />
                  </span>
                  <span style={{ color: "#F8BC2E" }}>
                    <i className="fab fa-cc-jcb" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  </div>
  )
}
