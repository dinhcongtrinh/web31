import React from 'react'
import "./Caphe.css"

export default function Caphe() {
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
              <a href="caphe.html">Cà Phê</a>
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
                          id="inputNameRegis"
                          placeholder="Nhập họ tên"
                        />
                        <span
                          id="errorInputNameRegis"
                          className="error-message"
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
                          id="inputPhoneRegis"
                          placeholder="Nhập số điện thoại"
                        />
                        <span
                          id="errorInputPhoneRegis"
                          className="error-message"
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
                          id="inputEmailRegis"
                          placeholder="Nhập email"
                        />
                        <span
                          id="errorInputEmailRegis"
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
                          required=""
                          className="form-control"
                          id="inputPasswordRegis"
                          placeholder="Mật khẩu từ 9 đến 32 ký tự"
                        />
                        <span
                          id="errorInputPassRegis"
                          className="error-message"
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
                        >
                          <option selected="" value={-1}>
                            Ngày
                          </option>
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
                        >
                          <option selected="" value={-1}>
                            Tháng
                          </option>
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
                        >
                          <option selected="" value={-1}>
                            Năm
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-3" />
                      <span
                        id="errorSelectDate"
                        className="error-message col-sm-9"
                        style={{ paddingLeft: "1rem" }}
                      />
                    </div>
                    <div className="form-group row my-4">
                      <div className="col-sm-3" />
                      <div className="col-sm-9">
                        <button
                          type="submit"
                          id="btnSubmitRegis"
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
            <a href="cart.html">
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
              <div className="nav-item dropdown ">
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
    {/* button filter  */}
    <div className="button-filter-box">
      <button className="btn-active-filter" id="btnActiveFilter">
        <span>
          <i className="fas fa-filter" />
        </span>
      </button>
    </div>
    {/* Main cotent */}
    <main>
      <div className="container">
        <div className="banner-current-page box-element">
          <img src="img/banercf.jpg" alt="" />
          <div className="current-page-box">
            <h3 className="title-banner-page">Sản Phẩm</h3>
            <div className="current-page-box-link">
              <a href="" className="link-previous-page">
                Trang chủ &gt;
              </a>
              <span className="current-page"> Cà Phê</span>
            </div>
          </div>
        </div>
        <div className="row mb-4 search-order-box">
          <div className="filter-search col-lg-3 col-md-4 col-sm-6">
            <form action="" className="form-search">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm..."
              />
              <button type="submit" className="btn-search-submit">
                <span>
                  <i className="fas fa-search" />
                </span>
              </button>
            </form>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="form-group order-by">
              <select id="my-select" className="custom-select" name="">
                <option>Sắp xếp giá</option>
                <option>Từ thấp tới cao</option>
                <option>Từ cao tới thấp</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row box-element">
          {/* <div class="col-lg-3 col-md-4 col-sm-12 filter-box-all" id="optionFilterBox">
                <div class="filter-box">
                    <div class="filter-title">
                        <h5>Thương Hiệu</h5>
                        <button class="btn-active-filter-box" style="outline: none;">-</button>
                    </div>
                    <ul class="list-cate" id="filterCate">
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Nike</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Simwood Denim</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Owen</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Uniqlo</label>
                        </li>
                    </ul>
                </div>
  
                <div class="filter-box">
                    <div class="filter-title">
                        <h5>Thể Loại</h5>
                        <button class="btn-active-filter-box" class="btn" style="outline: none">-</button>
                    </div>
                    <ul class="list-cate" id="filterCate">
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">T-Shirt</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Áo len</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Áo sơ mi</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Áo khoác</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Áo thun</label>
                        </li>
                    </ul>
                </div>
                <div class="filter-box">
                    <div class="filter-title">
                        <h5>Size</h5>
                        <button class="btn-active-filter-box" class="btn" style="outline: none">-</button>
                    </div>
                    <ul class="list-size-filter" id="filterCate">
                        <li>
                            <a href="">S</a>
                        </li>
                        <li>
                            <a href="">M</a>
                        </li>
                        <li>
                            <a href="">L</a>
                        </li>
                        <li>
                            <a href="">XL</a>
                        </li>
                        <li>
                            <a href="">XXL</a>
                        </li>
                        <li>
                            <a href="">XXXL</a>
                        </li>
                    </ul>
                </div>
                <div class="filter-box">
                    <div class="filter-title">
                        <h5>Màu Sắc</h5>
                        <button class="btn-active-filter-box" class="btn" style="outline: none">-</button>
                    </div>
                    <ul class="list-cate" id="filterCate">
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Đỏ</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Vàng</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Cam</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Hồng</label>
                        </li>
                        <li>
                            <input type="checkbox" class="" />
                            <label for="">Nâu</label>
                        </li>
                    </ul>
                </div> */}
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12 mb-4">
          <div className="row products">
            <div className="col-lg-4 col-md-6 col-sm-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="detailProduct.html">
                      <img
                        src="img/Robusta-thuong-hang.jpg"
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
                    <a href="detailProduct.html">
                      <h5 className="card-title">Robusta thượng hạng</h5>
                    </a>
                    <p className="card-text">
                      {" "}
                      <span>450.000 </span>₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 item">
              <div className=" product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="detailProduct.html">
                      <img
                        src="img/abrica-thượng-hạng.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="add-cart-box">
                      <a href="detailProduct.html">
                        <span>
                          <i className="fa fa-shopping-cart" aria-hidden="true" />
                        </span>
                        THÊM VÀO GIỎ HÀNG
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <a href="detailProduct.html">
                      <h5 className="card-title">Abrica thượng hạng</h5>
                    </a>
                    <p className="card-text">
                      {" "}
                      <span>450.000 </span>₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 item">
              <div className=" product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/extra-cà-phê.jpg"
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
                    <a href="detailProduct.html">
                      <h5 className="card-title">Hàng xuất khẩu</h5>
                    </a>
                    <p className="card-text">
                      {" "}
                      <span>450.000 </span>₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/ca-phe-chon-tai-sao-lai-dat.jpg"
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
                    <a href="detailProduct.html">
                      <h5 className="card-title">Cà phê Chồn</h5>
                    </a>
                    <p className="card-text">
                      {" "}
                      <span>1.500.000 </span>₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 item">
              <div className=" product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/ca-phe-chon-tinh.jpg"
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
                    <a href="" />
                    <h5 className="card-title">CÀ phê Chồn tinh chế </h5>
                    <p className="card-text">
                      {" "}
                      <span>2.100.000 </span>₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 item">
              <div className=" product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <a href="">
                      <img
                        src="img/cafe-robusta-rang-xay.webp"
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
                    <a href="" />
                    <h5 className="card-title">Robusta rang xay</h5>
                    <p className="card-text">
                      {" "}
                      <span>500.000 </span>₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-box">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item ">
                  <a className="page-link active-pagination" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div className="container"></div>
      <div className="footer-area">
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
      </div>
    </footer>
  </>
  </div>
  )
}
