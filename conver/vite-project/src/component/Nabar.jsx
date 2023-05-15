import React from 'react'
import (./Header.css)


export default function Nabar() {
  return (
    <div><header>
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
  </div>
  )
}
