import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { Avatar } from 'antd';
import logo from 'assets/img/brand/logo.png';
import sygnet from 'assets/img/brand/sygnet.png';
import { router } from 'navigator/router';

class DefaultHeader extends Component {
  handleClickLogout = () => {};

  render() {
    return (
      <Fragment>
        <AppNavbarBrand
          className='d-md-down-none'
          full={{ src: logo, width: 90, height: 35, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler />
        <Nav className='mx-auto text-center' display='lg' pills>
          <NavItem className='px-3'>
            <NavLink to='#' className='nav-link d-md-down-none'>
              Trang chủ
            </NavLink>
            <NavLink to='#' className='nav-link d-lg-none'>
              <i className='icon-home' />
            </NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink to={router.Colors.path} title={router.Colors.name} className='nav-link d-md-down-none'>
              Tin tức - Hoạt động
            </NavLink>
            <NavLink to={router.Colors.path} title={router.Colors.name} className='nav-link d-lg-none'>
              <i className='cui-rss' />
            </NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink to={router.Icons.path} title={router.Icons.name} className='nav-link d-md-down-none'>
              Danh bạ
            </NavLink>
            <NavLink to={router.Icons.path} title={router.Icons.name} className='nav-link d-lg-none'>
              <i className='icon-people' />
            </NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink to={router.Colors.path} title={router.Colors.name} className='nav-link d-md-down-none'>
              Giới thiệu
            </NavLink>
            <NavLink to={router.Colors.path} title={router.Colors.name} className='nav-link d-lg-none'>
              <i className='icon-info' />
            </NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink to={router.Icons.path} title={router.Icons.name} className='nav-link d-md-down-none'>
              Liên hệ
            </NavLink>
            <NavLink to={router.Icons.path} title={router.Icons.name} className='nav-link d-lg-none'>
              <i className='icon-phone' />
            </NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink to={router.Colors.path} title={router.Colors.name} className='nav-link d-md-down-none'>
              Link
            </NavLink>
            <NavLink to={router.Colors.path} title={router.Colors.name} className='nav-link d-lg-none'>
              <i className='icon-link' />
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className='ml-auto mr-4' navbar>
          <AppHeaderDropdown direction='down'>
            <DropdownToggle nav>
              <Avatar>Admin</Avatar>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag='div' className='text-center'>
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className='icon-key' /> Change Password
              </DropdownItem>
              <DropdownItem header tag='div' className='text-center'>
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem onClick={this.handleClickLogout}>
                <i className='icon-logout' /> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </Fragment>
    );
  }
}

export default DefaultHeader;
