import React from 'react'
import './Header.css'
import './Main.css'
import './Footer.css'
import './Oder.css'
export default function Order() {
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
    <section className="model_checkout">
      {/* Modal */}
      <div
        className="modal  fade "
        id="confirmOrder"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-checkout">
          <div className="modal-content">
            <div className="modal-body ">
              <div className="success-icon">
                <i className="fas fa-check-circle" />
              </div>
              <p className="text-sucess">Đặt hàng thành công</p>
              <div className="detail-order">
                <div className="check-out">
                  <span>Mã đơn hàng:</span>
                  <span>11234</span>
                </div>
                <div className="check-out">
                  <span>Khách hàng:</span>
                  <span>Nguyễn Ngọc Vũ</span>
                </div>
                <div className="check-out">
                  <span>Địa chỉ: </span>
                  <span>12 Trần Thái Tông, Cầu Giấy, Hà Nội</span>
                </div>
                <div className="check-out">
                  <span>Số điện thoại: </span>
                  <span>0966247911</span>
                </div>
                <div className="check-out">
                  <span>Hình thức thanh toán: </span>
                  <span>Thanh toán khi nhận hàng</span>
                </div>
                <p className="text-order">Đơn hàng</p>
                <div className="check-out">
                  <span className="name-product">01 x Áo khoác dài</span>
                  <span>200.000 đ</span>
                </div>
                <div className="check-out">
                  <span className="name-product">01 x Áo khoác dài</span>
                  <span>200.000 đ</span>
                </div>
                <div className="total-order">
                  <span>Tổng tiền</span>
                  <span>400.000 đ</span>
                </div>
                <div className="btn-return">
                  <a href="index.html">
                    <span>
                      <i className="fas fa-long-arrow-alt-left" />
                    </span>{" "}
                    Quay lại trang chủ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <a href="blog.html" className="">
                  Tin Tức
                </a>
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
                <a className="nav-link" href="#">
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
      <div className="container box-element">
        <div className="banner-current-page box-element">
          <img src="img/banerhatcf.jpg" alt="" />
          <div className="current-page-box">
            <h3 className="title-banner-page">Thanh Toán</h3>
            <div className="current-page-box-link">
              <a href="index.html" className="link-previous-page">
                Trang chủ &gt;
              </a>
              <a href="cart.html" className="link-previous-page">
                Giỏ Hàng &gt;
              </a>
              <span className="current-page"> Thanh Toán</span>
            </div>
          </div>
        </div>
        <h2 className="order-title">1. ĐỊA CHỈ THANH TOÁN</h2>
        <div className="row">
          <div className=" col-lg-7 col-md-12">
            <div className="infor-order-area">
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabel"
                    className="col-sm-3 col-form-label"
                  >
                    Họ tên
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="colFormLabel"
                      placeholder="Nhập họ tên"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabel"
                    className="col-sm-3 col-form-label"
                  >
                    Điện thoại
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="colFormLabel"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabel"
                    className="col-sm-3 col-form-label"
                  >
                    Tỉnh/Thành phố
                  </label>
                  <div className="col-sm-9">
                    <select name="address" id="" className="form-control">
                      <option value="">Chọn Tỉnh/Thành Phố</option>
                      <option value="">Hà Nội</option>
                      <option value="">Ninh Bình</option>
                      <option value="">Hải Phòng</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabel"
                    className="col-sm-3 col-form-label"
                  >
                    Quận/Huyện
                  </label>
                  <div className="col-sm-9">
                    <select name="address" id="" className="form-control">
                      <option value="">Chọn Quận/Huyện</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabel"
                    className="col-sm-3 col-form-label"
                  >
                    Địa chỉ
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      name="address"
                      id=""
                      className="form-control"
                      cols={30}
                      rows={4}
                      placeholder="Ghi rõ địa chỉ nhận hàng"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </form>
            </div>
            <h2 className="order-title py-3">2. Phương Thức Giao Hàng</h2>
            <div className="infor-order-area select-option-pay">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="cash"
                  defaultValue="option1"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Thanh toán tiền mặt khi nhận hàng
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="interBank"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Internet Banking
                </label>
              </div>
              <div className="inter-bank-infor" id="interBankInfor">
                <p>
                  <b>Chủ tài Khoản: Lưu Ngọc Hưng</b>
                </p>
                <p>
                  <b>Số tài Khoản: 0451000454383</b>
                </p>
                <p>
                  <b>Ngân hàng Vietcombank chi nhánh Thành Công</b>
                </p>
                <p>Nội dung: Thanh toán hóa đơn mua hàng [ họ tên ] -- [ SĐT ]</p>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="visa"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Thanh toán bằng thẻ quốc tế VISA, MASTER
                </label>
              </div>
              <div className="inter-bank-infor" id="visaCardBox">
                <div className="card-infor" id="cardVisaInfor">
                  <div className="font-site" id="fontSite">
                    <div className="mastercard-img">
                      <img src="img/card.jpg" alt="" />{" "}
                    </div>
                    <div className="number-card">
                      <p id="detailNumber">•••• •••• •••• ••••</p>
                    </div>
                    <div className="day">
                      <div className="name-owner name" id="owerName">
                        Tên Chủ Thẻ
                      </div>
                      <div className="date-card">
                        <p>Hiệu lực đến</p>
                        <p id="time">
                          <span id="day">••</span>/<span id="month">••</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="back-site active-display" id="backSite">
                    <div className="black-space" />
                    <div className="signature">
                      <div className="private-number" id="privateNumber" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <form>
                    <div className="form-group">
                      <label htmlFor="numberCard" className="">
                        Số Thẻ:
                      </label>
                      <input
                        autoComplete="off"
                        type="number"
                        id="numberCard"
                        className="form-control"
                        maxLength={16}
                        placeholder="VD: 0451000454383"
                        required=""
                        minLength={1}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name" className="col-form-label">
                        Tên in trên thẻ:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        style={{ textTransform: "uppercase" }}
                        autoComplete="off"
                        placeholder="VD: NGUYEN VAN A"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="">Ngày hết hạn</label>
                      <div className="group-input">
                        <input
                          type="text"
                          id="inputDay"
                          className="form-control"
                          placeholder="Ngày"
                          autoComplete="off"
                          maxLength={2}
                        />
                        <span>/</span>
                        <input
                          type="text"
                          id="inputMonth"
                          className="form-control"
                          placeholder="Tháng"
                          autoComplete="off"
                          maxLength={2}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name" className="col-form-label">
                        Mã Bảo Mật:
                      </label>
                      <input
                        type="text"
                        id="inputPrivateNumber"
                        className="form-control"
                        style={{ width: "5rem" }}
                        placeholder="VD:123"
                        autoComplete="off"
                      />
                    </div>
                    <div className="text-center">
                      <button className="btn btn-success">Xác Nhận</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="infor-bill-area">
              <div className="infor-bill-flex infor-bill-item">
                <span>Đơn hàng (2 sản phẩm)</span>
                <a href="cart.html">Sửa</a>
              </div>
              <div className="infor-bill-item ">
                <div className="order-product-item infor-bill-flex">
                  <span>1x</span>
                  <span>Aó khoác dài-đen-M</span>
                  <span>200.000đ</span>
                </div>
                <div className="order-product-item infor-bill-flex">
                  <span>1x</span>
                  <span>Aó khoác dài-đen-M</span>
                  <span>200.000đ</span>
                </div>
              </div>
              <div className="infor-bill-item">
                <div className="infor-bill-flex">
                  <span>Tạm Tính</span>
                  <span>400.000 đ</span>
                </div>
                <div className="infor-bill-flex">
                  <span>Phí Vận Chuyển</span>
                  <span>0đ</span>
                </div>
              </div>
              <div className="infor-bill-flex infor-bill-item total-price-bill">
                <span>Thành Tiền</span>
                <span>400.000 đ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-order">
          <a href="" data-toggle="modal" data-target="#confirmOrder">
            Đặt Mua
          </a>
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
