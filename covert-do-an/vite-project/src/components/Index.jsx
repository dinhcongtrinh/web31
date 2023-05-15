import React from 'react'
import './Home.css'
import './Header.css'
import './Main.css'
import './Footer.css'
export default function Index() {
  return (
    <div><>
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
              <a href="contact.html">
                <span>
                  <i className="fas fa-map" />
                </span>
                Liên Hệ
              </a>
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
            <img src="./img/imgcuahang/logoannhien.jpg" alt="" />
          </a>
          <div className="header-nav-card">
            <button className="btn-search" id="btnSearchNav" type="button">
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
              <div className="nav-item active-nav">
                <a href="index.html" className="">
                  Trang chủ
                </a>
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
    <section className="box-element">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="img/banner/02.jpg"
              className="d-block w-100 banner-img"
              alt="..."
            />
            <div className="slide-content-box">
              <h1 className="slide-title">ANH NHIÊN CÀ PHÊ</h1>
              <p>Chúc quý khách trải nhiệm tốt dịch vụ củ chúng tôi</p>
              <div>
                <a href="shirt.html" className="btn-in-slide">
                  Khám Phá
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="img/banner/banner3.jpg"
              className="d-block w-100 banner-img"
              alt="..."
            />
            <div className="slide-content-box">
              <h1 className="slide-title">INTERESTING BLOG</h1>
              <p>Nét văn hóa đẹp của người Việt trong đương đại</p>
              <div>
                <a href="blog.html" className="btn-in-slide">
                  Khám Phá
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    <main>
      <div className="container container-main">
        <div className="row list-category box-element">
          <div className="col-lg-3 col-md-6 col-sm-6 item-cate">
            <div className="about-picture">
              <a href="shirt.html">
                <img
                  className="img-cate"
                  src="./img/imgtra/trabuoihongf.jpg"
                  alt=""
                />
              </a>
              <a href="shirt.html">
                <div className="picture-title">Trà</div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 item-cate">
            <div className="about-picture">
              <a href="pant.html">
                <img
                  className="img-cate"
                  src="./img/img.cf/espressoo.jpg"
                  alt=""
                />
              </a>
              <a href="pant.html">
                <div className="picture-title">Cà Phê</div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 item-cate">
            <div className="about-picture">
              <a href="shoes.html">
                <img
                  className="img-cate"
                  src="./img/img-đồ-ăn/bb-chứng-muối.jpg"
                  alt=""
                />
              </a>
              <a href="shoes.html">
                <div className="picture-title">ĐỒ Ăn</div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 item-cate">
            <div className="about-picture">
              <a href="accessories.html">
                <img
                  className="img-cate"
                  src="./img/img.sp/nước ep hq.jpg"
                  alt=""
                />
              </a>
              <a href="accessories.html">
                <div className="picture-title">Nước Ép</div>
              </a>
            </div>
          </div>
        </div>
        <div className="box-element">
          <div className="title-box mb-4 row">
            <div className="col-lg-3 col-md-4 col-sm-12 title">
              <h1>SẢN PHẨM MỚI</h1>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 product-list-cate">
              {/* <div>
                        <a href=""><span><i class="fas fa-tshirt"></i></span> Áo</a>|
                        <a href=""><span><i class="fas fa-fire"></i></span> Quần</a>|
                        <a href=""><span></span><i class="fas fa-shoe-prints"></i> Giày</a>|
                        <a href=""><span><i class="fab fa-redhat"></i></span> Phụ Kiện</a>
                    </div> */}
            </div>
          </div>
          <div className="owl-carousel owl-theme" id="owlCarouselProduct">
            <div className="item product-item">
              <div className="card" style={{}}>
                <div className="card-img">
                  <a href="">
                    <img
                      src="./img/detox/dt-tao-dưa-chanh-leo.jpg"
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
                  <h5 className="card-title">Detox Táo Dứa Chanh Leo</h5>
                  <p className="card-text">
                    {" "}
                    <span>50.000 </span>₫
                  </p>
                </div>
              </div>
            </div>
            <div className="item product-item">
              <div className="card" style={{}}>
                <div className="card-img">
                  <img
                    src="./img/img.cf/bacsuu.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                    <h5 className="card-title">Bạc Sửu</h5>
                  </a>
                  <p className="card-text">35.000 ₫</p>
                </div>
              </div>
            </div>
            <div className="item product-item">
              <div className="card" style={{}}>
                <div className="card-img">
                  <img
                    src="./img/img-đồ-ăn/bb-chay.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                    <h5 className="card-title">Bánh Bao Chay</h5>
                  </a>
                  <p className="card-text">15.000 ₫</p>
                </div>
              </div>
            </div>
            <div className="item product-item">
              <div className="card" style={{}}>
                <div className="card-img">
                  <img
                    src="./img/imgtra/olong quế hoa.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                    <h5 className="card-title">Trà Ô Long Quế Hoa</h5>
                  </a>
                  <p className="card-text">45.000 ₫</p>
                </div>
              </div>
            </div>
            <div className="item product-item">
              <div className="card" style={{}}>
                <div className="card-img">
                  <img
                    src="./img/img-đồ-ăn/banh-ngọt-20k.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                    <h5 className="card-title">Bánh Ngọt</h5>
                  </a>
                  <p className="card-text">20.000 ₫</p>
                </div>
              </div>
            </div>
            <div className="item product-item">
              <div className="card" style={{}}>
                <div className="card-img">
                  <img
                    src="./img/detox/sc-đb-soài.webp"
                    className="card-img-top"
                    alt="..."
                  />
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
                    <h5 className="card-title">Sữa Chua Đặc Biệt Soài</h5>
                  </a>
                  <p className="card-text">59.000 ₫</p>
                </div>
              </div>
            </div>
            <div className="item product-item">
              <div className="card" style={{}}>
                <div className="card-img">
                  <img
                    src="./img/Nuocep/nuocepcarot.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                    <h5 className="card-title">Nuocs Ép Cà Rốt</h5>
                  </a>
                  <p className="card-text">50.000 ₫</p>
                </div>
              </div>
            </div>
            <div className="item product-item" itemScope="" itemType="abc">
              <div className="card" style={{}}>
                <div className="card-img">
                  <img
                    src="./img/Nuocep/nuocepdua.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="add-cart-box">
                    <a href="carf">
                      <span>
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                      </span>
                      THÊM VÀO GIỎ HÀNG
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <a href="">
                    <h5 className="card-title">Nước Ép Dứa</h5>
                  </a>
                  {/* <p class="card-text-sale"><strike>50.000 ₫</strike></p> */}
                  <p className="card-text">50.000 ₫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panner-adver box-element">
          <img src="./img/Banner.jpg" alt="" />
          <div className="text-adver font-text-2">
            <p>
              Giảm 10% khi tổng hóa đơn <br /> trên 500.000 đ
            </p>
          </div>
        </div>
        {/* Xu huong */}
        <div className="box-element">
          <div className="title-box mb-4 row">
            <div className="col-lg-3 col-md-4 col-sm-6 title">
              <h1>Sản Phẩm Yêu Thích</h1>
            </div>
            {/* <div class="col-lg-9 col-md-8 col-sm-12 product-list-cate">
                    <div>
                        <a href=""><span><i class="fas fa-tshirt"></i></span> Áo</a>|
                        <a href=""><span><i class="fas fa-fire"></i></span> Quần</a>|
                        <a href=""><span></span><i class="fas fa-shoe-prints"></i> Giày</a>|
                        <a href=""><span><i class="fab fa-redhat"></i></span> Phụ Kiện</a>
                    </div>
                </div> */}
          </div>
          <div className="row mb-4 products">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/img.cf/bacsuu.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Bạc Sửu</h5>
                    </a>
                    {/* <p class="card-text-sale"><strike>700.000 ₫</strike></p> */}
                    <p className="card-text">35.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/imgespreso/annhieepresso.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Espressoo</h5>
                    </a>
                    <p className="card-text">28.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/imgtra/olong quế hoa.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Trà Ô Long Quế Hoa</h5>
                    </a>
                    <p className="card-text">45.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/img-đồ-ăn/bm-sốt-vang.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Bánh mỳ Sốt Vang </h5>
                    </a>
                    <p className="card-text">45.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/imgtra/hong trà chanh leo.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Hồng Trà Chanh Leo</h5>
                    </a>
                    <p className="card-text">45.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/detox/sc-đb-viêt-quất.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Sữa Chua Dặc Biệt Việt Quất</h5>
                    </a>
                    <p className="card-text">59.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/imgtra/trabuoihongf.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Danh TRà Buổi Hồng</h5>
                    </a>
                    <p className="card-text">45.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 item">
              <div className="product-item">
                <div className="card" style={{}}>
                  <div className="card-img">
                    <img
                      src="./img/img.cf/nâu đá.jpg"
                      className="card-img-top"
                      alt="..."
                    />
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
                      <h5 className="card-title">Cà Phê Nâu Đá</h5>
                    </a>
                    <p className="card-text">29.000 ₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-btn font-text-2 mb-3">
            <a href="shirt.html" className=" btn-viewmore">
              Xem thêm
            </a>
          </div>
        </div>
        {/* Tin Tưc */}
        <div className="box-element">
          <div className="title-box mb-4">
            <h1>Dịch Vụ Tại Cửa Hàng Có Những Gì</h1>
          </div>
          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/ttvpv.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">
                      Tầng Hai An Nhiên Khách Hàng Đặt Phòng Tổ Chức Sự Kiện
                    </h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 21/01/2023
                      </span>
                      <span>
                        <i className="fas fa-user" /> Hải Nguyễn
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        {" "}
                        Tầng hai không gian rộng , anh sáng có thể điều chỉnh tùy
                        thích , Phòng được thiết kế cách âm , Bố cục được xếp tùy
                        thích theo khách hàng
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/trangthietbij.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">
                      Trang thiết Bị Được Trang Bị Đầy Đủ Tại Cửa Hàng
                    </h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 21/01/2021
                      </span>
                      <span>
                        <i className="fas fa-user" /> Phạm văn Nam{" "}
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        Lý do mà An Nhiên xây dụng cửa hàng hiện đại hóa trang
                        thiết bị , để khách hàng được hài lòng là sự thành công
                        của thương hiệu
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/spdadang.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">
                      Sản Phẩm Đa Dạng Theo Phong Cách Châu Âu
                    </h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 21/01/2021
                      </span>
                      <span>
                        <i className="fas fa-user" /> Phạm Nam
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        {" "}
                        Cửa hàng cung cấp cả đồ ăn và đồ uống , đa dạng về loại đẻ
                        khách hÀng lựa chọn theo sở thích cá nhân
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="title-box mb-4">
            <h1>Phát Triển Thương Hiệu </h1>
          </div>
          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/khwifi.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">
                      Xây Dựng Cửa Hàng Theo Phong Cách Hiện Đại
                    </h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 02 / 03 / 2023
                      </span>
                      <span>
                        <i className="fas fa-user" /> Văn Phong
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        {" "}
                        Ứng dụng công nghệ vÀo sẢn xuất vÀ kinh doanh la cÁch để
                        thương hiệu cạnh tranh Trong kinH tế thị trường
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/nam-muoi-muoi-nam-cafe-3.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">Không Ngừng Mở Thêm Của Hàng</h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 24/05/2022
                      </span>
                      <span>
                        <i className="fas fa-user" /> Hoàng Nam
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        {" "}
                        Chúng tôi hy vọng bằng việc ở rộng thêm nhiều cửa hàng để
                        có thể mang dịch vụ đặc biệt tới qúy khách hàng
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/cuahangf2.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">Sang Nhượng Cửa Hàng</h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 20/06/2023
                      </span>
                      <span>
                        <i className="fas fa-user" /> Minh Nguyễn
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        Phát triển thương hiệu , An Nhiên chọn giải Pháp sang
                        nhượng lÀ một lựa chọn tốt về mặt quan lý , và cạnh tranh
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/hoptac.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">
                      Hợp TÁc Phát Triển Xây Dựng Thương Hiệu
                    </h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 21/01/2021
                      </span>
                      <span>
                        <i className="fas fa-user" /> Minh Nguyễn
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        Gia tăng ngồn vốn gia tăng quản lý để cạnh tranh trong nền
                        kinh tế thị trường
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/sxcaphe.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">Sản Xuất Sản Phẩm Cà Phê Thô</h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 21/01/2021
                      </span>
                      <span>
                        <i className="fas fa-user" /> Minh Nguyễn
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        Ứng dụng công nghệ Châu Âu vào sản xuất cà phê
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-item">
                <div className="card" style={{}}>
                  <img
                    src="./img/imgcuahang/sxcaphe.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body card-news">
                    <h5 className="card-title">Sản Xuất Sản Phẩm Cà Phê Thô</h5>
                    <div className="infor-news">
                      <span>
                        <i className="fas fa-calendar-day" /> 21/01/2021
                      </span>
                      <span>
                        <i className="fas fa-user" /> Minh Nguyễn
                      </span>{" "}
                      |<span>2 bình luận</span>
                      <p className="content-card">
                        Ứng dụng công nghệ Châu Âu vào sản xuất cà phê
                      </p>
                      <a href="" className="btn-blog-detail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-btn font-text-2">
            <a href="blog.html" className=" btn-viewmore">
              Xem thêm
            </a>
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
