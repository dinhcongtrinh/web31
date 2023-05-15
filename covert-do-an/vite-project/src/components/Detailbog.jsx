import React from 'react'
import './Detailblog.css'

export default function Detailbog() {
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
              <div className="nav-item active-nav">
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
              <a href="blog.html" className="link-previous-page">
                Tin Tức &gt;
              </a>
              <span className="current-page">
                {" "}
                Trang Phục Đi Biển Cho Chàng Mùa Hè 2021
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 box-element content-blog-area">
            <div className="content-blog">
              <div className="main-img-blog">
                <img src="img/blog/imgblog2.jpg" alt="" />
              </div>
              <div className="main-content">
                <h2 className="title-blog">
                  Trang phục đi biển cho chàng mùa hè 2021
                </h2>
                <div className="infor-blog">
                  <span>
                    <i className="fas fa-calendar-alt" /> 01/01/2021
                  </span>
                  <span>
                    <i className="fas fa-user" /> Minh Nguyễn
                  </span>{" "}
                  |<span>2 bình luận</span>
                </div>
                <div>
                  <p className="blog-para">
                    I must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but because
                    those who do not know how to pursue pleasure rationally
                    encounter consequences that are extremely painful. Nor again
                    is there anyone who loves or pursues or desires to obtain pain
                    of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him
                    some great pleasure. To take a trivial example
                  </p>
                  <p className="blog-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="img-samll">
                    <img src="img/blog/imgblog4.jpg" alt="" />
                  </div>
                  <p className="blog-para">
                    I must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but because
                    those who do not know how to pursue pleasure rationally
                    encounter consequences that are extremely painful. Nor again
                    is there anyone who loves or pursues or desires to obtain pain
                    of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him
                    some great pleasure. To take a trivial example
                  </p>
                  <p className="blog-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="row footer-content-blog">
                    <div className="col-md-6 col-sm-6 p-0">
                      <div className="blog-key-world">
                        <span>TỪ KHÓA: </span>
                        <span>Xu hướng</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 p-0">
                      <div className="icon-link-social">
                        <a href="">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-area">
              <h3 className="heading-blog heading-comment">Bình Luận</h3>
              <div className="mb-5">
                <div className="user-comment">
                  <div className="img-of-user">
                    <img src="img/imgOfUser/EC0nvJEUwAEQOnZ.jpg" alt="" />
                  </div>
                  <div className="content-comment">
                    <div className="infor-user">
                      <span className="name-user">Minh Nguyễn</span>
                      <span className="time-post">14-01-2021</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus at beatae illum ratione perspiciatis iste debitis
                      nihil? Tempore, rem minima?
                    </p>
                    <button className="btn-reply-comment">Trả Lời</button>
                  </div>
                </div>
                <div className="user-comment">
                  <div className="img-of-user">
                    <img src="img/imgOfUser/EC0nvJEUwAEQOnZ.jpg" alt="" />
                  </div>
                  <div className="content-comment">
                    <div className="infor-user">
                      <span className="name-user">Minh Nguyễn</span>
                      <span className="time-post">14-01-2021</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus at beatae illum ratione perspiciatis iste debitis
                      nihil? Tempore, rem minima?
                    </p>
                    <button className="btn-reply-comment">Trả Lời</button>
                  </div>
                </div>
              </div>
              <h3 className="heading-blog heading-comment">Để Lại Bình Luận</h3>
              <form action="">
                <div
                  className="user-comment comment-box"
                  style={{ border: "none" }}
                >
                  <div className="img-of-user">
                    <img src="img/imgOfUser/EC0nvJEUwAEQOnZ.jpg" alt="" />
                  </div>
                  <div className="content-comment box-input-comment">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={3}
                      className="form-control input-comment"
                      placeholder="Nội Dung Bình Luận"
                      defaultValue={""}
                    />
                    <div className="btn-post">
                      <button className="btn btn-primary">Đăng</button>
                    </div>
                  </div>
                </div>
              </form>
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
                <h3 className="heading-blog">Thể Loại</h3>
                <ul className="list-category">
                  <li>
                    <a href="">
                      <span>
                        <i className="fas fa-angle-right" />
                      </span>{" "}
                      Mùa đông
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <i className="fas fa-angle-right" />
                      </span>{" "}
                      Phong cách mới
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <i className="fas fa-angle-right" />
                      </span>{" "}
                      Dã Ngoại
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <i className="fas fa-angle-right" />
                      </span>{" "}
                      Tết
                    </a>
                  </li>
                </ul>
              </div>
              <div className="post-popular">
                <h3 className="heading-blog">Tin Phổ Biến</h3>
                <div className="post-popular-card">
                  <div className="post-img">
                    <img src="img/blog/imgblog3.jpg" alt="" />
                  </div>
                  <div className="post-content">
                    <h5>
                      <a href="">Cách chọn áo sơ mi cho phù hợp</a>
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
                    <img src="img/blog/kaki.jpg" alt="" />
                  </div>
                  <div className="post-content">
                    <h5>
                      <a href="">Đôi điều về Quần Kaki</a>
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
                    <img src="img/blog/short_2.jpg" alt="" />
                  </div>
                  <div className="post-content">
                    <h5>
                      <a href="">Bí quyết lựa chọn short kaki nam</a>
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
                    Thời Thượng
                  </a>
                  <a href="" className="tag-item">
                    Phối Đồ
                  </a>
                  <a href="" className="tag-item">
                    Đồ Nam
                  </a>
                  <a href="" className="tag-item">
                    Thiết Kế Mới
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
  </>
  </div>
  )
}
