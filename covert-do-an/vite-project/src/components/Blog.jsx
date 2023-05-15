import React from 'react'
import "./Blog.css"

export default function Blog() {
  return (
    <div><div className="col-lg-3 col-md-6 col-sm-12 footer-infor-item">
    <div className="footer-infor-title">
      <h5>Theo Dõi Chúng Tôi</h5>
      <div className="follow-icon">
        <a href="">
          <span style={{ color: "#3B5A9A" }}>
            <i className="fab fa-facebook-square">
              {" "}
              <div id="hideContent" className="" />
            </i>
          </span>
        </a>
        <i className="fab fa-facebook-square">
          <section className="navbar-left-box">
            <a href="">
              <div id="hideContent" className="" />
            </a>
            <div id="navbar-active" className="navbar-left">
              <a href=""></a>
              <div className="visual">
                <a href=""></a>
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
                    <a
                      type="button"
                      className=""
                      href="#"
                      id="btnDropdownMenuProduct"
                    >
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
                    <a href="đồ-ăn.html">Đồ Ăn</a>
                    <a href="xuat-khau.html">Xuất khẩu</a>
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
                      {" "}
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
                      <li
                        className="nav-item nav-modal-custom"
                        role="presentation"
                      >
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
                      <li
                        className="nav-item nav-modal-custom"
                        role="presentation"
                      >
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
            list-slide-logo box-element
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
                <div
                  className="collapse navbar-collapse main-menu"
                  id="navbarNav"
                >
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
                        <a href="đồ-ăn.html">Đồ Ăn</a>
                        <a href="xuat-khau.html">Xuất khẩu</a>
                      </div>
                    </div>
                    <div className="nav-item active-nav">
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
                  <h3 className="title-banner-page">Tin Tức</h3>
                  <div className="current-page-box-link">
                    <a href="index.html" className="link-previous-page">
                      Trang chủ &gt;
                    </a>
                    <span className="current-page"> Tin Tức</span>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-9 col-md-9 col-sm-12 box-element">
                  <div className="card card-blog">
                    <div className="card-body blog-content">
                      <img src="./img/imgcuahang/ănuong.jpg" alt="..." />
                      <h3 className="card-title">
                        <a href="detailblog.html">
                          Trải nhiệm sản phẩm của cửa hàng{" "}
                        </a>
                      </h3>
                      <div className="card-infor-area">
                        <span>
                          <i className="fas fa-calendar-week" /> 01/01/2021
                        </span>
                        <span>
                          <i className="fas fa-user" /> Minh Nguyễn{" "}
                        </span>
                        |<span>2 bình luận</span>
                      </div>
                      <p className="card-text">
                        Đồ uống đa dạng và kèm đồ ăn mà cửa hàng mang lại để khách
                        hàng thỏa thức trải nhiệm
                      </p>
                      <a href="detailblog.html" className="btn-blog-viewdetail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                  <div className="card card-blog">
                    <div className="card-body blog-content">
                      <img src="./img/imgcuahang/hopmanuline.jpg" alt="..." />
                      <h3 className="card-title">
                        <a href="detailblog.html">
                          Tổ chức sinh nhật tại cửa hàng{" "}
                        </a>
                      </h3>
                      <div className="card-infor-area">
                        <span>
                          <i className="fas fa-calendar-week" /> 01/01/2021
                        </span>
                        <span>
                          <i className="fas fa-user" /> Minh Nguyễn{" "}
                        </span>
                        |<span>2 bình luận</span>
                      </div>
                      <p className="card-text">
                        {" "}
                        không gian yên tĩnh thoáng đãng , âm nhạc , đồ uống là lựa
                        chọn để tổ chức sinh nhật .
                      </p>
                      <a href="detailblog.html" className="btn-blog-viewdetail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                  <div className="card card-blog">
                    <div className="card-body blog-content">
                      <img
                        src="./img/imgcuahang/phong-vấn-trường-quay.jpg"
                        alt="..."
                      />
                      <h3 className="card-title">
                        <a href="detailblog.html">
                          Không gian tâng hai được chọn làm trương quay vtv
                        </a>
                      </h3>
                      <div className="card-infor-area">
                        <span>
                          <i className="fas fa-calendar-week" /> 01/01/2021
                        </span>
                        <span>
                          <i className="fas fa-user" /> Minh Nguyễn{" "}
                        </span>
                        |<span>2 bình luận</span>
                      </div>
                      <p className="card-text">
                        Kiến trúc ánh sáng tốt , phòng ốc đẹp , được cách âm bên
                        ngoài . Đó là một lựa chọn để làm trường quay phỏng vấn
                      </p>
                      <a href="detailblog.html" className="btn-blog-viewdetail">
                        Chi tiết &gt;&gt;
                      </a>
                    </div>
                  </div>
                  <div className="pagination-box">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="detailblog.html"
                            aria-label="Previous"
                          >
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
                          <a
                            className="page-link"
                            href="detailblog.html"
                            aria-label="Next"
                          >
                            <span aria-hidden="true">»</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 box-element">
                  <div className="blog-sidebar-content">
                    <form action="">
                      <div className="form-group blog-form-search">
                        <input
                          type="text"
                          placeholder="Tìm kiếm bài viết"
                          className="form-control"
                        />
                        <button type="submit" className="btn-submit-search">
                          <span>
                            <i className="fas fa-search" />
                          </span>
                        </button>
                      </div>
                    </form>
                    <div className="blog-category-filter">
                      <h3 className="heading-blog">Dịch vụ Của Hàng</h3>
                      <ul className="list-category">
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Phòng Họp{" "}
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Đồ Uống
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Đồ Ăn
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Wifi
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog-category-filter">
                      <h3 className="heading-blog">Phát Triển Thương Hiệu</h3>
                      <ul className="list-category">
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Hợp Tác Đầu Tư{" "}
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Chuyển Nhượng Của Hàng
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Kế Hoạch Marketting
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Xuất Khẩu Sản Phẩm
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-popular">
                      <h3 className="heading-blog">
                        Họp Nhóm Tại Cửa Hàng An Nhiên
                      </h3>
                      <div className="post-popular-card">
                        <div className="post-img">
                          <img src="./img/imgcuahang/cửahang.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <h5>
                            <a href="">Nhóm Bảo Hiểm Manulife</a>
                          </h5>
                          <div className="post-time">
                            <span>
                              <i className="fas fa-calendar-alt" />
                            </span>{" "}
                            25/02/2021
                          </div>
                        </div>
                      </div>
                      <div className="post-popular-card">
                        <div className="post-img">
                          <img src="./img/imgcuahang/cong-nghe.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <h5>
                            <a href="">Nhóm Công Nghệ Số</a>
                          </h5>
                          <div className="post-time">
                            <span>
                              <i className="fas fa-calendar-alt" />
                            </span>{" "}
                            28/01/2021
                          </div>
                        </div>
                      </div>
                      <div className="post-popular-card">
                        <div className="post-img">
                          <img src="./img/imgcuahang/hopnhom.jpg" alt="" />
                        </div>
                        <div className="post-content">
                          <h5>
                            <a href="">
                              Nhóm Quảng Cáo Sản Phẩm Sách Dạy Trẻ Nhỏ
                            </a>
                          </h5>
                          <div className="post-time">
                            <span>
                              <i className="fas fa-calendar-alt" />
                            </span>{" "}
                            01/01/2021
                          </div>
                        </div>
                      </div>
                      <div className="post-popular-card">
                        <div className="post-img">
                          <img
                            src="./img/imgcuahang/nhom-bh-manulife.webp"
                            alt=""
                          />
                        </div>
                        <div className="post-content">
                          <h5>
                            <a href="">
                              Tập Đoàn Bất Động Sản Thiên Khôi Dạy Kỹ Năng
                            </a>
                          </h5>
                          <div className="post-time">
                            <span>
                              <i className="fas fa-calendar-alt" />
                            </span>{" "}
                            01/01/2021
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-tag">
                      <h3 className="heading-blog">Tag</h3>
                      <div className="tag-box">
                        <a href="" className="tag-item">
                          Sinh Nhật
                        </a>
                        <a href="" className="tag-item">
                          Họp Lớp
                        </a>
                        <a href="" className="tag-item">
                          Dịch Vụ{" "}
                        </a>
                        <a href="" className="tag-item">
                          Cửa Hàng
                        </a>
                      </div>
                    </div>
                  </div>
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
        </i>
      </div>
    </div>
  </div>
  </div>
  )
}
